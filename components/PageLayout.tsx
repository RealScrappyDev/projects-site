import { ComponentChildren } from "preact";
import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";
import { Head } from "$fresh/runtime.ts";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_SHARE_IMAGE_RELATIVE_PATH,
  DEFAULT_TITLE,
  DEFAULT_TITLE_SUFFIX,
  DEFAULT_X_SHARE_IMAGE_RELATIVE_PATH,
} from "../constants.ts";

interface PageLayoutProps {
  children: ComponentChildren;
  title?: string;
  description?: string;
  image?: string;
  url: URL;
}

export function PageLayout(
  { children, title, url, description, image }: PageLayoutProps,
) {
  const pageTitle = title ? `${title}${DEFAULT_TITLE_SUFFIX}` : DEFAULT_TITLE;
  const pageDescription = description || DEFAULT_DESCRIPTION;
  const shareImage = url.origin + (image || DEFAULT_SHARE_IMAGE_RELATIVE_PATH);
  const shareXImage = url.origin +
    (image || DEFAULT_X_SHARE_IMAGE_RELATIVE_PATH);
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
        <meta property="twitter:title" content={pageTitle} />

        <meta name="description" content={pageDescription} />
        <meta property="og:description" content={pageDescription} />
        <meta property="twitter:description" content={pageDescription} />

        <meta property="og:image" content={shareImage} />
        <meta property="twitter:image" content={shareXImage} />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:url" content={url.href} />
        <meta property="twitter:url" content={url.href} />
      </Head>
      <div class="min-h-screen flex flex-col bg-light-bg dark:bg-dark-bg">
        <div class="flex-grow flex flex-col max-w-6xl xl:w-full sm:mx-8 lg:mx-14 xl:mx-auto">
          <div class="flex-grow flex flex-col bg-light-fg dark:bg-dark-fg ring-1 ring-light-bg-ring dark:ring-dark-bg-ring">
            <div class="w-full px-4 sm:px-16 lg:px-24 flex flex-col flex-grow">
              <Header />
              <main class="flex-grow py-8 sm:py-12">
                {children}
              </main>
            </div>
            <div class="w-full px-4 sm:px-16 lg:px-24">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
