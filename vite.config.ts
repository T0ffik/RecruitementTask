import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@customTypes": path.resolve(__dirname, "src/types"),
      "@customXstate": path.resolve(__dirname, "src/xstate"),
      "@api": path.resolve(__dirname, "src/api"),
    },
  },
});