import Link from "next/link";
import Image from "next/image";
import { brands } from "@/data/brands";

export default function ShopByBrand() {
  return (
    <section className="py-12 px-4 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Shop by Brand</h2>
            <p className="text-sm text-gray-600 mt-2">Your favourite brands, all in one place</p>
          </div>
          <Link
            href="/products"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition flex items-center gap-1"
          >
            View All <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              href={`/products?brand=${brand.slug}`}
              className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center justify-center gap-3 hover:border-blue-400 hover:shadow-xl transition-all duration-300 group h-32"
            >
              <div className="w-16 h-16 flex items-center justify-center relative">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-contain filter group-hover:brightness-110 transition-all"
                />
              </div>
              <span className="text-xs font-semibold text-gray-700 group-hover:text-blue-600 transition text-center line-clamp-1">
                {brand.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
