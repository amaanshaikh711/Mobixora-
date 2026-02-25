import { NextRequest, NextResponse } from "next/server";
import { readJsonFile, writeJsonFile } from "@/lib/db";
import { Category } from "@/data/categories";
import { Product } from "@/data/products";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const categories = readJsonFile<Category[]>("categories.json");
    const products = readJsonFile<Product[]>("products.json");

    // Check if category has active products
    const hasProducts = products.some((p) => p.category.includes(id));
    if (hasProducts) {
      return NextResponse.json(
        { error: "Cannot delete category with active products. Please reassign or delete products first." },
        { status: 400 }
      );
    }

    const filteredCategories = categories.filter((c) => c.id !== id);
    if (filteredCategories.length === categories.length) {
      return NextResponse.json({ error: "Category not found" }, { status: 404 });
    }

    writeJsonFile("categories.json", filteredCategories);

    return NextResponse.json({ success: true, message: "Category deleted" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete category" }, { status: 500 });
  }
}
