"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    // Simple logout - delete the cookie and redirect
    document.cookie = "admin_session=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    router.push("/admin/login");
  };

  const navItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: "📊" },
    { name: "Products", href: "/admin/products", icon: "📱" },
    { name: "Categories", href: "/admin/categories", icon: "🏷️" },
  ];

  return (
    <div className="flex h-screen bg-neutral-50 text-neutral-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-neutral-200 flex flex-col">
        <div className="p-6 border-b border-neutral-100 flex items-center space-x-3">
          <Image
            src="/mobixora-logo.png"
            alt="Mobixora"
            width={120}
            height={40}
            className="h-8 w-auto object-contain"
          />
          <span className="text-[10px] font-bold bg-neutral-900 text-white px-2 py-0.5 rounded uppercase tracking-wider">Admin</span>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                pathname === item.href
                  ? "bg-neutral-900 text-white shadow-lg"
                  : "text-neutral-600 hover:bg-neutral-100"
              }`}
            >
              <span>{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-neutral-100">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-all w-full text-left"
          >
            <span>🚪</span>
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="h-16 bg-white border-b border-neutral-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <h2 className="font-semibold text-lg">
            {navItems.find((i) => i.href === pathname)?.name || "Admin Panel"}
          </h2>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-semibold">Mobixora Admin</p>
              <p className="text-[10px] text-neutral-400">admin@mobixora.com</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-white font-bold">
              A
            </div>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
