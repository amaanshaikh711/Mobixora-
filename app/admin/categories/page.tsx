"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Category } from "@/data/categories";

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCategory, setNewCategory] = useState<Partial<Category>>({
    id: "",
    name: "",
    slug: "",
    description: "",
    icon: "📱",
    image: "/category-images/5g.jpg",
    gradient: "from-blue-600 to-indigo-700",
    accentColor: "#6366f1",
    count: "0 Models"
  });

  const fetchCategories = async () => {
    try {
      const res = await fetch("/api/admin/categories");
      const data = await res.json();
      setCategories(data);
    } catch (err) {
      console.error("Failed to fetch categories", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...newCategory, slug: newCategory.id }),
      });
      if (res.ok) {
        setShowAddModal(false);
        fetchCategories();
        setNewCategory({
          id: "",
          name: "",
          slug: "",
          description: "",
          icon: "📱",
          image: "/category-images/5g.jpg",
          gradient: "from-blue-600 to-indigo-700",
          accentColor: "#6366f1",
          count: "0 Models"
        });
      } else {
        const error = await res.json();
        alert(error.error || "Failed to add category");
      }
    } catch (err) {
      console.error("Add category error:", err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this category?")) return;

    try {
      const res = await fetch(`/api/admin/categories/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setCategories(categories.filter((c) => c.id !== id));
      } else {
        const error = await res.json();
        alert(error.error || "Failed to delete category");
      }
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

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
          <h1 className="text-3xl font-bold">Category Management</h1>
          <p className="text-neutral-500">Add or remove product categories</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-neutral-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-black transition-all shadow-lg flex items-center space-x-2"
        >
          <span>➕</span>
          <span>Add Category</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="bg-white rounded-3xl border border-neutral-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-500">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              <div className="absolute left-6 bottom-6 flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 mb-1">
                  {category.id}
                </span>
                <h3 className="text-white font-black text-xl tracking-tight">{category.name}</h3>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <p className="text-neutral-500 text-sm mb-6 flex-1 italic">"{category.description}"</p>
              <div className="flex items-center justify-between pt-5 border-t border-neutral-50">
                <div className="flex flex-col">
                  <span className="text-[10px] text-neutral-400 font-bold uppercase">Inventory</span>
                  <span className="text-sm font-black text-neutral-900">{category.count}</span>
                </div>
                <div className="flex items-center space-x-2 bg-neutral-50 px-3 py-1.5 rounded-full border border-neutral-100">
                  <div className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: category.accentColor }}></div>
                  <span className="text-[10px] font-bold text-neutral-500">{category.accentColor}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl animate-in zoom-in-95">
            <h3 className="text-2xl font-bold mb-6">Add New Category</h3>
            <form onSubmit={handleAdd} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-700">Category ID</label>
                  <input
                    required
                    value={newCategory.id}
                    onChange={(e) => setNewCategory({ ...newCategory, id: e.target.value })}
                    placeholder="e.g. gaming"
                    className="w-full px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-700">Display Name</label>
                  <input
                    required
                    value={newCategory.name}
                    onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                    placeholder="e.g. Gaming Phones"
                    className="w-full px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-700">Description</label>
                <input
                  required
                  value={newCategory.description}
                  onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
                  placeholder="e.g. Built for mobile gamers"
                  className="w-full px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-700">Card Image</label>
                  <input
                    required
                    value={newCategory.image}
                    onChange={(e) => setNewCategory({ ...newCategory, image: e.target.value })}
                    placeholder="/category-images/flagship.jpg"
                    className="w-full px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-700">Accent Color</label>
                  <input
                    required
                    type="color"
                    value={newCategory.accentColor}
                    onChange={(e) => setNewCategory({ ...newCategory, accentColor: e.target.value })}
                    className="w-full h-10 p-1 bg-neutral-50 border border-neutral-200 rounded-lg outline-none cursor-pointer"
                  />
                </div>
              </div>
              <div className="flex space-x-3 pt-6">
                <button
                  type="submit"
                  className="flex-1 bg-black text-white py-3 rounded-xl font-bold hover:bg-neutral-800 transition-all"
                >
                  Create Category
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-6 py-3 bg-neutral-100 text-neutral-600 rounded-xl font-bold hover:bg-neutral-200 transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
