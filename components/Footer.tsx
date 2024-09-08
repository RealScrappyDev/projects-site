import { GITHUB_URL, NAME, X_URL } from "../constants.ts";

export function Footer() {
  return (
    <footer class="mt-32 py-4">
      <div class="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <div class="flex justify-center sm:justify-start space-x-4">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            class="text-light-text dark:text-dark-text hover:text-light-text-hover dark:hover:text-dark-text-hover"
          >
            GitHub
          </a>
          <a
            href={X_URL}
            target="_blank"
            rel="noopener noreferrer"
            class="text-light-text dark:text-dark-text hover:text-light-text-hover dark:hover:text-dark-text-hover"
          >
            𝕏
          </a>
        </div>
        <p class="text-sm text-light-text dark:text-dark-text text-center sm:text-left">
          © {new Date().getFullYear()} {NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
