"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProductForm from "@/components/admin/ProductForm";
import Link from "next/link";
import { Product } from "@/data/products";

export default function EditProductPage() {
  const params = useParams();
  const id = params.id as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`/api/admin/products/${id}`);
        const data = await res.json();
        if (data.id) {
          setProduct(data);
        }
      } catch (err) {
        console.error("Failed to fetch product", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="w-10 h-10 border-4 border-neutral-200 border-t-black rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-20 space-y-4">
        <h2 className="text-2xl font-bold">Product Not Found</h2>
        <p className="text-neutral-500 text-sm">The product you are looking for does not exist.</p>
        <Link href="/admin/products" className="inline-block bg-black text-white px-6 py-2 rounded-xl">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex items-center space-x-4">
        <Link
          href="/admin/products"
          className="w-10 h-10 bg-white border border-neutral-200 rounded-full flex items-center justify-center hover:bg-neutral-50 transition-all shadow-sm"
        >
          ←
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Edit Product</h1>
          <p className="text-neutral-500 text-sm font-medium uppercase tracking-wider">{product.id}</p>
        </div>
      </div>

      <ProductForm initialData={product} isEdit />
    </div>
  );
}
