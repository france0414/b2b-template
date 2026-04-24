import fs from "node:fs";
import path from "node:path";
import dotenv from "dotenv";

function loadEnvFile(fileName, override = false) {
  const filePath = path.resolve(process.cwd(), fileName);

  if (!fs.existsSync(filePath)) {
    return;
  }

  dotenv.config({ path: filePath, override });
}

loadEnvFile(".env");
loadEnvFile(".env.local", true);
