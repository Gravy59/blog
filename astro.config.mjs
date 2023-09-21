import { defineConfig, squooshImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://gravy59.vercel.app/",
  integrations: [mdx(), sitemap(), tailwind()],
  // ?? Sharp doesn't work on bun/not being detected on bun?
  image: {
    service: squooshImageService(),
  },
});
