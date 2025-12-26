import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@Components": path.resolve(__dirname, "src/components"),
      "@Assets": path.resolve(__dirname, "src/assets"),
      "@Sections": path.resolve(__dirname, "src/sections"),
    }
  }
});
