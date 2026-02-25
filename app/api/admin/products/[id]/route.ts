import { NextRequest, NextResponse } from "next/server";
import { readJsonFile, writeJsonFile } from "@/lib/db";
import { Product } from "@/data/products";
import { revalidatePath } from "next/cache";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const products = readJsonFile<Product[]>("products.json");
    const product = products.find((p) => p.id === id);

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const updatedProduct = await req.json();
    const products = readJsonFile<Product[]>("products.json");

    const index = products.findIndex((p) => p.id === id);
    if (index === -1) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    // Keep the same ID if not provided or changed
    updatedProduct.id = id;
    
    products[index] = updatedProduct;
    writeJsonFile("products.json", products);

    // Instant update across site
    revalidatePath("/", "layout");

    return NextResponse.json({ success: true, product: updatedProduct });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update product" }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const products = readJsonFile<Product[]>("products.json");

    const filteredProducts = products.filter((p) => p.id !== id);
    
    if (filteredProducts.length === products.length) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    writeJsonFile("products.json", filteredProducts);

    // Instant update across site
    revalidatePath("/", "layout");

    return NextResponse.json({ success: true, message: "Product deleted" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 });
  }
}
