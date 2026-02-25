"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import { Product } from "@/data/products";

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/admin/products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Failed to fetch products", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      const res = await fetch(`/api/admin/products/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setProducts(products.filter((p) => p.id !== id));
      } else {
        alert("Failed to delete product");
      }
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="w-10 h-10 border-4 border-neutral-200 border-t-black rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Manage Products</h1>
          <p className="text-neutral-500">View, edit, and manage your product catalogue</p>
        </div>
        <Link
          href="/admin/products/add"
          className="bg-neutral-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-black transition-all shadow-lg flex items-center space-x-2"
        >
          <span>➕</span>
          <span>Add New Product</span>
        </Link>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-4 rounded-2xl border border-neutral-100 shadow-sm flex items-center space-x-4">
        <div className="relative flex-1">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">🔍</span>
          <input
            type="text"
            placeholder="Search products by name or brand..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-neutral-50 border-none rounded-xl focus:ring-2 focus:ring-black outline-none"
          />
        </div>
        <div className="flex items-center space-x-2 px-4 py-3 bg-neutral-50 rounded-xl text-sm font-semibold text-neutral-600 border border-neutral-100">
          <span>Total:</span>
          <span className="text-black">{filteredProducts.length}</span>
        </div>
      </div>

      {/* Product Table */}
      <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-neutral-50 border-b border-neutral-100">
            <tr>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-neutral-500">Product</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-neutral-500">Brand</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-neutral-500">Category</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-neutral-500">Price</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-neutral-500">Stock</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-neutral-500 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {filteredProducts.map((product) => (
              <tr key={product.id} className="hover:bg-neutral-50 transition-all">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white rounded-lg border border-neutral-200 overflow-hidden relative p-1 flex-shrink-0">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-neutral-900">{product.name}</p>
                      <p className="text-[10px] text-neutral-400 font-mono uppercase">{product.id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-medium">{product.brand}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    {product.category.map((cat) => (
                      <span key={cat} className="text-[10px] font-bold uppercase bg-neutral-100 px-2 py-0.5 rounded text-neutral-600">
                        {cat}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="font-bold text-sm">{formatPrice(product.price)}</p>
                  <p className="text-xs text-neutral-400 line-through">{formatPrice(product.originalPrice)}</p>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-full ${product.inStock ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}>
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </td>
                <td className="px-6 py-4 text-right space-x-2">
                  <Link
                    href={`/admin/products/edit/${product.id}`}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all inline-block"
                    title="Edit"
                  >
                    ✏️
                  </Link>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all"
                    title="Delete"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
