// utils/getBaseUrl.ts
import { headers } from "next/headers";

export async function getBaseUrl() {
  // If running in the browser, relative paths are fine
  if (typeof window !== "undefined") return "";

  // On the server, await headers() to get the actual object
  const h = await headers();
  const host = h.get("host") || "localhost:3000";
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  return `${protocol}://${host}`;
}
