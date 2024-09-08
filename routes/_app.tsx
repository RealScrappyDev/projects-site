import { type PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="/fonts.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            if (localStorage.getItem('darkMode') === 'true' ||
                (!('darkMode' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark');
            }
          `,
          }}
        />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
