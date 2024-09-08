import { z } from "zod";

export const ProjectFrontMatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.date(),
  tags: z.array(z.string()),
  imageRelativePath: z.string().optional(),
  url: z.string().optional(),
  repoUrl: z.string().optional(),
});

export const ProjectSchema = ProjectFrontMatterSchema.extend({
  slug: z.string(),
  content: z.string(),
});
