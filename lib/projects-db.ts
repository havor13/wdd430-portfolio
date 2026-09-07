// lib/projects-db.ts
export interface Project {
  id: number;
  title: string;
  description: string;
  type: "opensource" | "school";
  technologies: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "My First Open Source Contribution",
    description: "A bug fix contributed to a popular library.",
    type: "opensource",
    technologies: ["TypeScript", "React"],
    link: "https://github.com/havor13/wdd430-portfolio",
  },
  {
    id: 2,
    title: "Database Design Final Project",
    description: "An ER diagram and normalized schema for a library system.",
    type: "school",
    technologies: ["PostgreSQL", "SQL"],
  },
];

// Filter projects by type (optional)
export function getProjects(type?: string | null): Project[] {
  if (type) {
    return projects.filter((p) => p.type === type);
  }
  return projects;
}

// Get a single project by ID
export function getProjectById(id: number): Project | null {
  // Ensure id is an integer before comparing
  const project = projects.find((p) => p.id === id);
  return project ?? null;
}
