"use client";

import { usePathname } from "next/navigation";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin && <TopBar />}
      {!isAdmin && <Navbar />}
      <main className={!isAdmin ? "min-h-screen" : ""}>{children}</main>
      {!isAdmin && <Footer />}
    </>
  );
}
