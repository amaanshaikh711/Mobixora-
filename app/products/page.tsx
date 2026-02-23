"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import { brands } from "@/data/brands";
import ProductCard from "@/components/products/ProductCard";
import { formatPrice } from "@/lib/utils";

const ramOptions = ["4 GB", "6 GB", "8 GB", "12 GB", "16 GB"];
const storageOptions = ["64 GB", "128 GB", "256 GB"];
const priceRanges = [
  { label: "Under ₹10,000", min: 0, max: 10000 },
  { label: "₹10,000 – ₹20,000", min: 10000, max: 20000 },
  { label: "₹20,000 – ₹35,000", min: 20000, max: 35000 },
  { label: "₹35,000 – ₹60,000", min: 35000, max: 60000 },
  { label: "₹60,000 – ₹1,00,000", min: 60000, max: 100000 },
  { label: "Above ₹1,00,000", min: 100000, max: Infinity },
];

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const initialBrand = searchParams.get("brand") || "";
  const initialCategory = searchParams.get("category") || "";
  const initialSearch = searchParams.get("search") || "";
  const initialSort = searchParams.get("sort") || "";

  const [selectedBrands, setSelectedBrands] = useState<string[]>(
    initialBrand ? [initialBrand] : []
  );
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialCategory ? [initialCategory] : []
  );
  const [selectedPriceRange, setSelectedPriceRange] = useState<number | null>(null);
  const [selectedRam, setSelectedRam] = useState<string[]>([]);
  const [selectedStorage, setSelectedStorage] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState(initialSort || "relevance");
  const [searchQuery] = useState(initialSearch);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // Brand
    if (selectedBrands.length > 0) {
      result = result.filter((p) => selectedBrands.includes(p.brand));
    }

    // Category
    if (selectedCategories.length > 0) {
      result = result.filter((p) =>
        p.category.some((c) => selectedCategories.includes(c))
      );
    }

    // Price
    if (selectedPriceRange !== null) {
      const range = priceRanges[selectedPriceRange];
      result = result.filter((p) => p.price >= range.min && p.price < range.max);
    }

    // RAM
    if (selectedRam.length > 0) {
      result = result.filter((p) => selectedRam.includes(p.specs.ram));
    }

    // Storage
    if (selectedStorage.length > 0) {
      result = result.filter((p) => selectedStorage.includes(p.specs.storage));
    }

    // Rating
    if (minRating > 0) {
      result = result.filter((p) => p.rating >= minRating);
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "discount":
        result.sort((a, b) => b.discount - a.discount);
        break;
      case "newest":
        result.sort((a, b) => (b.isNewLaunch ? 1 : 0) - (a.isNewLaunch ? 1 : 0));
        break;
    }

    return result;
  }, [selectedBrands, selectedCategories, selectedPriceRange, selectedRam, selectedStorage, minRating, sortBy, searchQuery]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleRam = (ram: string) => {
    setSelectedRam((prev) =>
      prev.includes(ram) ? prev.filter((r) => r !== ram) : [...prev, ram]
    );
  };

  const toggleStorage = (storage: string) => {
    setSelectedStorage((prev) =>
      prev.includes(storage) ? prev.filter((s) => s !== storage) : [...prev, storage]
    );
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedCategories([]);
    setSelectedPriceRange(null);
    setSelectedRam([]);
    setSelectedStorage([]);
    setMinRating(0);
    setSortBy("relevance");
  };

  const activeFilterCount =
    selectedBrands.length +
    selectedCategories.length +
    (selectedPriceRange !== null ? 1 : 0) +
    selectedRam.length +
    selectedStorage.length +
    (minRating > 0 ? 1 : 0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {searchQuery ? `Search: "${searchQuery}"` : "All Mobile Phones"}
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>
        <div className="flex items-center gap-3">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filters
            {activeFilterCount > 0 && (
              <span className="bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="relevance">Sort: Relevance</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Rating: High to Low</option>
            <option value="discount">Discount: High to Low</option>
            <option value="newest">Newest First</option>
          </select>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Filter Sidebar */}
        <aside
          className={`${
            showFilters ? "block" : "hidden"
          } lg:block w-full lg:w-64 shrink-0 ${
            showFilters ? "fixed inset-0 z-50 bg-white p-6 overflow-y-auto lg:relative lg:inset-auto lg:z-auto lg:p-0" : ""
          }`}
        >
          {showFilters && (
            <div className="flex items-center justify-between mb-4 lg:hidden">
              <h2 className="text-lg font-bold">Filters</h2>
              <button onClick={() => setShowFilters(false)} className="p-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}

          <div className="space-y-6">
            {/* Clear filters */}
            {activeFilterCount > 0 && (
              <button
                onClick={clearFilters}
                className="text-sm font-semibold text-red-600 hover:text-red-700"
              >
                Clear All Filters ({activeFilterCount})
              </button>
            )}

            {/* Categories */}
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-3">Category</h3>
              <div className="space-y-2">
                {["budget", "mid-range", "flagship", "5g", "gaming"].map((cat) => (
                  <label key={cat} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700 capitalize">{cat.replace("-", " ")}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Brands */}
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-3">Brand</h3>
              <div className="space-y-2">
                {brands.map((brand) => (
                  <label key={brand.id} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand.slug)}
                      onChange={() => toggleBrand(brand.slug)}
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{brand.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-3">Price</h3>
              <div className="space-y-2">
                {priceRanges.map((range, idx) => (
                  <label key={idx} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={selectedPriceRange === idx}
                      onChange={() => setSelectedPriceRange(selectedPriceRange === idx ? null : idx)}
                      className="w-4 h-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{range.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* RAM */}
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-3">RAM</h3>
              <div className="space-y-2">
                {ramOptions.map((ram) => (
                  <label key={ram} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedRam.includes(ram)}
                      onChange={() => toggleRam(ram)}
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{ram}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Storage */}
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-3">Storage</h3>
              <div className="space-y-2">
                {storageOptions.map((storage) => (
                  <label key={storage} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedStorage.includes(storage)}
                      onChange={() => toggleStorage(storage)}
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{storage}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Rating */}
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-3">Customer Rating</h3>
              <div className="space-y-2">
                {[4, 3, 2].map((rating) => (
                  <label key={rating} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="rating"
                      checked={minRating === rating}
                      onChange={() => setMinRating(minRating === rating ? 0 : rating)}
                      className="w-4 h-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{rating}★ & above</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {showFilters && (
            <button
              onClick={() => setShowFilters(false)}
              className="mt-6 w-full py-3 bg-blue-600 text-white font-semibold rounded-lg lg:hidden"
            >
              Apply Filters ({filteredProducts.length} results)
            </button>
          )}
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-6xl mb-4">📱</p>
              <h3 className="text-xl font-bold text-gray-900">No phones found</h3>
              <p className="text-gray-500 mt-2">Try changing your filters or search query</p>
              <button
                onClick={clearFilters}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
