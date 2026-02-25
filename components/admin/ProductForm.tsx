"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/data/products";
import { brands as brandsData } from "@/data/brands";
import { categories as categoriesData } from "@/data/categories";

interface ProductFormProps {
  initialData?: Product;
  isEdit?: boolean;
}

export default function ProductForm({ initialData, isEdit }: ProductFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState<Partial<Product>>(
    initialData || {
      id: "",
      name: "",
      brand: brandsData[0]?.name || "",
      category: [],
      price: 0,
      originalPrice: 0,
      discount: 0,
      rating: 4.5,
      reviewCount: 0,
      images: ["", "", "", ""],
      highlights: ["", "", "", ""],
      specs: {
        display: "",
        processor: "",
        ram: "",
        storage: "",
        battery: "",
        rearCamera: "",
        frontCamera: "",
        os: "",
        network: "",
        weight: "",
      },
      offers: ["", "", ""],
      inStock: true,
      isFeatured: false,
      isBestSeller: false,
      isNewLaunch: true,
      isTopDeal: false,
      colors: ["Black", "White"],
      description: "",
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...(prev as any)[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "number" ? parseFloat(value) : value,
      }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleArrayChange = (index: number, value: string, field: "images" | "highlights" | "offers" | "category" | "colors") => {
    setFormData((prev) => {
      const newArray = [...(prev[field] as string[])];
      newArray[index] = value;
      return { ...prev, [field]: newArray };
    });
  };

  const handleCategoryToggle = (catId: string) => {
    setFormData((prev) => {
      const current = prev.category || [];
      const updated = current.includes(catId)
        ? current.filter((id) => id !== catId)
        : [...current, catId];
      return { ...prev, category: updated };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Calculate discount automatically if not set
    const discount = Math.round(((formData.originalPrice! - formData.price!) / formData.originalPrice!) * 100);
    const finalData = { ...formData, discount: isNaN(discount) ? 0 : discount };

    try {
      const url = isEdit ? `/api/admin/products/${initialData?.id}` : "/api/admin/products";
      const method = isEdit ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
      });

      const result = await res.json();

      if (result.success) {
        router.push("/admin/products");
        router.refresh();
      } else {
        setError(result.error || "Something went wrong");
      }
    } catch (err) {
      setError("Failed to save product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 pb-20">
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100 font-medium">
          ⚠️ {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - General Info */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm space-y-6">
            <h3 className="text-xl font-bold border-b border-neutral-100 pb-4">General Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-700">Product ID (Slug)</label>
                <input
                  name="id"
                  value={formData.id}
                  onChange={handleChange}
                  disabled={isEdit}
                  required
                  placeholder="iphone-16-pro"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-black outline-none disabled:bg-neutral-50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-700">Product Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Apple iPhone 16 Pro"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-black outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-700">Brand</label>
                <select
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-black outline-none bg-white"
                >
                  {brandsData.map((b) => (
                    <option key={b.id} value={b.name}>{b.name}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-700">Price (₹)</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-black outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-700">MRP (₹)</label>
                <input
                  type="number"
                  name="originalPrice"
                  value={formData.originalPrice}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-black outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-neutral-700">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                required
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-black outline-none resize-none"
              ></textarea>
            </div>
          </div>

          {/* Specifications */}
          <div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm space-y-6">
            <h3 className="text-xl font-bold border-b border-neutral-100 pb-4">Technical Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.keys(formData.specs || {}).map((key) => (
                <div key={key} className="space-y-2">
                  <label className="text-sm font-bold text-neutral-700 capitalize">{key}</label>
                  <input
                    name={`specs.${key}`}
                    value={(formData.specs as any)[key]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-black outline-none"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Highlights & Offers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm space-y-6">
              <h3 className="text-xl font-bold border-b border-neutral-100 pb-4">Key Highlights</h3>
              {formData.highlights?.map((h, i) => (
                <input
                  key={i}
                  value={h}
                  onChange={(e) => handleArrayChange(i, e.target.value, "highlights")}
                  placeholder={`Highlight ${i + 1}`}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-black outline-none mb-2"
                />
              ))}
            </div>
            <div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm space-y-6">
              <h3 className="text-xl font-bold border-b border-neutral-100 pb-4">Bank Offers</h3>
              {formData.offers?.map((o, i) => (
                <input
                  key={i}
                  value={o}
                  onChange={(e) => handleArrayChange(i, e.target.value, "offers")}
                  placeholder={`Offer ${i + 1}`}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-black outline-none mb-2"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Sidebar style settings */}
        <div className="space-y-8">
          {/* Images */}
          <div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm space-y-6">
            <h3 className="text-xl font-bold border-b border-neutral-100 pb-4">Product Images (4)</h3>
            <p className="text-xs text-neutral-400">Enter image paths from /public/product-images/</p>
            {formData.images?.map((img, i) => (
              <div key={i} className="space-y-2">
                <input
                  value={img}
                  onChange={(e) => handleArrayChange(i, e.target.value, "images")}
                  placeholder={`Image URL ${i + 1}`}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-black outline-none"
                />
              </div>
            ))}
          </div>

          {/* Categories */}
          <div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm space-y-6">
            <h3 className="text-xl font-bold border-b border-neutral-100 pb-4">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {categoriesData.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategoryToggle(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                    formData.category?.includes(cat.id)
                      ? "bg-black text-white border-black"
                      : "bg-white text-neutral-500 border-neutral-200 hover:border-black hover:text-black"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Status & Options */}
          <div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm space-y-6">
            <h3 className="text-xl font-bold border-b border-neutral-100 pb-4">Status & Visibility</h3>
            <div className="space-y-4">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="inStock"
                  checked={formData.inStock}
                  onChange={handleCheckboxChange}
                  className="w-5 h-5 accent-black"
                />
                <span className="font-semibold text-neutral-700">In Stock</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="isFeatured"
                  checked={formData.isFeatured}
                  onChange={handleCheckboxChange}
                  className="w-5 h-5 accent-black"
                />
                <span className="font-semibold text-neutral-700">Featured Product</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="isBestSeller"
                  checked={formData.isBestSeller}
                  onChange={handleCheckboxChange}
                  className="w-5 h-5 accent-black"
                />
                <span className="font-semibold text-neutral-700">Best Seller</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="isNewLaunch"
                  checked={formData.isNewLaunch}
                  onChange={handleCheckboxChange}
                  className="w-5 h-5 accent-black"
                />
                <span className="font-semibold text-neutral-700">New Launch</span>
              </label>
            </div>
          </div>

          <div className="flex space-x-4 sticky bottom-8">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-neutral-900 text-white py-4 rounded-2xl font-bold hover:bg-black transition-all shadow-xl disabled:opacity-50"
            >
              {loading ? "Saving..." : isEdit ? "Update Product" : "Publish Product"}
            </button>
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-4 bg-white border border-neutral-200 rounded-2xl font-bold hover:bg-neutral-50 transition-all shadow-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
