import { NextResponse } from "next/server";
import { getContent, saveContent } from "@/lib/contentStore";

export async function GET() {
  try {
    const data = getContent();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to load content" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const success = saveContent(body);
    if (success) {
      return NextResponse.json({ message: "Content updated successfully", content: body });
    }
    return NextResponse.json({ error: "Failed to save content" }, { status: 500 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request payload" }, { status: 400 });
  }
}

export async function PUT(request) {
  return POST(request);
}
