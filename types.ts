import { z } from "zod";
import { ProjectFrontMatterSchema, ProjectSchema } from "./schemas.ts";

export type ProjectFrontMatter = z.infer<typeof ProjectFrontMatterSchema>;
export type Project = z.infer<typeof ProjectSchema>;
