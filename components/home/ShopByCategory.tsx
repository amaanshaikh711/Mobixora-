import Link from "next/link";
import { categories } from "@/data/categories";

export default function ShopByCategory() {
  return (
    <section className="py-14 px-4" style={{ background: "linear-gradient(180deg, #f8faff 0%, #ffffff 100%)" }}>
      <style>{`
        @keyframes catCardHover {
          from { transform: translateY(0) scale(1); }
          to   { transform: translateY(-6px) scale(1.02); }
        }
        .cat-card {
          transition: transform 0.35s cubic-bezier(.22,.61,.36,1), box-shadow 0.35s ease;
        }
        .cat-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 24px 64px -12px rgba(0,0,0,0.18);
        }
        .cat-card:hover .cat-overlay {
          opacity: 1;
        }
        .cat-card:hover .cat-img {
          transform: scale(1.08);
        }
        .cat-card:hover .cat-arrow {
          opacity: 1;
          transform: translateX(0);
        }
        .cat-overlay {
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .cat-img {
          transition: transform 0.6s cubic-bezier(.22,.61,.36,1);
        }
        .cat-arrow {
          opacity: 0;
          transform: translateX(-6px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* ── Header ── */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-black tracking-[0.2em] uppercase text-indigo-500 mb-1">
              Browse Collection
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
              Shop by Category
            </h2>
            <p className="text-gray-500 mt-1.5 text-sm font-medium">
              Find the perfect phone for your needs
            </p>
          </div>
          <Link
            href="/products"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-bold hover:bg-gray-700 transition-all duration-200 group"
          >
            View All
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* ── Category Cards Grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/products?category=${cat.slug}`}
              className="cat-card group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm"
            >
              {/* ── Image area ── */}
              <div className="relative overflow-hidden" style={{ height: "200px", background: "#f8f9fa" }}>
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="cat-img w-full h-full object-contain object-center"
                  style={{ padding: "12px" }}
                />

                {/* Gradient overlay always visible at bottom */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, ${cat.accentColor}ee 0%, ${cat.accentColor}44 40%, transparent 70%)`,
                  }}
                />

                {/* Hover overlay — darkens entire image */}
                <div
                  className="cat-overlay absolute inset-0"
                  style={{ background: "rgba(0,0,0,0.25)" }}
                />

                {/* Count badge — top right */}
                <div
                  className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-white text-[10px] font-black backdrop-blur-sm"
                  style={{ background: "rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.2)" }}
                >
                  {cat.count}
                </div>

                {/* Arrow icon on hover — top left */}
                <div className="cat-arrow absolute top-3 left-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: cat.accentColor }}
                  >
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* ── Text area ── */}
              <div className="px-4 py-3.5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-black text-gray-900 text-sm leading-tight group-hover:text-indigo-600 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-gray-500 text-[11px] mt-0.5 leading-tight font-medium">
                      {cat.description}
                    </p>
                  </div>
                  {/* Color dot accent */}
                  <div
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0 ml-2"
                    style={{ background: cat.accentColor }}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ── Mobile "View All" ── */}
        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 text-white text-sm font-bold hover:bg-gray-700 transition-all"
          >
            View All Categories →
          </Link>
        </div>
      </div>
    </section>
  );
}
