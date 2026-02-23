import Link from "next/link";
import { categories } from "@/data/categories";

export default function ShopByCategory() {
  return (
    <section className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Shop by Category</h2>
            <p className="text-sm text-gray-500 mt-1">Find the perfect phone for your needs</p>
          </div>
          <Link
            href="/products"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/products?category=${cat.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
            >
              <div className={`h-36 bg-gradient-to-br ${cat.gradient} flex items-center justify-center`}>
                <span className="text-5xl group-hover:scale-125 transition-transform duration-300">
                  {cat.icon}
                </span>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-gray-900 text-sm">{cat.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
