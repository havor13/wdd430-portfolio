// lib/projects-db.ts
import { sql } from '@vercel/postgres';

export interface Project {
  id: number;
  title: string;
  description: string;
  type: 'opensource' | 'school';
  technologies: string[];
  link?: string;
}

// Ensure we have a connection string before querying
function ensureConnection() {
  const conn =
    process.env.POSTGRES_URL ||
    process.env.DATABASE_URL ||
    process.env.POSTGRES_PRISMA_URL;

  if (!conn) {
    throw new Error(
      "Missing Postgres connection string. Please set POSTGRES_URL or DATABASE_URL in your environment variables."
    );
  }
}

export async function getProjects(type?: string | null): Promise<Project[]> {
  ensureConnection();

  try {
    if (type) {
      const { rows } = await sql<Project>`
        SELECT * FROM projects WHERE type = ${type} ORDER BY id
      `;
      return rows;
    }
    const { rows } = await sql<Project>`SELECT * FROM projects ORDER BY id`;
    return rows;
  } catch (err) {
    console.error("Error in getProjects:", err);
    throw err;
  }
}

export async function getProjectById(id: number): Promise<Project | null> {
  ensureConnection();

  try {
    const { rows } = await sql<Project>`
      SELECT * FROM projects WHERE id = ${id}
    `;
    return rows[0] ?? null;
  } catch (err) {
    console.error("Error in getProjectById:", err);
    throw err;
  }
}
