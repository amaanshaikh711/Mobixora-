"use client";

import { OfferBanner as OfferBannerType } from "@/data/banners";

interface Props {
  banner: OfferBannerType;
}

const accentColors: string[] = ["#6366f1", "#10b981", "#f59e0b", "#a855f7"];

export default function OfferBanner({ banner }: Props) {
  return (
    <section
      className="py-5 px-4"
      style={{
        background: "linear-gradient(135deg, #111111 0%, #2d2d2d 50%, #1a1a1a 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {banner.offers.map((offer, idx) => {
            const accent = accentColors[idx % accentColors.length];
            return (
              <div
                key={idx}
                className="relative flex items-center gap-3 p-4 rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 hover:scale-[1.03]"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.border = `1px solid ${accent}55`;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 32px -8px ${accent}44, inset 0 1px 0 rgba(255,255,255,0.08)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(255,255,255,0.09)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "inset 0 1px 0 rgba(255,255,255,0.06)";
                }}
              >
                {/* Accent left bar */}
                <div
                  className="absolute left-0 top-3 bottom-3 w-0.5 rounded-full"
                  style={{ background: accent }}
                />

                {/* Icon */}
                <span className="text-2xl shrink-0 group-hover:scale-110 transition-transform pl-1">
                  {offer.icon}
                </span>

                {/* Text */}
                <div className="min-w-0">
                  <h4 className="font-black text-white text-sm truncate leading-tight">
                    {offer.title}
                  </h4>
                  <p className="text-xs text-white/45 line-clamp-2 mt-0.5 leading-tight font-medium">
                    {offer.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
