import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { CartProvider } from "@/context/CartContext";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mobixora Admin — India's #1 Mobile Phone Shopping Destination",
  description:
    "Shop the latest smartphones at the best prices on Mobixora. iPhones, Samsung Galaxy, OnePlus, Xiaomi & more with No Cost EMI, Bank Offers, and Free Delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}>
          <CartProvider>
            <LayoutWrapper>{children}</LayoutWrapper>
          </CartProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
