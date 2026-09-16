// app/api/projects/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getProjects } from "@/lib/projects-db";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");

  try {
    const data = await getProjects(type); // ✅ await is required
    return NextResponse.json(data);
  } catch (error: unknown) {
    // Log the full error to your server console
    console.error("Error fetching projects:", error);

    // Return a structured error response
    return NextResponse.json(
      {
        error: "Failed to fetch projects",
        details:
          error instanceof Error
            ? error.message
            : "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}
