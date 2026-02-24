"use client";

import { useState, useEffect } from "react";

const announcements = [
  "🎉 Grand Mobile Sale — Up to 40% off on all smartphones!",
  "🏦 Flat ₹5,000 off with HDFC Bank Credit Cards",
  "📦 No Cost EMI starting ₹556/month on all phones",
  "🚚 Free Delivery on all orders above ₹999",
  "🔄 Exchange your old phone & get up to ₹20,000 off",
];

export default function TopBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % announcements.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ background: "linear-gradient(135deg, #111111 0%, #3a3a3a 50%, #1a1a1a 100%)" }} className="text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center">
        <p className="font-medium tracking-wide text-center transition-all duration-500">
          {announcements[index]}
        </p>
      </div>
    </div>
  );
}
