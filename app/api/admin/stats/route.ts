import { NextResponse } from "next/server";
import { readJsonFile } from "@/lib/db";
import { Product } from "@/data/products";
import { Category } from "@/data/categories";

export async function GET() {
  try {
    const products = readJsonFile<Product[]>("products.json");
    const categories = readJsonFile<Category[]>("categories.json");

    const totalProducts = products.length;
    const inStockProducts = products.filter((p) => p.inStock).length;
    const totalCategories = categories.length;
    const recentProducts = products.slice(-5).reverse();

    return NextResponse.json({
      totalProducts,
      inStockProducts,
      totalCategories,
      recentProducts,
    });
  } catch (error) {
    console.error("Stats API error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
