import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { JSX } from "preact";

function MoonIcon(props: JSX.SVGAttributes<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

function SunIcon(props: JSX.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z">
      </path>
      <path
        d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
        fill="none"
      >
      </path>
    </svg>
  );
}

export function DarkModeToggle() {
  const isDark = useSignal(false);
  const wasDark = useSignal(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    isDark.value = isDarkMode;
    document.documentElement.classList.toggle("dark", isDarkMode);

    const handleBeforePrint = () => {
      wasDark.value = isDark.value;
      document.documentElement.classList.remove("dark");
    };

    const handleAfterPrint = () => {
      if (wasDark.value) {
        document.documentElement.classList.toggle("dark", true);
      }
    };

    globalThis.addEventListener("beforeprint", handleBeforePrint);
    globalThis.addEventListener("afterprint", handleAfterPrint);

    return () => {
      globalThis.removeEventListener("beforeprint", handleBeforePrint);
      globalThis.removeEventListener("afterprint", handleAfterPrint);
    };
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDark.value;
    isDark.value = newDarkMode;
    localStorage.setItem("darkMode", newDarkMode.toString());
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  return (
    <div class="flex justify-end md:flex-1">
      <div class="pointer-events-auto">
        <button
          type="button"
          onClick={toggleDarkMode}
          aria-label={isDark.value
            ? "Switch to light theme"
            : "Switch to dark theme"}
          class="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-dark-fg dark:ring-dark-text/10 dark:hover:ring-dark-text-hover/20 h-12"
        >
          <SunIcon class="h-8 w-8 stroke-yellow-500 fill-yellow-200 hover:stroke-yellow-600 hover:fill-yellow-300 transition dark:hidden" />
          <MoonIcon class="hidden h-8 w-8 dark:block stroke-dark-accent fill-dark-accent-faint transition" />
        </button>
      </div>
    </div>
  );
}
