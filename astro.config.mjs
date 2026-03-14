// @ts-check
import { defineConfig, envField, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://gravy59.vercel.app",
  integrations: [sitemap()],
  fonts: [
    {
      provider: fontProviders.local(),
      name: "DejaVu Sans",
      cssVariable: "--font-dejavu-sans",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/DejaVuSans.woff2"],
            weight: "normal",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/DejaVuSans-Oblique.woff2"],
            weight: "normal",
            style: "oblique",
          },
          {
            src: ["./src/assets/fonts/DejaVuSans-Bold.woff2"],
            weight: "bold",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/DejaVuSans-BoldOblique.woff2"],
            weight: "bold",
            style: "oblique",
          },
        ],
      },
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
});
