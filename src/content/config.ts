import { defineCollection, z } from "astro:content";

export const collections = {
	projects: defineCollection({
		type: "content",
		schema: ({ image }) =>
			z.object({
				name: z.string(),
				description: z.string(),
				publishDate: z.coerce.date(),
				cover: image().optional(),
				coverAlt: z.string().optional(),
				link: z.string().url().optional(),
			}),
	}),
};
