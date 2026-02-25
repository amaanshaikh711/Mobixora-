import { NextRequest, NextResponse } from "next/server";
import { readJsonFile, writeJsonFile } from "@/lib/db";
import { Category } from "@/data/categories";
import { Product } from "@/data/products";

export async function GET() {
  try {
    const categories = readJsonFile<Category[]>("categories.json");
    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const newCategory = await req.json();
    const categories = readJsonFile<Category[]>("categories.json");

    if (!newCategory.id || !newCategory.name) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (categories.some((c) => c.id === newCategory.id)) {
      return NextResponse.json({ error: "Category ID already exists" }, { status: 400 });
    }

    categories.push(newCategory);
    writeJsonFile("categories.json", categories);

    return NextResponse.json({ success: true, category: newCategory });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add category" }, { status: 500 });
  }
}
