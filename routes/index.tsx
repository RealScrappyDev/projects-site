import { PageProps } from "$fresh/server.ts";
import { PageLayout } from "../components/PageLayout.tsx";
import { getProjects } from "../utils/project.ts";
import type { Project } from "../types.ts";

export default async function Home(props: PageProps) {
  const url = new URL(props.url);
  const projects = await getProjects();

  return (
    <PageLayout url={url}>
      <h1 class="text-4xl font-bold mb-8">My Projects</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </PageLayout>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div class="bg-light-card dark:bg-dark-card rounded-lg shadow-md overflow-hidden">
      <div class="p-6">
        <h2 class="text-2xl font-bold mb-2">{project.title}</h2>
        <p class="mb-4">{project.description}</p>
        <div class="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              class="bg-light-accent-faint dark:bg-dark-accent-faint text-light-accent dark:text-dark-accent px-2 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div class="flex justify-between items-center">
          <span class="text-sm text-light-text dark:text-dark-text">
            {new Date(project.date).toLocaleDateString()}
          </span>
          <div class="space-x-2">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                class="text-light-accent dark:text-dark-accent hover:underline"
              >
                View Project
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="text-light-accent dark:text-dark-accent hover:underline"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
