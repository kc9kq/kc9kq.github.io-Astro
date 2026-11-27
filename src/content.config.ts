import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const minutes = defineCollection({
   loader: glob({ pattern: '**/*.md', base: './src/content/minutes' }),
   schema: z.object({
      title: z.string(),
      date: z.coerce.date(),
      location: z.string().optional(),
      attendees: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
   }),
});

export const collections = { minutes };
