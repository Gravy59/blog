// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const writingCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    pubDatetime: z.string().datetime(),
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  writing: writingCollection,
};
