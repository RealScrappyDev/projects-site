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
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </PageLayout>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div class="bg-light-card dark:bg-dark-card rounded-lg shadow-md overflow-hidden w-full">
      <div class="p-6">
        <h2 class="text-2xl font-bold mb-2">{project.title}</h2>
        <p class="mb-4">{project.description}</p>
        <div class="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              class="bg-light-icon-fill dark:bg-dark-icon-fill text-light-icon-stroke dark:text-dark-icon-stroke px-2 py-1 rounded-full text-sm"
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
                class="inline-block px-3 py-1 bg-light-accent dark:bg-dark-accent text-white dark:text-white rounded-md hover:opacity-80 transition-opacity"
              >
                Go to site
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block px-3 py-1 bg-light-accent dark:bg-dark-accent text-white dark:text-white rounded-md hover:opacity-80 transition-opacity"
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
