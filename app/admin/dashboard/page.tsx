"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";

interface Stats {
  totalProducts: number;
  inStockProducts: number;
  totalCategories: number;
  recentProducts: any[];
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("/api/admin/stats");
        const data = await res.json();
        setStats(data);
      } catch (err) {
        console.error("Failed to fetch stats", err);
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="w-10 h-10 border-4 border-neutral-200 border-t-black rounded-full animate-spin"></div>
      </div>
    );
  }

  const statCards = [
    { label: "Total Products", value: stats?.totalProducts, icon: "📦", color: "bg-blue-50 text-blue-600" },
    { label: "In Stock", value: stats?.inStockProducts, icon: "✅", color: "bg-emerald-50 text-emerald-600" },
    { label: "Categories", value: stats?.totalCategories, icon: "🏷️", color: "bg-purple-50 text-purple-600" },
    { label: "Active Orders", value: 12, icon: "🛍️", color: "bg-amber-50 text-amber-600" },
  ];

  return (
    <div className="space-y-10">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card) => (
          <div key={card.label} className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm flex items-center space-x-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${card.color}`}>
              {card.icon}
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider">{card.label}</p>
              <p className="text-2xl font-bold">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">Recently Added Products</h3>
            <Link href="/admin/products" className="text-sm font-semibold text-neutral-500 hover:text-black">
              View All →
            </Link>
          </div>
          <div className="space-y-4">
            {stats?.recentProducts.map((product) => (
              <div key={product.id} className="flex items-center justify-between p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-all border border-neutral-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-lg overflow-hidden border border-neutral-200 relative p-1">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{product.name}</p>
                    <p className="text-xs text-neutral-500">{product.brand}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-sm text-neutral-900">{formatPrice(product.price)}</p>
                  <p className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${product.inStock ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}>
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm space-y-8">
          <h3 className="text-xl font-bold">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/admin/products/add" className="flex flex-col items-center justify-center p-6 bg-neutral-900 text-white rounded-2xl hover:scale-105 transition-all shadow-lg">
              <span className="text-3xl mb-2">➕</span>
              <span className="font-bold">Add Product</span>
            </Link>
            <Link href="/admin/products" className="flex flex-col items-center justify-center p-6 bg-white text-neutral-900 border-2 border-neutral-900 rounded-2xl hover:scale-105 transition-all">
              <span className="text-3xl mb-2">📦</span>
              <span className="font-bold">Manage Products</span>
            </Link>
            <Link href="/admin/categories" className="flex flex-col items-center justify-center p-6 bg-neutral-100 rounded-2xl hover:scale-105 transition-all">
              <span className="text-3xl mb-2">🏷️</span>
              <span className="font-bold">Categories</span>
            </Link>
            <Link href="/" className="flex flex-col items-center justify-center p-6 bg-neutral-100 rounded-2xl hover:scale-105 transition-all">
              <span className="text-3xl mb-2">🏠</span>
              <span className="font-bold">View Store</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
