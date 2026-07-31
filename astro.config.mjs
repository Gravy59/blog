// @ts-check
import { defineConfig, envField, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://gravy59.vercel.app",
  integrations: [sitemap()],

  fonts: [
    {
      provider: fontProviders.google(),
      name: "Newsreader",
      cssVariable: "--font-body",
      weights: ["300 800"],
      fallbacks: ["serif"],
      optimizedFallbacks: true,
    },
    {
      provider: fontProviders.google(),
      name: "Chivo Mono",
      cssVariable: "--font-mono",
      weights: ["300 800"],
      fallbacks: ["monospace"],
      optimizedFallbacks: true,
    },
  ],

  adapter: vercel({
    imageService: true,
    webAnalytics: {
      enabled: true,
    },
  }),

  env: {
    schema: {
      PUBLIC_GOOGLE_SITE_VERIFICATION: envField.string({
        access: "public",
        context: "client",
        optional: true,
      }),
    },
  },
  markdown: {
    shikiConfig: {
      theme: "one-light",
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
