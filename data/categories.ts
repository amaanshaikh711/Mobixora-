export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  image: string;
  gradient: string;
}

export const categories: Category[] = [
  {
    id: "budget",
    name: "Budget Phones",
    slug: "budget",
    description: "Best phones under ₹15,000",
    icon: "💰",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=300&fit=crop",
    gradient: "from-green-500 to-emerald-600"
  },
  {
    id: "mid-range",
    name: "Mid-Range Phones",
    slug: "mid-range",
    description: "Premium features, smart pricing",
    icon: "⚡",
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=400&h=300&fit=crop",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    id: "flagship",
    name: "Flagship Phones",
    slug: "flagship",
    description: "The best of the best",
    icon: "👑",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",
    gradient: "from-purple-500 to-violet-600"
  },
  {
    id: "5g",
    name: "5G Phones",
    slug: "5g",
    description: "Future-ready connectivity",
    icon: "📶",
    image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=400&h=300&fit=crop",
    gradient: "from-orange-500 to-red-500"
  },
  {
    id: "gaming",
    name: "Gaming Phones",
    slug: "gaming",
    description: "Built for mobile gamers",
    icon: "🎮",
    image: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=400&h=300&fit=crop",
    gradient: "from-red-500 to-pink-600"
  }
];
