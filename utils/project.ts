import { extractYaml } from "@std/front-matter";
import { marked } from "marked";
import { ProjectFrontMatterSchema } from "../schemas.ts";
import type { Project } from "../types.ts";

async function processProject(slug: string, content: string): Promise<Project> {
  const { attrs, body } = extractYaml(content);
  const validatedAttrs = ProjectFrontMatterSchema.parse(attrs);
  const html = await marked(body);
  return { ...validatedAttrs, slug, content: html };
}

export async function getProjects(): Promise<Project[]> {
  const projects: Project[] = [];
  for await (const file of Deno.readDir("./projects")) {
    if (file.isFile && file.name.endsWith(".md")) {
      const content = await Deno.readTextFile(`./projects/${file.name}`);
      const slug = file.name.replace(".md", "");
      projects.push(await processProject(slug, content));
    }
  }
  return projects.sort((a, b) => b.date?.getTime() - a.date?.getTime() || 0);
}

export async function getProject(slug: string): Promise<Project | null> {
  try {
    const content = await Deno.readTextFile(`./projects/${slug}.md`);
    return await processProject(slug, content);
  } catch {
    return null;
  }
}

export async function getProjectsAndTags(): Promise<
  { projects: Project[]; tags: string[] }
> {
  const projects = await getProjects();
  const tagSet = new Set(projects.flatMap((p) => p.tags || []));
  return { projects, tags: Array.from(tagSet) };
}
