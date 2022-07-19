import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://moofywoofy.github.io",
  base: "/Astro-blog",
  markdown:{
    shikiConfig:{
      theme:"one-dark-pro",
      // Enable word wrap to prevent horizontal scrolling
      wrap:true,
    },
  },
});