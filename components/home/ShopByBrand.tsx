"use client";

import Link from "next/link";
import { brands } from "@/data/brands";
import { useState } from "react";

export default function ShopByBrand() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [failedIds, setFailedIds] = useState<Set<string>>(new Set());

  const handleImgError = (id: string) => {
    setFailedIds((prev) => new Set(prev).add(id));
  };

  return (
    <section
      className="py-16 px-4"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f1f3f8 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-black tracking-[0.2em] uppercase text-indigo-500 mb-1.5">
              Top Manufacturers
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
              Shop by Brand
            </h2>
            <p className="text-gray-500 mt-1.5 text-sm font-medium">
              Your favourite brands, all in one place
            </p>
          </div>
          <Link
            href="/products"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 group border border-gray-200 text-gray-600 hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50"
          >
            View All
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* ── Brand Grid ── */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4">
          {brands.map((brand) => {
            const isHovered = hoveredId === brand.id;
            const failed = failedIds.has(brand.id);

            return (
              <Link
                key={brand.id}
                href={`/products?brand=${brand.slug}`}
                className="group flex flex-col items-center justify-center gap-3 p-4 rounded-2xl overflow-hidden cursor-pointer bg-white"
                style={{
                  border: isHovered
                    ? `2px solid ${brand.accentColor}88`
                    : "2px solid #e5e7eb",
                  boxShadow: isHovered
                    ? `0 12px 40px -8px ${brand.accentColor}33`
                    : "0 2px 8px rgba(0,0,0,0.06)",
                  transition: "all 0.3s cubic-bezier(.22,.61,.36,1)",
                  transform: isHovered ? "translateY(-5px) scale(1.03)" : "none",
                }}
                onMouseEnter={() => setHoveredId(brand.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Logo area */}
                <div
                  className="flex items-center justify-center rounded-xl w-full"
                  style={{
                    height: 60,
                    background: "#f8f9fa",
                    padding: "10px 14px",
                  }}
                >
                  {failed ? (
                    <span
                      className="text-base font-black"
                      style={{ color: brand.accentColor }}
                    >
                      {brand.name}
                    </span>
                  ) : (
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="max-h-9 max-w-full object-contain"
                      style={{
                        transition: "transform 0.3s ease",
                        transform: isHovered ? "scale(1.1)" : "scale(1)",
                      }}
                      onError={() => handleImgError(brand.id)}
                    />
                  )}
                </div>

                {/* Name & Tagline */}
                <div className="text-center">
                  <p className="text-xs font-black text-gray-800 leading-none">
                    {brand.name}
                  </p>
                  <p
                    className="text-[10px] font-semibold mt-1 leading-none transition-colors duration-300"
                    style={{
                      color: isHovered ? brand.accentColor : "#9ca3af",
                    }}
                  >
                    {brand.tagline}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* ── Mobile View All ── */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 text-gray-700 text-sm font-bold hover:bg-gray-50 transition-all"
          >
            View All Brands →
          </Link>
        </div>

        {/* ── Bottom divider ── */}
        <div className="mt-12 flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-200" />
          <p className="text-gray-400 text-xs font-semibold tracking-widest uppercase whitespace-nowrap">
            12 Premium Brands · 500+ Models
          </p>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
      </div>
    </section>
  );
}
