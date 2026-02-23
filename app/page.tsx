import { products } from "@/data/products";
import { offerBanners } from "@/data/banners";
import HeroSlider from "@/components/home/HeroSlider";
import OfferBanner from "@/components/home/OfferBanner";
import ShopByCategory from "@/components/home/ShopByCategory";
import ShopByBrand from "@/components/home/ShopByBrand";
import ProductSlider from "@/components/home/ProductSlider";

export default function HomePage() {
  const featured = products.filter((p) => p.isFeatured);
  const bestSellers = products.filter((p) => p.isBestSeller);
  const topDeals = products.filter((p) => p.isTopDeal);
  const newLaunches = products.filter((p) => p.isNewLaunch);

  return (
    <>
      {/* 1. Hero Carousel */}
      <HeroSlider />

      {/* 2. Offer Strip #1 */}
      <OfferBanner banner={offerBanners[0]} />

      {/* 3. Shop by Category */}
      <ShopByCategory />

      {/* 4. Featured Mobiles */}
      <ProductSlider
        title="Featured Mobiles"
        subtitle="Handpicked smartphones just for you"
        products={featured}
        viewAllLink="/products"
        bgColor="bg-gray-50"
      />

      {/* 5. Offer Strip #2 */}
      <OfferBanner banner={offerBanners[1]} />

      {/* 6. Shop by Brand */}
      <ShopByBrand />

      {/* 7. Best Sellers */}
      <ProductSlider
        title="Best Sellers"
        subtitle="Most loved phones by our customers"
        products={bestSellers}
        viewAllLink="/products"
      />

      {/* 8. Offer Strip #3 */}
      <OfferBanner banner={offerBanners[2]} />

      {/* 9. Top Deals */}
      <ProductSlider
        title="Top Deals of the Day"
        subtitle="Biggest discounts — don't miss out!"
        products={topDeals}
        viewAllLink="/products"
        bgColor="bg-gray-50"
      />

      {/* 10. New Launches */}
      <ProductSlider
        title="New Launches"
        subtitle="Just arrived — be the first to explore"
        products={newLaunches}
        viewAllLink="/products?sort=newest"
      />

      {/* 11. Offer Strip #4 */}
      <OfferBanner banner={offerBanners[3]} />

      {/* 12. Why Shop With Us */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Why Shop With MobileStore?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🔒", title: "100% Genuine", desc: "All products are brand authorized" },
              { icon: "🚚", title: "Free Delivery", desc: "On orders above ₹999" },
              { icon: "🔄", title: "Easy Returns", desc: "7-day hassle-free returns" },
              { icon: "🛡️", title: "Secure Payment", desc: "256-bit SSL encryption" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition"
              >
                <span className="text-4xl mb-3 block">{item.icon}</span>
                <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
