"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { products, mockReviews } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatPrice, getRatingColor, formatNumber, getEMIPrice } from "@/lib/utils";
import ProductCard from "@/components/products/ProductCard";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart, isInCart } = useCart();

  const product = products.find((p) => p.id === params.id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-6xl mb-4">📱</p>
        <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
        <Link href="/products" className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold">
          Browse Phones
        </Link>
      </div>
    );
  }

  const reviews = mockReviews.filter((r) => r.productId === product.id);
  const similarProducts = products
    .filter((p) => p.id !== product.id && (p.brand === product.brand || p.category.some((c) => product.category.includes(c))))
    .slice(0, 6);

  const handleAddToCart = () => {
    addToCart(product, product.colors[selectedColor]);
  };

  const handleBuyNow = () => {
    addToCart(product, product.colors[selectedColor]);
    router.push("/cart");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-blue-600">Mobiles</Link>
        <span>/</span>
        <Link href={`/products?brand=${product.brand}`} className="hover:text-blue-600">{product.brand}</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium truncate">{product.name}</span>
      </nav>

      {/* Main Section */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-2xl p-6 flex items-center justify-center aspect-square overflow-hidden border border-gray-200">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="flex gap-3 overflow-x-auto hide-scrollbar">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition ${
                  idx === selectedImage
                    ? "border-blue-600 ring-2 ring-blue-200"
                    : "border-gray-200 hover:border-gray-400"
                }`}
              >
                <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{product.brand}</span>
            {product.isNewLaunch && (
              <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-0.5 rounded">NEW LAUNCH</span>
            )}
            {product.isBestSeller && (
              <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-0.5 rounded">BESTSELLER</span>
            )}
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-3 mb-4">
            <span className={`${getRatingColor(product.rating)} text-white text-sm font-bold px-2 py-1 rounded flex items-center gap-1`}>
              {product.rating}
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </span>
            <span className="text-sm text-gray-500">{formatNumber(product.reviewCount)} Ratings & Reviews</span>
          </div>

          {/* Price */}
          <div className="mb-6">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-extrabold text-gray-900">{formatPrice(product.price)}</span>
              {product.originalPrice > product.price && (
                <>
                  <span className="text-lg text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
                  <span className="text-lg font-bold text-green-600">{product.discount}% off</span>
                </>
              )}
            </div>
            <p className="text-sm text-gray-500 mt-1">
              EMI from {formatPrice(getEMIPrice(product.price))}/month · No Cost EMI available
            </p>
          </div>

          {/* Offers */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-900 text-sm mb-3">Available Offers</h3>
            <div className="space-y-2">
              {product.offers.map((offer, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5 shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 011.414-1.414L10 14.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p className="text-sm text-gray-700">{offer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-900 text-sm mb-3">
              Color: <span className="font-normal text-gray-600">{product.colors[selectedColor]}</span>
            </h3>
            <div className="flex gap-2">
              {product.colors.map((color, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedColor(idx)}
                  className={`px-4 py-2 text-sm rounded-lg border-2 font-medium transition ${
                    idx === selectedColor
                      ? "border-blue-600 bg-blue-50 text-blue-700"
                      : "border-gray-200 text-gray-700 hover:border-gray-400"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-900 text-sm mb-3">Highlights</h3>
            <ul className="space-y-1.5">
              {product.highlights.map((h, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-blue-600 mt-1 shrink-0">•</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={handleAddToCart}
              disabled={isInCart(product.id)}
              className={`flex-1 py-3.5 rounded-lg font-bold text-sm transition ${
                isInCart(product.id)
                  ? "bg-gray-100 text-gray-500 cursor-not-allowed border border-gray-300"
                  : "bg-orange-500 text-white hover:bg-orange-600 shadow-lg"
              }`}
            >
              {isInCart(product.id) ? "✓ Added to Cart" : "Add to Cart"}
            </button>
            <button
              onClick={handleBuyNow}
              className="flex-1 py-3.5 bg-blue-600 text-white font-bold text-sm rounded-lg hover:bg-blue-700 transition shadow-lg"
            >
              Buy Now
            </button>
          </div>

          {/* Delivery Info */}
          <div className="grid grid-cols-3 gap-3 p-4 bg-gray-50 rounded-xl">
            <div className="text-center">
              <span className="text-2xl">🚚</span>
              <p className="text-xs font-medium text-gray-700 mt-1">Free Delivery</p>
            </div>
            <div className="text-center">
              <span className="text-2xl">🔄</span>
              <p className="text-xs font-medium text-gray-700 mt-1">7 Day Return</p>
            </div>
            <div className="text-center">
              <span className="text-2xl">🛡️</span>
              <p className="text-xs font-medium text-gray-700 mt-1">1 Year Warranty</p>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Specifications</h2>
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          {Object.entries(product.specs).map(([key, value], idx) => (
            <div
              key={key}
              className={`flex ${idx % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
            >
              <div className="w-40 md:w-52 px-4 py-3 font-semibold text-sm text-gray-600 capitalize shrink-0 border-r border-gray-200">
                {key.replace(/([A-Z])/g, " $1").trim()}
              </div>
              <div className="flex-1 px-4 py-3 text-sm text-gray-900">{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Description</h2>
        <p className="text-gray-700 leading-relaxed">{product.description}</p>
      </div>

      {/* Reviews Section - Amazon Style */}
      <div className="mb-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Rating Summary */}
          <div className="lg:col-span-1 bg-gray-50 rounded-xl p-6 border border-gray-200 h-fit">
            <h3 className="font-bold text-lg text-gray-900 mb-4">Customer Reviews</h3>
            
            <div className="mb-6">
              <div className="text-3xl font-extrabold text-gray-900 mb-1">
                {product.rating}
              </div>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                Based on {formatNumber(product.reviewCount)} verified reviews
              </p>
            </div>

            <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition text-sm">
              Write a Review
            </button>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Top Reviews</h3>
            
            {reviews.length > 0 ? (
              <div className="space-y-4">
                {reviews.slice(0, 5).map((review) => (
                  <div key={review.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition bg-white">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-sm text-gray-900 flex-1">{review.title}</h4>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-3 h-3 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span className="text-xs text-gray-500 ml-2">{review.rating} out of 5</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-700 mb-3">{review.comment}</p>
                    
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="font-medium text-gray-900">{review.userName}</span>
                      {review.verified && (
                        <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded font-medium">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          ✓ Verified
                        </span>
                      )}
                      <span>·</span>
                      <span>{review.date}</span>
                    </div>
                  </div>
                ))}
                
                {reviews.length > 5 && (
                  <button className="w-full py-3 border border-gray-300 text-gray-900 font-bold rounded-lg hover:bg-gray-50 transition text-sm">
                    View All {reviews.length} Reviews
                  </button>
                )}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-xl">
                <p className="text-gray-500 mb-4">No reviews yet for this product.</p>
                <p className="text-sm text-gray-400">Be the first to share your experience!</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related & Similar Products */}
      {similarProducts.length > 0 && (
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Similar Products You Might Like</h2>
            <p className="text-gray-600 text-sm mt-1">Browse related phones in the same category</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {similarProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
