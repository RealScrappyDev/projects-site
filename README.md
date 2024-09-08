# Scrappy Dev's Projects Site

This is a Fresh project showcasing Scrappy Dev's development projects. It's
built with Deno, Fresh, and Tailwind CSS.

## Features

- Dark mode support
- Responsive design
- Project showcase
- Markdown-based project content

## Prerequisites

Make sure you have Deno installed. If not, you can install it from:
https://deno.land/manual/getting_started/installation

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/RealScrappyDev/projects-site.git
```

2. Navigate to the project directory:

```bash
cd projects-site
```

3. Start the development server:

```bash
deno task start
```

This will watch the project directory and restart as necessary.

3. Open your browser and visit `http://localhost:8000` to see the application
   running.

## Project Structure

- `routes/`: Contains the main page routes
- `islands/`: Contains interactive components
- `components/`: Contains reusable UI components
- `projects/`: Markdown files for each project
- `utils/`: Utility functions
- `static/`: Static assets like images and CSS files

## Adding New Projects

To add a new project, create a new Markdown file in the `projects/` directory.
Use the following front matter format:

```markdown
---
title: "Project Title"
description: "Project Description"
date: "2024-01-01"
tags: ["tag1", "tag2", "tag3"]
url: "https://example.com/project"
repoUrl: "https://github.com/RealScrappyDev/projects-site"
---
```

## Deployment

This project can be deployed to any platform that supports Deno and Fresh. Here
are a few options:

1. **Deno Deploy**: The easiest way to deploy a Fresh project.
   - Follow the instructions at: https://deno.com/deploy/docs/getting-started

2. **Docker**: You can containerize the application and deploy it to any
   container hosting platform.
   - Create a Dockerfile in the project root
   - Build and push the Docker image
   - Deploy to your preferred container hosting service

3. **Manual Deployment**: You can also deploy the application to any VPS or
   cloud provider that supports Deno.
   - Set up a server with Deno installed
   - Clone the repository
   - Run `deno task start` to start the application
   - Set up a reverse proxy (e.g., Nginx) to handle incoming traffic

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file
for details.
