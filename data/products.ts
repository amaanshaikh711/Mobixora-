import productsJson from "./products.json";

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

export const products: Product[] = productsJson as Product[];

export const mockReviews: Review[] = [
  {
    id: "r1",
    productId: "iphone-15-pro-max",
    userName: "Rahul Sharma",
    rating: 5,
    title: "Absolute Beast!",
    comment: "The titanium design feels incredibly premium. Coming from an iPhone 12, the performance jump and the 120Hz display are game-changers. Battery life easily lasts more than a day.",
    date: "Feb 15, 2026",
    verified: true
  },
  {
    id: "r2",
    productId: "iphone-15-pro-max",
    userName: "Priya Patel",
    rating: 4,
    title: "Best camera on a phone",
    comment: "The 5x telephoto lens is amazing for concerts. The only downside is the price, but it's worth it for the quality you get. Charging is faster with USB-C finally!",
    date: "Feb 10, 2026",
    verified: true
  },
  {
    id: "r3",
    productId: "samsung-galaxy-s24-ultra",
    userName: "Amit Verma",
    rating: 5,
    title: "The AI features are actually useful",
    comment: "Circle to Search and Live Translate have changed how I use my phone. The anti-reflective screen is the best I've seen. S-Pen is as useful as ever.",
    date: "Feb 20, 2026",
    verified: true
  },
  {
    id: "r4",
    productId: "oneplus-12",
    userName: "Siddharth Malhotra",
    rating: 5,
    title: "Stupidly fast charging",
    comment: "100W charging is insane. 0 to 100 in about 25 mins. The display is gorgeous and OxygenOS feels very fluid. Hasselblad color science is great.",
    date: "Feb 18, 2026",
    verified: true
  },
  {
    id: "r5",
    productId: "google-pixel-8-pro",
    userName: "Ananya Iyer",
    rating: 4,
    title: "Pure Android bliss",
    comment: "The software experience is the cleanest. Magic Editor is like having Photoshop in your pocket. It does get a bit warm during heavy gaming though.",
    date: "Feb 12, 2026",
    verified: true
  }
];
