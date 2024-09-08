import { DarkModeToggle } from "../islands/TargetDarkMode.tsx";
import { GITHUB_URL, X_URL } from "../constants.ts";
import { GitHubIcon, XIcon } from "./Icons.tsx";

export function Header() {
  return (
    <header>
      <nav class="mx-auto max-w-6xl" aria-label="Top">
        <div class="flex w-full items-center justify-between py-6">
          <div class="flex items-center">
            <a href="/" class="flex items-center">
              <img
                class="h-16 w-16 rounded-full object-cover"
                src="/scrappy.png"
                alt="Scrappy"
              />
              <span class="ml-3 text-4xl font-cursive text-light-headings dark:text-dark-headings">
                Scrappy Dev
              </span>
            </a>
          </div>
          <div class="flex items-center space-x-4">
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              class="hidden md:block text-light-text dark:text-dark-text hover:text-light-text-hover dark:hover:text-dark-text-hover"
            >
              <XIcon class="h-8 w-8 fill-current" />
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              class="hidden md:block text-light-text dark:text-dark-text hover:text-light-text-hover dark:hover:text-dark-text-hover"
            >
              <GitHubIcon class="h-8 w-8 fill-current" />
            </a>
            <DarkModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
