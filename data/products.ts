import { extraProducts } from "./productsExtra";
export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string[];
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviewCount: number;
  images: string[];
  highlights: string[];
  specs: {
    display: string;
    processor: string;
    ram: string;
    storage: string;
    battery: string;
    rearCamera: string;
    frontCamera: string;
    os: string;
    network: string;
    weight: string;
  };
  offers: string[];
  inStock: boolean;
  isFeatured: boolean;
  isBestSeller: boolean;
  isNewLaunch: boolean;
  isTopDeal: boolean;
  colors: string[];
  description: string;
}

export interface Review {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  verified: boolean;
}

export const products: Product[] = [
  {
    id: "iphone-15-pro-max",
    name: "Apple iPhone 15 Pro Max",
    brand: "Apple",
    category: ["flagship", "5g"],
    price: 156900,
    originalPrice: 179900,
    discount: 13,
    rating: 4.7,
    reviewCount: 12453,
    images: [
      "/product-images/iphone-15-pro-max.jpg",
      "/product-images/iphone-15-pro-max.jpg",
      "/product-images/iphone-15-pro-max.jpg",
      "/product-images/iphone-15-pro-max.jpg"
    ],
    highlights: [
      "6.7-inch Super Retina XDR OLED Display",
      "A17 Pro Chip with 6-Core GPU",
      "48MP Main + 12MP Ultra Wide + 12MP Telephoto Camera",
      "Titanium Design — Lightest Pro model ever",
      "USB-C with USB 3 speeds",
      "Action Button for quick access"
    ],
    specs: {
      display: "6.7-inch Super Retina XDR OLED, 2796x1290, 120Hz ProMotion",
      processor: "A17 Pro Chip",
      ram: "8 GB",
      storage: "256 GB",
      battery: "4441 mAh, 20W Wired, 15W MagSafe",
      rearCamera: "48MP Main + 12MP Ultra Wide + 12MP 5x Telephoto",
      frontCamera: "12MP TrueDepth with Face ID",
      os: "iOS 17",
      network: "5G (Sub-6 GHz & mmWave)",
      weight: "221 g"
    },
    offers: [
      "Flat ₹5,000 off with HDFC Bank Credit Card",
      "No Cost EMI from ₹8,717/month for 18 months",
      "Exchange up to ₹17,500 off",
      "Free Apple Music for 6 months"
    ],
    inStock: true,
    isFeatured: true,
    isBestSeller: true,
    isNewLaunch: false,
    isTopDeal: true,
    colors: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
    description: "iPhone 15 Pro Max features a strong and lightweight titanium design with a textured matte-glass back. It also features the A17 Pro chip, a customizable Action button, and the most powerful iPhone camera system ever."
  },
  {
    id: "samsung-galaxy-s24-ultra",
    name: "Samsung Galaxy S24 Ultra 5G",
    brand: "Samsung",
    category: ["flagship", "5g"],
    price: 129999,
    originalPrice: 144999,
    discount: 10,
    rating: 4.6,
    reviewCount: 8976,
    images: [
      "/product-images/samsung-s24-ultra.jpg",
      "/product-images/samsung-s24-ultra.jpg",
      "/product-images/samsung-s24-ultra.jpg",
      "/product-images/samsung-s24-ultra.jpg"
    ],
    highlights: [
      "6.8-inch Dynamic AMOLED 2X, QHD+, 120Hz",
      "Snapdragon 8 Gen 3 for Galaxy",
      "200MP + 12MP + 50MP + 10MP Quad Camera",
      "Built-in S Pen with AI features",
      "Galaxy AI — Circle to Search, Live Translate",
      "Titanium Frame, IP68 Water Resistant"
    ],
    specs: {
      display: "6.8-inch Dynamic AMOLED 2X, 3120x1440, 120Hz",
      processor: "Snapdragon 8 Gen 3 for Galaxy",
      ram: "12 GB",
      storage: "256 GB",
      battery: "5000 mAh, 45W Wired, 15W Wireless",
      rearCamera: "200MP Main + 12MP Ultra Wide + 50MP 5x Telephoto + 10MP 3x Telephoto",
      frontCamera: "12MP",
      os: "Android 14, One UI 6.1",
      network: "5G",
      weight: "232 g"
    },
    offers: [
      "Flat ₹7,000 off with SBI Credit Card",
      "No Cost EMI from ₹7,223/month",
      "Exchange up to ₹20,000 off",
      "Galaxy Buds FE free with purchase"
    ],
    inStock: true,
    isFeatured: true,
    isBestSeller: true,
    isNewLaunch: false,
    isTopDeal: true,
    colors: ["Titanium Gray", "Titanium Black", "Titanium Violet", "Titanium Yellow"],
    description: "Galaxy S24 Ultra brings Galaxy AI to everything you do. With a powerful Snapdragon 8 Gen 3 chip, stunning 200MP camera, built-in S Pen, and titanium durability."
  },
  {
    id: "oneplus-12",
    name: "OnePlus 12 5G",
    brand: "OnePlus",
    category: ["flagship", "5g"],
    price: 64999,
    originalPrice: 69999,
    discount: 7,
    rating: 4.5,
    reviewCount: 6543,
    images: [
      "/product-images/oneplus-12.jpg",
      "/product-images/oneplus-12.jpg",
      "/product-images/oneplus-12.jpg",
      "/product-images/oneplus-12.jpg"
    ],
    highlights: [
      "6.82-inch 2K LTPO AMOLED, 120Hz ProXDR Display",
      "Snapdragon 8 Gen 3 Processor",
      "50MP Hasselblad Triple Camera System",
      "5400 mAh Battery with 100W SUPERVOOC",
      "Up to 24GB RAM with LPDDR5X",
      "Aqua Touch — use in wet hands"
    ],
    specs: {
      display: "6.82-inch 2K LTPO AMOLED, 3168x1440, 120Hz",
      processor: "Snapdragon 8 Gen 3",
      ram: "12 GB",
      storage: "256 GB",
      battery: "5400 mAh, 100W SUPERVOOC",
      rearCamera: "50MP Main + 48MP Ultra Wide + 64MP 3x Telephoto",
      frontCamera: "32MP",
      os: "Android 14, OxygenOS 14",
      network: "5G",
      weight: "220 g"
    },
    offers: [
      "Flat ₹3,000 off with ICICI Bank Cards",
      "No Cost EMI from ₹5,417/month",
      "Exchange up to ₹15,000 off"
    ],
    inStock: true,
    isFeatured: true,
    isBestSeller: false,
    isNewLaunch: true,
    isTopDeal: false,
    colors: ["Silky Black", "Flowy Emerald"],
    description: "OnePlus 12 is the flagship killer with Snapdragon 8 Gen 3, Hasselblad camera tuning, and the fastest charging in its class at 100W."
  },
  {
    id: "xiaomi-14",
    name: "Xiaomi 14 5G",
    brand: "Xiaomi",
    category: ["flagship", "5g"],
    price: 69999,
    originalPrice: 79999,
    discount: 13,
    rating: 4.4,
    reviewCount: 3245,
    images: [
      "/product-images/xiaomi-14.jpg",
      "/product-images/xiaomi-14.jpg",
      "/product-images/xiaomi-14.jpg",
      "/product-images/xiaomi-14.jpg"
    ],
    highlights: [
      "6.36-inch 1.5K LTPO AMOLED, 120Hz",
      "Snapdragon 8 Gen 3 Processor",
      "Leica Optics — 50MP Triple Camera",
      "4610 mAh with 90W HyperCharge",
      "IP68 Water & Dust Resistant",
      "Compact Flagship Design"
    ],
    specs: {
      display: "6.36-inch 1.5K LTPO AMOLED, 2670x1200, 120Hz",
      processor: "Snapdragon 8 Gen 3",
      ram: "12 GB",
      storage: "256 GB",
      battery: "4610 mAh, 90W Wired, 50W Wireless",
      rearCamera: "50MP Leica Main + 50MP Ultra Wide + 50MP 3.2x Telephoto",
      frontCamera: "32MP",
      os: "Android 14, HyperOS",
      network: "5G",
      weight: "193 g"
    },
    offers: [
      "Flat ₹5,000 off with HDFC Bank",
      "No Cost EMI from ₹5,834/month",
      "Exchange up to ₹12,000 off"
    ],
    inStock: true,
    isFeatured: false,
    isBestSeller: false,
    isNewLaunch: true,
    isTopDeal: true,
    colors: ["Black", "White", "Jade Green"],
    description: "Xiaomi 14 pairs the powerful Snapdragon 8 Gen 3 with Leica-tuned triple 50MP cameras in a compact, premium design."
  },
  {
    id: "google-pixel-8-pro",
    name: "Google Pixel 8 Pro",
    brand: "Google",
    category: ["flagship", "5g"],
    price: 97999,
    originalPrice: 106999,
    discount: 8,
    rating: 4.5,
    reviewCount: 4321,
    images: [
      "/product-images/google-pixel-8-pro.jpg",
      "/product-images/google-pixel-8-pro.jpg",
      "/product-images/google-pixel-8-pro.jpg",
      "/product-images/google-pixel-8-pro.jpg"
    ],
    highlights: [
      "6.7-inch LTPO OLED, QHD+, 120Hz",
      "Google Tensor G3 with AI features",
      "50MP + 48MP + 48MP Triple Camera with AI editing",
      "7 years of OS & Security updates",
      "Magic Eraser, Best Take, Audio Magic Eraser",
      "Temperature Sensor"
    ],
    specs: {
      display: "6.7-inch LTPO OLED, 2992x1344, 120Hz",
      processor: "Google Tensor G3",
      ram: "12 GB",
      storage: "128 GB",
      battery: "5050 mAh, 30W Wired, 23W Wireless",
      rearCamera: "50MP Main + 48MP Ultra Wide + 48MP 5x Telephoto",
      frontCamera: "10.5MP",
      os: "Android 14",
      network: "5G",
      weight: "213 g"
    },
    offers: [
      "Flat ₹4,000 off with Axis Bank",
      "No Cost EMI available",
      "Exchange up to ₹14,000 off"
    ],
    inStock: true,
    isFeatured: true,
    isBestSeller: false,
    isNewLaunch: false,
    isTopDeal: false,
    colors: ["Obsidian", "Porcelain", "Bay"],
    description: "Google Pixel 8 Pro brings the best of Google AI to your phone with Tensor G3 chip, advanced computational photography, and 7 years of updates."
  },
  {
    id: "samsung-galaxy-a55",
    name: "Samsung Galaxy A55 5G",
    brand: "Samsung",
    category: ["mid-range", "5g"],
    price: 27999,
    originalPrice: 32999,
    discount: 15,
    rating: 4.3,
    reviewCount: 7654,
    images: [
      "/product-images/samsung-a55.jpg",
      "/product-images/samsung-a55.jpg",
      "/product-images/samsung-a55.jpg",
      "/product-images/samsung-a55.jpg"
    ],
    highlights: [
      "6.6-inch Super AMOLED, FHD+, 120Hz",
      "Samsung Exynos 1480 Processor",
      "50MP OIS Triple Camera",
      "5000 mAh Battery, 25W Charging",
      "IP67 Water Resistant",
      "4 Gen OS + 5 Years Security Updates"
    ],
    specs: {
      display: "6.6-inch Super AMOLED, 2340x1080, 120Hz",
      processor: "Samsung Exynos 1480",
      ram: "8 GB",
      storage: "128 GB",
      battery: "5000 mAh, 25W Fast Charging",
      rearCamera: "50MP OIS + 12MP Ultra Wide + 5MP Macro",
      frontCamera: "13MP",
      os: "Android 14, One UI 6.1",
      network: "5G",
      weight: "213 g"
    },
    offers: [
      "Flat ₹2,000 off with Bank Offers",
      "No Cost EMI from ₹1,556/month",
      "Exchange up to ₹10,000 off"
    ],
    inStock: true,
    isFeatured: false,
    isBestSeller: true,
    isNewLaunch: false,
    isTopDeal: true,
    colors: ["Awesome Iceblue", "Awesome Lilac", "Awesome Lemon", "Awesome Navy"],
    description: "Samsung Galaxy A55 5G offers flagship-level display and camera quality with IP67 rating and long software support at an affordable price."
  },
  {
    id: "nothing-phone-2a",
    name: "Nothing Phone (2a) 5G",
    brand: "Nothing",
    category: ["mid-range", "5g"],
    price: 23999,
    originalPrice: 27999,
    discount: 14,
    rating: 4.4,
    reviewCount: 5432,
    images: [
      "/product-images/nothing-phone-2a.jpg",
      "/product-images/nothing-phone-2a.jpg",
      "/product-images/nothing-phone-2a.jpg",
      "/product-images/nothing-phone-2a.jpg"
    ],
    highlights: [
      "6.7-inch Flexible AMOLED, FHD+, 120Hz",
      "MediaTek Dimensity 7200 Pro",
      "50MP + 50MP Dual Camera with OIS",
      "5000 mAh, 45W Fast Charging",
      "Iconic Glyph Interface LED lights",
      "Nothing OS 2.5 based on Android 14"
    ],
    specs: {
      display: "6.7-inch Flexible AMOLED, 2412x1084, 120Hz",
      processor: "MediaTek Dimensity 7200 Pro",
      ram: "8 GB",
      storage: "128 GB",
      battery: "5000 mAh, 45W Fast Charging",
      rearCamera: "50MP OIS + 50MP Ultra Wide",
      frontCamera: "32MP",
      os: "Android 14, Nothing OS 2.5",
      network: "5G",
      weight: "190 g"
    },
    offers: [
      "Flat ₹1,500 off with ICICI Bank",
      "No Cost EMI from ₹2,000/month",
      "Exchange up to ₹8,000 off"
    ],
    inStock: true,
    isFeatured: true,
    isBestSeller: false,
    isNewLaunch: true,
    isTopDeal: false,
    colors: ["Black", "Milk"],
    description: "Nothing Phone (2a) delivers a unique design language with Glyph Interface, capable cameras, and smooth performance at a mid-range price."
  },
  {
    id: "iqoo-12",
    name: "iQOO 12 5G",
    brand: "iQOO",
    category: ["flagship", "5g", "gaming"],
    price: 52999,
    originalPrice: 57999,
    discount: 9,
    rating: 4.5,
    reviewCount: 3210,
    images: [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&h=600&fit=crop&q=90",
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=600&h=600&fit=crop&q=90",
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&h=600&fit=crop&q=90",
      "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=600&h=600&fit=crop&q=90"
    ],
    highlights: [
      "6.78-inch 2K LTPO AMOLED, 144Hz",
      "Snapdragon 8 Gen 3 Processor",
      "50MP + 13MP + 50MP Triple Camera with OIS",
      "5000 mAh, 120W FlashCharge",
      "V3 Chip for Gaming Enhancement",
      "Ultra Game Mode with 4D Vibration"
    ],
    specs: {
      display: "6.78-inch 2K LTPO AMOLED, 3200x1440, 144Hz",
      processor: "Snapdragon 8 Gen 3",
      ram: "12 GB",
      storage: "256 GB",
      battery: "5000 mAh, 120W FlashCharge",
      rearCamera: "50MP OIS + 13MP Ultra Wide + 50MP 2x Portrait",
      frontCamera: "16MP",
      os: "Android 14, Funtouch OS 14",
      network: "5G",
      weight: "212 g"
    },
    offers: [
      "Flat ₹4,000 off with Bank Offers",
      "No Cost EMI from ₹4,417/month",
      "Exchange up to ₹12,000 off"
    ],
    inStock: true,
    isFeatured: false,
    isBestSeller: true,
    isNewLaunch: false,
    isTopDeal: true,
    colors: ["Legend", "Alpha"],
    description: "iQOO 12 is the ultimate gaming flagship with Snapdragon 8 Gen 3, 144Hz display, 120W charging, and V3 chip for next-level gaming."
  },
  {
    id: "realme-gt-6",
    name: "Realme GT 6 5G",
    brand: "Realme",
    category: ["mid-range", "5g"],
    price: 30999,
    originalPrice: 35999,
    discount: 14,
    rating: 4.3,
    reviewCount: 2876,
    images: [
      "/product-images/realme-gt6.jpg",
      "/product-images/realme-gt6.jpg",
      "/product-images/realme-gt6.jpg",
      "/product-images/realme-gt6.jpg"
    ],
    highlights: [
      "6.78-inch LTPO AMOLED, 1.5K, 120Hz, 6000 nits peak",
      "Snapdragon 8s Gen 3 Processor",
      "50MP Sony LYT-808 with OIS",
      "5500 mAh, 120W SUPERVOOC",
      "AI Smart Removal, AI Night Vision",
      "Next AI Features"
    ],
    specs: {
      display: "6.78-inch LTPO AMOLED, 2780x1264, 120Hz",
      processor: "Snapdragon 8s Gen 3",
      ram: "8 GB",
      storage: "256 GB",
      battery: "5500 mAh, 120W SUPERVOOC",
      rearCamera: "50MP Sony LYT-808 OIS + 8MP Ultra Wide + 2MP Macro",
      frontCamera: "32MP",
      os: "Android 14, Realme UI 5.0",
      network: "5G",
      weight: "199 g"
    },
    offers: [
      "Flat ₹2,000 off with HDFC Bank",
      "No Cost EMI from ₹2,584/month",
      "Exchange up to ₹9,000 off"
    ],
    inStock: true,
    isFeatured: false,
    isBestSeller: false,
    isNewLaunch: true,
    isTopDeal: true,
    colors: ["Razor Green", "Fluid Silver"],
    description: "Realme GT 6 brings flagship-level performance with Snapdragon 8s Gen 3, AI-powered photography, and the brightest display in its segment."
  },
  {
    id: "vivo-v30-pro",
    name: "Vivo V30 Pro 5G",
    brand: "Vivo",
    category: ["mid-range", "5g"],
    price: 33999,
    originalPrice: 39999,
    discount: 15,
    rating: 4.3,
    reviewCount: 2345,
    images: [
      "/product-images/vivo-v30-pro.jpg",
      "/product-images/vivo-v30-pro.jpg",
      "/product-images/vivo-v30-pro.jpg",
      "/product-images/vivo-v30-pro.jpg"
    ],
    highlights: [
      "6.78-inch 3D Curved AMOLED, FHD+, 120Hz",
      "MediaTek Dimensity 8200",
      "50MP ZEISS + 50MP Ultra Wide Camera",
      "5000 mAh, 80W FlashCharge",
      "ZEISS-tuned Portrait, Aura Light",
      "IP54 Splash Resistant"
    ],
    specs: {
      display: "6.78-inch 3D Curved AMOLED, 2400x1080, 120Hz",
      processor: "MediaTek Dimensity 8200",
      ram: "8 GB",
      storage: "256 GB",
      battery: "5000 mAh, 80W FlashCharge",
      rearCamera: "50MP ZEISS OIS + 50MP Ultra Wide",
      frontCamera: "50MP with Aura Light",
      os: "Android 14, Funtouch OS 14",
      network: "5G",
      weight: "185 g"
    },
    offers: [
      "Flat ₹2,500 off with SBI Bank",
      "No Cost EMI from ₹2,834/month",
      "Exchange up to ₹10,000 off"
    ],
    inStock: true,
    isFeatured: true,
    isBestSeller: false,
    isNewLaunch: false,
    isTopDeal: false,
    colors: ["Peacock Green", "Sugar Pink"],
    description: "Vivo V30 Pro with ZEISS-tuned cameras delivers stunning portraits, 50MP front camera with Aura Light, and a beautiful 3D curved AMOLED display."
  },
  {
    id: "redmi-note-13-pro-plus",
    name: "Redmi Note 13 Pro+ 5G",
    brand: "Xiaomi",
    category: ["mid-range", "5g"],
    price: 29999,
    originalPrice: 33999,
    discount: 12,
    rating: 4.4,
    reviewCount: 9876,
    images: [
      "/product-images/redmi-note-13-pro-plus.jpg",
      "/product-images/redmi-note-13-pro-plus.jpg",
      "/product-images/redmi-note-13-pro-plus.jpg",
      "/product-images/redmi-note-13-pro-plus.jpg"
    ],
    highlights: [
      "6.67-inch CrystalRes AMOLED, 1.5K, 120Hz",
      "MediaTek Dimensity 7200 Ultra",
      "200MP OIS Camera with Samsung ISOCELL HP3",
      "5000 mAh, 120W HyperCharge",
      "IP68 Dust and Water Resistant",
      "Curved Display, Corning Gorilla Glass Victus"
    ],
    specs: {
      display: "6.67-inch CrystalRes AMOLED, 2712x1220, 120Hz",
      processor: "MediaTek Dimensity 7200 Ultra",
      ram: "8 GB",
      storage: "256 GB",
      battery: "5000 mAh, 120W HyperCharge",
      rearCamera: "200MP Samsung OIS + 8MP Ultra Wide + 2MP Macro",
      frontCamera: "16MP",
      os: "Android 13, MIUI 14",
      network: "5G",
      weight: "204.5 g"
    },
    offers: [
      "Flat ₹1,500 off with Bank Offers",
      "No Cost EMI from ₹2,500/month",
      "Exchange up to ₹8,500 off"
    ],
    inStock: true,
    isFeatured: false,
    isBestSeller: true,
    isNewLaunch: false,
    isTopDeal: true,
    colors: ["Midnight Black", "Fusion Purple", "Fusion White"],
    description: "Redmi Note 13 Pro+ packs a 200MP camera, 120W charging, IP68 rating and a stunning 1.5K curved display at an incredible price."
  },
  {
    id: "motorola-edge-50-pro",
    name: "Motorola Edge 50 Pro 5G",
    brand: "Motorola",
    category: ["mid-range", "5g"],
    price: 29999,
    originalPrice: 35999,
    discount: 17,
    rating: 4.2,
    reviewCount: 1876,
    images: [
      "/product-images/motorola-edge-50-pro.jpg",
      "/product-images/motorola-edge-50-pro.jpg",
      "/product-images/motorola-edge-50-pro.jpg",
      "/product-images/motorola-edge-50-pro.jpg"
    ],
    highlights: [
      "6.7-inch pOLED, FHD+, 144Hz, HDR10+",
      "Snapdragon 7 Gen 3",
      "50MP OIS + 13MP Ultra Wide + 10MP 3x Telephoto",
      "4500 mAh, 125W TurboPower Charging",
      "IP68 Water Resistant + Vegan Leather",
      "Clean Android with 3 years of updates"
    ],
    specs: {
      display: "6.7-inch pOLED, 2400x1080, 144Hz, HDR10+",
      processor: "Snapdragon 7 Gen 3",
      ram: "8 GB",
      storage: "256 GB",
      battery: "4500 mAh, 125W TurboPower",
      rearCamera: "50MP OIS + 13MP Ultra Wide + 10MP 3x Telephoto",
      frontCamera: "50MP",
      os: "Android 14",
      network: "5G",
      weight: "186 g"
    },
    offers: [
      "Flat ₹2,000 off with Bank Cards",
      "No Cost EMI from ₹2,500/month",
      "Exchange up to ₹9,000 off"
    ],
    inStock: true,
    isFeatured: false,
    isBestSeller: false,
    isNewLaunch: true,
    isTopDeal: false,
    colors: ["Moonlight Pearl", "Black Beauty", "Luxe Lavender"],
    description: "Motorola Edge 50 Pro combines a 144Hz pOLED display, 125W charging, and a premium vegan leather design for an elevated mid-range experience."
  },
  {
    id: "poco-x6-pro",
    name: "POCO X6 Pro 5G",
    brand: "Xiaomi",
    category: ["mid-range", "5g", "gaming"],
    price: 22999,
    originalPrice: 26999,
    discount: 15,
    rating: 4.3,
    reviewCount: 6543,
    images: [
      "/product-images/poco-x6-pro.jpg",
      "/product-images/poco-x6-pro.jpg",
      "/product-images/poco-x6-pro.jpg",
      "/product-images/poco-x6-pro.jpg"
    ],
    highlights: [
      "6.67-inch Flow AMOLED, 1.5K, 120Hz",
      "MediaTek Dimensity 8300 Ultra",
      "64MP OIS Camera",
      "5000 mAh, 67W Turbo Charging",
      "LiquidCool 2.0 Vapor Chamber",
      "Corning Gorilla Glass Victus 2"
    ],
    specs: {
      display: "6.67-inch Flow AMOLED, 2712x1220, 120Hz",
      processor: "MediaTek Dimensity 8300 Ultra",
      ram: "8 GB",
      storage: "256 GB",
      battery: "5000 mAh, 67W Turbo Charging",
      rearCamera: "64MP OIS + 8MP Ultra Wide + 2MP Macro",
      frontCamera: "16MP",
      os: "Android 14, HyperOS",
      network: "5G",
      weight: "186 g"
    },
    offers: [
      "Flat ₹1,000 off with HDFC Bank",
      "No Cost EMI from ₹1,917/month",
      "Exchange up to ₹7,000 off"
    ],
    inStock: true,
    isFeatured: false,
    isBestSeller: true,
    isNewLaunch: false,
    isTopDeal: true,
    colors: ["Yellow", "Grey", "Black"],
    description: "POCO X6 Pro delivers flagship-level Dimensity 8300 Ultra performance, 120Hz 1.5K AMOLED, and LiquidCool 2.0 for serious mobile gaming."
  },
  {
    id: "samsung-galaxy-m35",
    name: "Samsung Galaxy M35 5G",
    brand: "Samsung",
    category: ["budget", "5g"],
    price: 16999,
    originalPrice: 19999,
    discount: 15,
    rating: 4.2,
    reviewCount: 8765,
    images: [
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&h=600&fit=crop&q=90",
      "https://images.unsplash.com/photo-1706794704770-3c92cc2c0a57?w=600&h=600&fit=crop&q=90",
      "https://images.unsplash.com/photo-1707942119517-cfa54fa18679?w=600&h=600&fit=crop&q=90",
      "https://images.unsplash.com/photo-1668554245893-2430d0077217?w=600&h=600&fit=crop&q=90"
    ],
    highlights: [
      "6.6-inch Super AMOLED, FHD+, 120Hz",
      "Samsung Exynos 1380",
      "50MP OIS Triple Camera",
      "6000 mAh Monster Battery, 25W Charging",
      "Vapour Chamber Cooling",
      "Knox Security"
    ],
    specs: {
      display: "6.6-inch Super AMOLED, 2340x1080, 120Hz",
      processor: "Samsung Exynos 1380",
      ram: "6 GB",
      storage: "128 GB",
      battery: "6000 mAh, 25W Fast Charging",
      rearCamera: "50MP OIS + 8MP Ultra Wide + 2MP Macro",
      frontCamera: "13MP",
      os: "Android 14, One UI 6.1",
      network: "5G",
      weight: "210 g"
    },
    offers: [
      "Flat ₹1,000 off with Bank Offers",
      "No Cost EMI from ₹944/month",
      "Exchange up to ₹5,000 off"
    ],
    inStock: true,
    isFeatured: false,
    isBestSeller: true,
    isNewLaunch: false,
    isTopDeal: true,
    colors: ["Thunder Grey", "Moonlight Blue", "Berry Pink"],
    description: "Samsung Galaxy M35 delivers a massive 6000mAh battery, 120Hz AMOLED display, and reliable 50MP OIS camera for budget-conscious buyers."
  },
  {
    id: "realme-narzo-70-pro",
    name: "Realme Narzo 70 Pro 5G",
    brand: "Realme",
    category: ["budget", "5g"],
    price: 14999,
    originalPrice: 18999,
    discount: 21,
    rating: 4.2,
    reviewCount: 4567,
    images: [
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&h=600&fit=crop&q=90",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&h=600&fit=crop&q=90",
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&h=600&fit=crop&q=90",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=600&fit=crop&q=90"
    ],
    highlights: [
      "6.72-inch FHD+ IPS, 120Hz",
      "MediaTek Dimensity 7050",
      "50MP Sony IMX882 with OIS",
      "5000 mAh, 45W Fast Charging",
      "Rainwater Touch Technology",
      "Side Fingerprint Scanner"
    ],
    specs: {
      display: "6.72-inch FHD+ IPS LCD, 2400x1080, 120Hz",
      processor: "MediaTek Dimensity 7050",
      ram: "8 GB",
      storage: "128 GB",
      battery: "5000 mAh, 45W Fast Charging",
      rearCamera: "50MP Sony IMX882 OIS + 2MP Depth",
      frontCamera: "16MP",
      os: "Android 14, Realme UI 5.0",
      network: "5G",
      weight: "190 g"
    },
    offers: [
      "Flat ₹1,000 off with ICICI Bank",
      "No Cost EMI from ₹1,250/month",
      "Exchange up to ₹5,000 off"
    ],
    inStock: true,
    isFeatured: false,
    isBestSeller: false,
    isNewLaunch: true,
    isTopDeal: true,
    colors: ["Glass Green", "Glass Gold"],
    description: "Realme Narzo 70 Pro delivers a Sony 50MP OIS camera and Dimensity 7050 performance at an unbeatable budget price."
  },
  {
    id: "redmi-13",
    name: "Redmi 13 5G",
    brand: "Xiaomi",
    category: ["budget", "5g"],
    price: 11999,
    originalPrice: 14999,
    discount: 20,
    rating: 4.1,
    reviewCount: 11234,
    images: [
      "/product-images/redmi-13.jpg",
      "/product-images/redmi-13.jpg",
      "/product-images/redmi-13.jpg",
      "/product-images/redmi-13.jpg"
    ],
    highlights: [
      "6.79-inch FHD+ Display, 120Hz",
      "Snapdragon 4 Gen 2",
      "108MP Primary Camera",
      "5030 mAh, 33W Fast Charging",
      "IR Blaster",
      "3.5mm Audio Jack + microSD support"
    ],
    specs: {
      display: "6.79-inch FHD+ LCD, 2460x1080, 120Hz",
      processor: "Snapdragon 4 Gen 2",
      ram: "6 GB",
      storage: "128 GB",
      battery: "5030 mAh, 33W Fast Charging",
      rearCamera: "108MP + 2MP Depth",
      frontCamera: "13MP",
      os: "Android 14, HyperOS",
      network: "5G",
      weight: "199 g"
    },
    offers: [
      "Flat ₹750 off with Bank Offers",
      "No Cost EMI from ₹667/month",
      "Exchange up to ₹3,000 off"
    ],
    inStock: true,
    isFeatured: false,
    isBestSeller: true,
    isNewLaunch: false,
    isTopDeal: true,
    colors: ["Black Diamond", "Hawaiian Blue", "Hawaian Silver"],
    description: "Redmi 13 5G is an entry-level 5G phone with a massive 108MP camera, Snapdragon 4 Gen 2, and all-day battery at an incredible price."
  },
  {
    id: "iphone-15",
    name: "Apple iPhone 15",
    brand: "Apple",
    category: ["flagship", "5g"],
    price: 69900,
    originalPrice: 79900,
    discount: 13,
    rating: 4.6,
    reviewCount: 10234,
    images: [
      "/product-images/iphone-15.jpg",
      "/product-images/iphone-15.jpg",
      "/product-images/iphone-15.jpg",
      "/product-images/iphone-15.jpg"
    ],
    highlights: [
      "6.1-inch Super Retina XDR OLED",
      "A16 Bionic Chip",
      "48MP + 12MP Dual Camera System",
      "Dynamic Island",
      "USB-C Connectivity",
      "Ceramic Shield Front"
    ],
    specs: {
      display: "6.1-inch Super Retina XDR OLED, 2556x1179, 60Hz",
      processor: "A16 Bionic",
      ram: "6 GB",
      storage: "128 GB",
      battery: "3349 mAh, 20W Wired, 15W MagSafe",
      rearCamera: "48MP Main + 12MP Ultra Wide",
      frontCamera: "12MP TrueDepth",
      os: "iOS 17",
      network: "5G",
      weight: "171 g"
    },
    offers: [
      "Flat ₹4,000 off with HDFC Bank",
      "No Cost EMI from ₹3,884/month",
      "Exchange up to ₹12,000 off"
    ],
    inStock: true,
    isFeatured: true,
    isBestSeller: true,
    isNewLaunch: false,
    isTopDeal: true,
    colors: ["Black", "Blue", "Green", "Yellow", "Pink"],
    description: "iPhone 15 features the Dynamic Island, 48MP camera, USB-C, and the powerful A16 Bionic chip in a stunning color-infused glass design."
  },
  {
    id: "oneplus-nord-ce4",
    name: "OnePlus Nord CE4 5G",
    brand: "OnePlus",
    category: ["mid-range", "5g"],
    price: 24999,
    originalPrice: 27999,
    discount: 11,
    rating: 4.3,
    reviewCount: 5432,
    images: [
      "/product-images/oneplus-nord-ce4.jpg",
      "/product-images/oneplus-nord-ce4.jpg",
      "/product-images/oneplus-nord-ce4.jpg",
      "/product-images/oneplus-nord-ce4.jpg"
    ],
    highlights: [
      "6.7-inch AMOLED, FHD+, 120Hz",
      "Snapdragon 7 Gen 3",
      "50MP Sony LYT-600 OIS Camera",
      "5500 mAh, 100W SUPERVOOC",
      "Aqua Touch for wet screen use",
      "8GB + 8GB RAM Boost"
    ],
    specs: {
      display: "6.7-inch AMOLED, 2412x1080, 120Hz",
      processor: "Snapdragon 7 Gen 3",
      ram: "8 GB",
      storage: "128 GB",
      battery: "5500 mAh, 100W SUPERVOOC",
      rearCamera: "50MP Sony LYT-600 OIS + 2MP Depth",
      frontCamera: "16MP",
      os: "Android 14, OxygenOS 14",
      network: "5G",
      weight: "184 g"
    },
    offers: [
      "Flat ₹1,500 off with ICICI Bank",
      "No Cost EMI from ₹2,084/month",
      "Exchange up to ₹8,000 off"
    ],
    inStock: true,
    isFeatured: false,
    isBestSeller: false,
    isNewLaunch: true,
    isTopDeal: false,
    colors: ["Dark Chrome", "Celadon Marble"],
    description: "OnePlus Nord CE4 delivers 100W fast charging, Snapdragon 7 Gen 3, and a capable Sony camera at a competitive mid-range price."
  },
  {
    id: "samsung-galaxy-s23-fe",
    name: "Samsung Galaxy S23 FE 5G",
    brand: "Samsung",
    category: ["mid-range", "5g"],
    price: 29999,
    originalPrice: 49999,
    discount: 40,
    rating: 4.3,
    reviewCount: 3456,
    images: [
      "/product-images/samsung-s23-fe.jpg",
      "/product-images/samsung-s23-fe.jpg",
      "/product-images/samsung-s23-fe.jpg",
      "/product-images/samsung-s23-fe.jpg"
    ],
    highlights: [
      "6.4-inch Dynamic AMOLED 2X, FHD+, 120Hz",
      "Samsung Exynos 2200",
      "50MP OIS Triple Camera",
      "4500 mAh, 25W Charging",
      "IP68 Water Resistant",
      "Galaxy AI Features via update"
    ],
    specs: {
      display: "6.4-inch Dynamic AMOLED 2X, 2340x1080, 120Hz",
      processor: "Samsung Exynos 2200",
      ram: "8 GB",
      storage: "128 GB",
      battery: "4500 mAh, 25W Fast Charging",
      rearCamera: "50MP OIS + 12MP Ultra Wide + 8MP 3x Telephoto",
      frontCamera: "10MP",
      os: "Android 14, One UI 6.1",
      network: "5G",
      weight: "209 g"
    },
    offers: [
      "Flat ₹3,000 off with Bank Offers",
      "No Cost EMI from ₹2,500/month",
      "Exchange up to ₹11,000 off"
    ],
    inStock: true,
    isFeatured: false,
    isBestSeller: true,
    isNewLaunch: false,
    isTopDeal: true,
    colors: ["Cream", "Graphite", "Indigo", "Mint", "Tangerine"],
    description: "Samsung Galaxy S23 FE combines flagship Galaxy S experience with Galaxy AI features at a more accessible price point."
  },
  {
    id: "asus-rog-phone-8",
    name: "ASUS ROG Phone 8 5G",
    brand: "ASUS",
    category: ["flagship", "5g", "gaming"],
    price: 75999,
    originalPrice: 89999,
    discount: 16,
    rating: 4.6,
    reviewCount: 2134,
    images: [
      "/product-images/asus-rog-8.jpg",
      "/product-images/asus-rog-8.jpg",
      "/product-images/asus-rog-8.jpg",
      "/product-images/asus-rog-8.jpg"
    ],
    highlights: [
      "6.78-inch Samsung AMOLED, FHD+, 165Hz",
      "Snapdragon 8 Gen 3 Mobile Platform",
      "50MP Gimbal Camera + 13MP + 32MP Telephoto",
      "5500 mAh, 65W HyperCharge",
      "AeroActive Cooler X Support",
      "AirTrigger Ultrasonic buttons + X Sense"
    ],
    specs: {
      display: "6.78-inch Samsung AMOLED, 2400x1080, 165Hz",
      processor: "Snapdragon 8 Gen 3",
      ram: "16 GB",
      storage: "256 GB",
      battery: "5500 mAh, 65W HyperCharge",
      rearCamera: "50MP Gimbal Stabilizer + 13MP Ultra Wide + 32MP 3x Telephoto",
      frontCamera: "32MP",
      os: "Android 14, ROG UI",
      network: "5G",
      weight: "225 g"
    },
    offers: [
      "Flat ₹5,000 off with HDFC Bank",
      "No Cost EMI from ₹6,334/month",
      "Exchange up to ₹14,000 off"
    ],
    inStock: true,
    isFeatured: true,
    isBestSeller: false,
    isNewLaunch: true,
    isTopDeal: false,
    colors: ["Phantom Black", "Rebel Grey"],
    description: "ASUS ROG Phone 8 is the ultimate gaming smartphone with Snapdragon 8 Gen 3, 165Hz display, AirTrigger controls, and advanced cooling."
  },
  {
    id: "tecno-spark-20-pro",
    name: "Tecno Spark 20 Pro",
    brand: "Tecno",
    category: ["budget"],
    price: 10999,
    originalPrice: 13999,
    discount: 21,
    rating: 4.0,
    reviewCount: 3456,
    images: [
      "/product-images/tecno-spark-20-pro.jpg",
      "/product-images/tecno-spark-20-pro.jpg",
      "/product-images/tecno-spark-20-pro.jpg",
      "/product-images/tecno-spark-20-pro.jpg"
    ],
    highlights: [
      "6.78-inch FHD+ IPS, 120Hz",
      "MediaTek Helio G99",
      "108MP Triple Camera",
      "5000 mAh, 33W Fast Charging",
      "Dual Speakers with DTS Sound",
      "Side-mounted Fingerprint"
    ],
    specs: {
      display: "6.78-inch FHD+ IPS LCD, 2460x1080, 120Hz",
      processor: "MediaTek Helio G99",
      ram: "8 GB",
      storage: "256 GB",
      battery: "5000 mAh, 33W Fast Charging",
      rearCamera: "108MP + 2MP Depth + QVGA",
      frontCamera: "32MP",
      os: "Android 13, HiOS 13",
      network: "4G LTE",
      weight: "195 g"
    },
    offers: [
      "Flat ₹500 off with ICICI Bank",
      "No Cost EMI from ₹612/month",
      "Exchange up to ₹3,000 off"
    ],
    inStock: true,
    isFeatured: false,
    isBestSeller: false,
    isNewLaunch: false,
    isTopDeal: true,
    colors: ["Magic Skin Blue", "Magic Skin Green"],
    description: "Tecno Spark 20 Pro offers a 108MP camera, 120Hz display, and solid performance with Helio G99 at an ultra-affordable price."
  },
  {
    id: "samsung-galaxy-z-flip5",
    name: "Samsung Galaxy Z Flip5 5G",
    brand: "Samsung",
    category: ["flagship", "5g"],
    price: 89999,
    originalPrice: 109999,
    discount: 18,
    rating: 4.4,
    reviewCount: 4567,
    images: [
      "/product-images/samsung-z-flip5.jpg",
      "/product-images/samsung-z-flip5.jpg",
      "/product-images/samsung-z-flip5.jpg",
      "/product-images/samsung-z-flip5.jpg"
    ],
    highlights: [
      "6.7-inch Foldable Dynamic AMOLED, 120Hz",
      "Snapdragon 8 Gen 2 for Galaxy",
      "12MP + 12MP Dual Camera, Flex Mode",
      "3.4-inch Super AMOLED Cover Screen",
      "IPX8 Water Resistant",
      "Compact Foldable Design"
    ],
    specs: {
      display: "6.7-inch Foldable Dynamic AMOLED 2X, 2640x1080, 120Hz",
      processor: "Snapdragon 8 Gen 2 for Galaxy",
      ram: "8 GB",
      storage: "256 GB",
      battery: "3700 mAh, 25W Fast Charging",
      rearCamera: "12MP + 12MP Ultra Wide",
      frontCamera: "10MP",
      os: "Android 14, One UI 6.1",
      network: "5G",
      weight: "187 g"
    },
    offers: [
      "Flat ₹8,000 off with HDFC Bank",
      "No Cost EMI from ₹5,000/month",
      "Exchange up to ₹16,000 off"
    ],
    inStock: true,
    isFeatured: true,
    isBestSeller: false,
    isNewLaunch: false,
    isTopDeal: true,
    colors: ["Cream", "Graphite", "Lavender", "Mint", "Gray"],
    description: "Samsung Galaxy Z Flip5 reimagines the smartphone with a foldable design, large Cover Screen, and flagship performance."
  },
  {
    id: "poco-m6-pro",
    name: "POCO M6 Pro 5G",
    brand: "Xiaomi",
    category: ["budget", "5g"],
    price: 9999,
    originalPrice: 12999,
    discount: 23,
    rating: 4.1,
    reviewCount: 7654,
    images: [
      "/product-images/poco-m6-pro.jpg",
      "/product-images/poco-m6-pro.jpg",
      "/product-images/poco-m6-pro.jpg",
      "/product-images/poco-m6-pro.jpg"
    ],
    highlights: [
      "6.74-inch FHD+ IPS, 120Hz",
      "Snapdragon 4 Gen 2 AE",
      "50MP AI Camera",
      "5000 mAh, 18W Charging",
      "Side Fingerprint + Face Unlock",
      "5G Ready"
    ],
    specs: {
      display: "6.74-inch FHD+ IPS LCD, 2400x1080, 120Hz",
      processor: "Snapdragon 4 Gen 2 AE",
      ram: "4 GB",
      storage: "64 GB",
      battery: "5000 mAh, 18W Fast Charging",
      rearCamera: "50MP + 2MP Depth",
      frontCamera: "8MP",
      os: "Android 14, HyperOS",
      network: "5G",
      weight: "188 g"
    },
    offers: [
      "Flat ₹500 off with Bank Cards",
      "No Cost EMI from ₹556/month",
      "Exchange up to ₹2,500 off"
    ],
    inStock: true,
    isFeatured: false,
    isBestSeller: true,
    isNewLaunch: false,
    isTopDeal: true,
    colors: ["Polaris Green", "Power Black"],
    description: "POCO M6 Pro is the most affordable 5G smartphone with Snapdragon 4 Gen 2, 50MP camera, and reliable 5000mAh battery."
  },
  {
    id: "oneplus-nord-4",
    name: "OnePlus Nord 4 5G",
    brand: "OnePlus",
    category: ["mid-range", "5g"],
    price: 29999,
    originalPrice: 33999,
    discount: 12,
    rating: 4.4,
    reviewCount: 4321,
    images: [
      "/product-images/oneplus-nord-4.jpg",
      "/product-images/oneplus-nord-4.jpg",
      "/product-images/oneplus-nord-4.jpg",
      "/product-images/oneplus-nord-4.jpg"
    ],
    highlights: [
      "6.74-inch AMOLED, FHD+, 120Hz",
      "Snapdragon 7+ Gen 3",
      "50MP Sony LYT-600 OIS + 8MP Ultra Wide",
      "5500 mAh, 100W SUPERVOOC",
      "Full Metal Unibody Design",
      "4 years OS + 6 years security updates"
    ],
    specs: {
      display: "6.74-inch AMOLED, 2772x1240, 120Hz",
      processor: "Snapdragon 7+ Gen 3",
      ram: "8 GB",
      storage: "256 GB",
      battery: "5500 mAh, 100W SUPERVOOC",
      rearCamera: "50MP Sony LYT-600 OIS + 8MP Ultra Wide",
      frontCamera: "16MP",
      os: "Android 14, OxygenOS 14.1",
      network: "5G",
      weight: "199.5 g"
    },
    offers: [
      "Flat ₹2,000 off with ICICI Bank",
      "No Cost EMI from ₹2,500/month",
      "Exchange up to ₹10,000 off"
    ],
    inStock: true,
    isFeatured: true,
    isBestSeller: false,
    isNewLaunch: true,
    isTopDeal: false,
    colors: ["Mercurial Silver", "Obsidian Midnight", "Oasis Green"],
    description: "OnePlus Nord 4 stands out with its unique metal unibody design, Snapdragon 7+ Gen 3, and 100W charging with massive 5500mAh battery."
  },
  ...extraProducts
];

export const mockReviews: Review[] = [
  { id: "r1", productId: "iphone-15-pro-max", userName: "Rahul S.", rating: 5, title: "Best iPhone ever!", comment: "The camera is insane, titanium build feels premium. Battery lasts all day. Worth every penny.", date: "2024-12-15", verified: true },
  { id: "r2", productId: "iphone-15-pro-max", userName: "Priya M.", rating: 4, title: "Great but expensive", comment: "Amazing phone but the price is steep. Camera quality is unmatched though. Action button is handy.", date: "2024-11-20", verified: true },
  { id: "r3", productId: "iphone-15-pro-max", userName: "Amit K.", rating: 5, title: "Upgraded from 13 Pro", comment: "Huge upgrade. Lighter, faster, USB-C finally! The 5x zoom is game changing.", date: "2024-10-05", verified: true },
  { id: "r4", productId: "samsung-galaxy-s24-ultra", userName: "Vikram T.", rating: 5, title: "Samsung's masterpiece", comment: "Galaxy AI features are amazing. S Pen is so useful. Best Android phone hands down.", date: "2024-12-01", verified: true },
  { id: "r5", productId: "samsung-galaxy-s24-ultra", userName: "Neha R.", rating: 4, title: "Almost perfect", comment: "Love the 200MP camera and AI features. Battery could be a bit better for the price.", date: "2024-11-15", verified: true },
  { id: "r6", productId: "samsung-galaxy-s24-ultra", userName: "Karan P.", rating: 5, title: "Best camera phone", comment: "The 200MP sensor captures incredible detail. Night mode is phenomenal.", date: "2024-10-20", verified: false },
  { id: "r7", productId: "oneplus-12", userName: "Deepak L.", rating: 5, title: "Flagship killer returns", comment: "100W charging is a game changer. Full charge in 26 minutes! Display is gorgeous.", date: "2024-12-10", verified: true },
  { id: "r8", productId: "oneplus-12", userName: "Shreya G.", rating: 4, title: "Great value flagship", comment: "Hasselblad cameras are excellent. OxygenOS is smooth. Heating can be an issue sometimes.", date: "2024-11-25", verified: true },
  { id: "r9", productId: "redmi-note-13-pro-plus", userName: "Suresh V.", rating: 5, title: "Best under 30K", comment: "200MP camera is unreal at this price. 120W charging, IP68 — what more do you need?", date: "2024-12-05", verified: true },
  { id: "r10", productId: "redmi-note-13-pro-plus", userName: "Anjali D.", rating: 4, title: "Value for money champion", comment: "Curved display looks premium. Camera is great in daylight. MIUI has some ads though.", date: "2024-11-10", verified: true },
  { id: "r11", productId: "samsung-galaxy-m35", userName: "Ravi M.", rating: 4, title: "Battery beast", comment: "6000mAh battery lasts 2 days easily. AMOLED display is vibrant. Good budget phone.", date: "2024-12-12", verified: true },
  { id: "r12", productId: "redmi-13", userName: "Pooja S.", rating: 4, title: "Best budget 5G phone", comment: "108MP camera takes great photos. 5G works well. Build quality is decent for the price.", date: "2024-11-28", verified: true },
];
