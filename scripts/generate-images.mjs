#!/usr/bin/env node

import "./load-env.mjs";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import OpenAI from "openai";

function printHelp() {
  console.log(`Usage:\n  npm run generate:image -- --prompt "industrial machine in factory" [options]\n\nOptions:\n  --prompt   Required. Image prompt text\n  --n        Number of images (default: 1)\n  --size     Size (default: 1024x1024)\n  --model    Model name (default: gpt-image-1)\n  --out      Output folder (default: OS temp folder)\n  --name     File name prefix (default: image)\n  --help     Show help\n\nEnv:\n  OPENAI_API_KEY must be set\n`);
}

function parseArgs(argv) {
  const parsed = {
    prompt: "",
    n: 1,
    size: "1024x1024",
    model: "gpt-image-1",
    out: path.join(os.tmpdir(), "b2b-template-images"),
    name: "image",
    help: false,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const current = argv[i];
    const next = argv[i + 1];

    if (current === "--help" || current === "-h") {
      parsed.help = true;
      continue;
    }

    if (current === "--prompt" && next) {
      parsed.prompt = next;
      i += 1;
      continue;
    }

    if (current === "--n" && next) {
      parsed.n = Number(next);
      i += 1;
      continue;
    }

    if (current === "--size" && next) {
      parsed.size = next;
      i += 1;
      continue;
    }

    if (current === "--model" && next) {
      parsed.model = next;
      i += 1;
      continue;
    }

    if (current === "--out" && next) {
      parsed.out = path.resolve(process.cwd(), next);
      i += 1;
      continue;
    }

    if (current === "--name" && next) {
      parsed.name = next;
      i += 1;
      continue;
    }
  }

  return parsed;
}

function extFromMime(mimeType) {
  if (!mimeType) return "png";
  if (mimeType.includes("jpeg")) return "jpg";
  if (mimeType.includes("webp")) return "webp";
  return "png";
}

async function saveFromUrl(url, filePath) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download image: ${response.status} ${response.statusText}`);
  }
  const arrayBuffer = await response.arrayBuffer();
  await fs.writeFile(filePath, Buffer.from(arrayBuffer));
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.help) {
    printHelp();
    return;
  }

  if (!args.prompt.trim()) {
    throw new Error("Missing --prompt. Run with --help for usage.");
  }

  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is not set.");
  }

  if (!Number.isInteger(args.n) || args.n < 1 || args.n > 10) {
    throw new Error("--n must be an integer between 1 and 10.");
  }

  await fs.mkdir(args.out, { recursive: true });

  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const result = await client.images.generate({
    model: args.model,
    prompt: args.prompt,
    n: args.n,
    size: args.size,
  });

  const saved = [];

  for (let i = 0; i < result.data.length; i += 1) {
    const item = result.data[i];
    const index = String(i + 1).padStart(2, "0");

    if (item.b64_json) {
      const filePath = path.join(args.out, `${args.name}-${index}.png`);
      await fs.writeFile(filePath, Buffer.from(item.b64_json, "base64"));
      saved.push(filePath);
      continue;
    }

    if (item.url) {
      const ext = extFromMime(item.mime_type);
      const filePath = path.join(args.out, `${args.name}-${index}.${ext}`);
      await saveFromUrl(item.url, filePath);
      saved.push(filePath);
      continue;
    }

    throw new Error(`No image payload found for index ${i}.`);
  }

  console.log(`Generated ${saved.length} image(s):`);
  for (const filePath of saved) {
    console.log(`- ${filePath}`);
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
