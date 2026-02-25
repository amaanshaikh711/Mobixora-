import { NextRequest, NextResponse } from "next/server";
import { readJsonFile, writeJsonFile } from "@/lib/db";
import { Product } from "@/data/products";
import { revalidatePath } from "next/cache";

export async function GET() {
  try {
    const products = readJsonFile<Product[]>("products.json");
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const newProduct = await req.json();
    const products = readJsonFile<Product[]>("products.json");

    // Basic validation
    if (!newProduct.id || !newProduct.name || !newProduct.brand) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Check if ID already exists
    if (products.some((p) => p.id === newProduct.id)) {
      return NextResponse.json({ error: "Product ID already exists" }, { status: 400 });
    }

    products.push(newProduct);
    writeJsonFile("products.json", products);

    // Instant update across site
    revalidatePath("/", "layout");

    return NextResponse.json({ success: true, product: newProduct });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add product" }, { status: 500 });
  }
}
