import Link from "next/link";

const footerLinks = {
  "Shop by Category": [
    { name: "Budget Phones", href: "/products?category=budget" },
    { name: "Mid-Range Phones", href: "/products?category=mid-range" },
    { name: "Flagship Phones", href: "/products?category=flagship" },
    { name: "5G Phones", href: "/products?category=5g" },
    { name: "Gaming Phones", href: "/products?category=gaming" },
  ],
  "Popular Brands": [
    { name: "Apple iPhones", href: "/products?brand=Apple" },
    { name: "Samsung Galaxy", href: "/products?brand=Samsung" },
    { name: "OnePlus", href: "/products?brand=OnePlus" },
    { name: "Xiaomi / Redmi", href: "/products?brand=Xiaomi" },
    { name: "Google Pixel", href: "/products?brand=Google" },
  ],
  "Help & Support": [
    { name: "Contact Us", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Shipping Policy", href: "#" },
    { name: "Return Policy", href: "#" },
    { name: "Track Order", href: "#" },
  ],
  "About Us": [
    { name: "About MobileStore", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Sitemap", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-white font-semibold text-lg">Stay Updated</h3>
              <p className="text-sm text-gray-400">Get the latest deals and offers in your inbox</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 md:w-64"
              />
              <button className="px-6 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">
            © 2024 MobileStore. All rights reserved. Built for demonstration purposes.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>UPI</span>
            <span>Net Banking</span>
            <span>EMI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
