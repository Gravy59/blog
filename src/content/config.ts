import { defineCollection, z } from "astro:content";

export const collections = {
	projects: defineCollection({
		type: "content",
		schema: z.object({
			name: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			img: z.string().optional(),
			img_alt: z.string().optional(),
			link: z.string().url().optional(),
		}),
	}),
};
