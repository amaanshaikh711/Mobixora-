"use client";

import ProductForm from "@/components/admin/ProductForm";
import Link from "next/link";

export default function AddProductPage() {
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
          <h1 className="text-3xl font-bold">Add New Product</h1>
          <p className="text-neutral-500 text-sm">Fill in the details below to add a new smartphone to the catalogue</p>
        </div>
      </div>

      <ProductForm />
    </div>
  );
}
