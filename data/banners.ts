export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  cta: string;
  ctaLink: string;
  bgGradient: string;
  image: string;
  badge?: string;
}

export interface OfferBanner {
  id: string;
  offers: {
    icon: string;
    title: string;
    description: string;
    bgColor: string;
  }[];
}

export const heroSlides: HeroSlide[] = [
  {
    id: "slide-1",
    title: "Flagship Phone Sale",
    subtitle: "Up to 25% off on iPhone 15 Pro Max, Galaxy S24 Ultra & more",
    cta: "Shop Flagships",
    ctaLink: "/products?category=flagship",
    bgGradient: "from-blue-600 via-blue-700 to-indigo-800",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&h=600&fit=crop",
    badge: "MEGA SALE"
  },
  {
    id: "slide-2",
    title: "Budget Smartphones",
    subtitle: "5G phones starting from just ₹9,999 — Best deals of the season",
    cta: "View Deals",
    ctaLink: "/products?category=budget",
    bgGradient: "from-emerald-600 via-green-700 to-teal-800",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&h=600&fit=crop",
    badge: "STARTING ₹9,999"
  },
  {
    id: "slide-3",
    title: "Bank & EMI Offers",
    subtitle: "No Cost EMI + Flat ₹5,000 off with HDFC, SBI, ICICI Bank Cards",
    cta: "Explore Offers",
    ctaLink: "/products",
    bgGradient: "from-orange-500 via-amber-600 to-yellow-700",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    badge: "BANK OFFERS"
  },
  {
    id: "slide-4",
    title: "New Launches 2024",
    subtitle: "OnePlus 12, Nothing Phone 2a, Realme GT 6 — Just Launched!",
    cta: "Shop New Arrivals",
    ctaLink: "/products?sort=newest",
    bgGradient: "from-purple-600 via-violet-700 to-fuchsia-800",
    image: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=800&h=600&fit=crop",
    badge: "JUST LAUNCHED"
  },
  {
    id: "slide-5",
    title: "Gaming Phone Fest",
    subtitle: "ROG Phone 8, iQOO 12, POCO X6 Pro — Up to 20% off",
    cta: "Shop Gaming Phones",
    ctaLink: "/products?category=gaming",
    bgGradient: "from-red-600 via-rose-700 to-pink-800",
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800&h=600&fit=crop",
    badge: "GAMING FEST"
  },
  {
    id: "slide-6",
    title: "Republic Day Sale",
    subtitle: "Extra ₹3,000 off on exchange + Free screen protector on all phones",
    cta: "Shop Now",
    ctaLink: "/products",
    bgGradient: "from-amber-500 via-orange-600 to-red-700",
    image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=800&h=600&fit=crop",
    badge: "FESTIVE SALE"
  }
];

export const offerBanners: OfferBanner[] = [
  {
    id: "offer-strip-1",
    offers: [
      { icon: "🏦", title: "Bank Offers", description: "Up to ₹8,000 off with Credit/Debit Cards", bgColor: "bg-blue-50 border-blue-200" },
      { icon: "📦", title: "No Cost EMI", description: "Starting from ₹556/month on all phones", bgColor: "bg-green-50 border-green-200" },
      { icon: "🔄", title: "Exchange Offers", description: "Get up to ₹20,000 off on exchange", bgColor: "bg-orange-50 border-orange-200" },
      { icon: "🚚", title: "Free Delivery", description: "Free shipping on orders above ₹999", bgColor: "bg-purple-50 border-purple-200" }
    ]
  },
  {
    id: "offer-strip-2",
    offers: [
      { icon: "⚡", title: "Flash Sale", description: "Extra 5% off for the next 2 hours!", bgColor: "bg-red-50 border-red-200" },
      { icon: "🎁", title: "Bundle Deal", description: "Free case + earphones with flagships", bgColor: "bg-pink-50 border-pink-200" },
      { icon: "💳", title: "HDFC Special", description: "Flat ₹5,000 instant discount", bgColor: "bg-indigo-50 border-indigo-200" },
      { icon: "🛡️", title: "Extended Warranty", description: "1 year extra warranty at ₹499", bgColor: "bg-yellow-50 border-yellow-200" }
    ]
  },
  {
    id: "offer-strip-3",
    offers: [
      { icon: "🔥", title: "Limited Time", description: "Samsung Galaxy S23 FE at 40% off!", bgColor: "bg-red-50 border-red-200" },
      { icon: "📱", title: "Top Rated", description: "Highest rated phones of 2024", bgColor: "bg-teal-50 border-teal-200" },
      { icon: "💎", title: "Premium Picks", description: "Handpicked flagship smartphones", bgColor: "bg-violet-50 border-violet-200" },
      { icon: "🎯", title: "Price Drop", description: "Prices slashed on 50+ models", bgColor: "bg-cyan-50 border-cyan-200" }
    ]
  },
  {
    id: "offer-strip-4",
    offers: [
      { icon: "🎉", title: "Festive Bonanza", description: "Mega discounts on all brands", bgColor: "bg-amber-50 border-amber-200" },
      { icon: "📲", title: "App Exclusive", description: "Extra ₹1,000 off via mobile app", bgColor: "bg-lime-50 border-lime-200" },
      { icon: "⭐", title: "Member Special", description: "Logged-in users get extra 2% off", bgColor: "bg-rose-50 border-rose-200" },
      { icon: "🏷️", title: "Coupon Deal", description: "Use code MOBILE500 for ₹500 off", bgColor: "bg-sky-50 border-sky-200" }
    ]
  }
];
