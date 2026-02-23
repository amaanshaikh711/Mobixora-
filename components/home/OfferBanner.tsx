import { OfferBanner as OfferBannerType } from "@/data/banners";

interface Props {
  banner: OfferBannerType;
}

export default function OfferBanner({ banner }: Props) {
  return (
    <section className="py-4 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {banner.offers.map((offer, idx) => (
            <div
              key={idx}
              className={`${offer.bgColor} border rounded-xl p-4 flex items-center gap-3 hover:shadow-md transition cursor-pointer group`}
            >
              <span className="text-2xl shrink-0 group-hover:scale-110 transition-transform">
                {offer.icon}
              </span>
              <div className="min-w-0">
                <h4 className="font-bold text-gray-900 text-sm truncate">
                  {offer.title}
                </h4>
                <p className="text-xs text-gray-600 line-clamp-2">
                  {offer.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
