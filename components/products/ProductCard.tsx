"use client";

import { useState } from "react";
import Link from "next/link";
import { Product } from "@/data/products";
import { formatPrice, getRatingColor, formatNumber } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

interface Props {
  product: Product;
  compact?: boolean;
}

export default function ProductCard({ product, compact = false }: Props) {
  const { addToCart } = useCart();
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.colors[0]);
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000);
  };

  return (
    <Link
      href={`/products/${product.id}`}
      className={`group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col ${compact ? "min-w-50 max-w-55" : ""
        }`}
    >
      {/* Image */}
      <div className="relative bg-white flex items-center justify-center overflow-hidden" style={{ aspectRatio: '3/4', background: '#f8f9fa' }}>
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          style={{ padding: '8px' }}
        />

        {/* Add to Cart Button (Top Right) */}
        <button
          onClick={handleAddToCart}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-lg hover:bg-blue-50 transition-all duration-200 opacity-0 group-hover:opacity-100 transform group-hover:scale-110"
          title="Add to cart"
        >
          <svg
            className={`w-6 h-6 transition-colors ${isAddedToCart ? "text-green-600" : "text-blue-600"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isAddedToCart ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 8m10-8l2 8M9 21h6M12 17v4m-4 0h8"
              />
            )}
          </svg>
        </button>

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.discount > 0 && (
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">
              {product.discount}% OFF
            </span>
          )}
          {product.isNewLaunch && (
            <span className="bg-purple-600 text-white text-xs font-bold px-2 py-0.5 rounded">
              NEW
            </span>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="p-3 flex-1 flex flex-col">
        {/* Brand */}
        <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
          {product.brand}
        </p>

        {/* Name */}
        <h3 className="text-sm font-bold text-gray-900 mt-1 line-clamp-2 group-hover:text-blue-600 transition">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
          <span
            className={`${getRatingColor(product.rating)} text-white text-xs font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5`}
          >
            {product.rating}
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </span>
          <span className="text-xs text-gray-500">
            ({formatNumber(product.reviewCount)})
          </span>
        </div>

        {/* Price */}
        <div className="mt-auto pt-2">
          <div className="flex items-center gap-2">
            <span className="text-lg font-extrabold text-gray-900">
              {formatPrice(product.price)}
            </span>
          </div>
          {product.originalPrice > product.price && (
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-xs text-gray-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
              <span className="text-xs font-semibold text-green-600">
                Save {formatPrice(product.originalPrice - product.price)}
              </span>
            </div>
          )}
        </div>

        {/* Quick offers */}
        {product.offers[0] && (
          <p className="text-[10px] text-orange-600 font-medium mt-2 bg-orange-50 px-2 py-1 rounded truncate">
            {product.offers[0]}
          </p>
        )}
      </div>
    </Link>
  );
}
