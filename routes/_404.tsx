import { PageLayout } from "../components/PageLayout.tsx";
import { PageProps } from "$fresh/server.ts";

export default function Error404(props: PageProps) {
  const url = new URL(props.url);
  return (
    <PageLayout
      title="404 - Page not found"
      url={url}
      description="The page you were looking for doesn't exist."
    >
      <div class="flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold pt-32">404 - Page not found</h1>
        <p class="my-4">The page you were looking for doesn't exist.</p>
        <a href="/" class="underline">Go back home</a>
      </div>
    </PageLayout>
  );
}
