// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import path from "path";
import { fileURLToPath } from "url";

import react from "@astrojs/react";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://greensoftware.foundation',
  base: process.env.NODE_ENV === 'production' ? '/web-carmen' : undefined,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
});
