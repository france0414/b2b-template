#!/usr/bin/env node

import "./load-env.mjs";
import fs from "node:fs/promises";
import path from "node:path";
import { GoogleGenAI } from "@google/genai";

function printHelp() {
  console.log(`Usage:
  npm run generate:gemini -- --prompt "your prompt" [options]

Options:
  --prompt   Required. Prompt text for Gemini
  --model    Gemini model (default: gemini-2.5-flash)
  --out      Optional output file path
  --help     Show this help

Env:
  GEMINI_API_KEY must be set
`);
}

function parseArgs(argv) {
  const parsed = {
    prompt: "",
    model: "gemini-2.5-flash",
    out: "",
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

    if (current === "--model" && next) {
      parsed.model = next;
      i += 1;
      continue;
    }

    if (current === "--out" && next) {
      parsed.out = path.resolve(process.cwd(), next);
      i += 1;
    }
  }

  return parsed;
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

  if (!process.env.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is not set.");
  }

  const client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

  const response = await client.models.generateContent({
    model: args.model,
    contents: args.prompt,
  });

  const text = response.text ?? "";

  if (args.out) {
    await fs.mkdir(path.dirname(args.out), { recursive: true });
    await fs.writeFile(args.out, text, "utf8");
    console.log(`Saved output to: ${args.out}`);
  } else {
    console.log(text);
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
