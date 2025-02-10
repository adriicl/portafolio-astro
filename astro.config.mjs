// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://adriicl.netlify.app",
  base: "/",
  output: 'server',
  adapter: netlify({
    edgeMiddleware: true
  }),
});