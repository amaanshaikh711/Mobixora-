"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

const mockOrders = [
  {
    id: "ORD-2024-001",
    date: "Dec 15, 2024",
    status: "Delivered",
    statusColor: "text-green-600 bg-green-50",
    items: [
      { name: "Apple iPhone 15 Pro Max", price: "₹1,56,900", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=100&h=100&fit=crop" },
    ],
    total: "₹1,56,900",
  },
  {
    id: "ORD-2024-002",
    date: "Nov 20, 2024",
    status: "In Transit",
    statusColor: "text-blue-600 bg-blue-50",
    items: [
      { name: "Samsung Galaxy A55 5G", price: "₹27,999", image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=100&h=100&fit=crop" },
      { name: "Nothing Phone (2a) 5G", price: "₹23,999", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=100&h=100&fit=crop" },
    ],
    total: "₹51,998",
  },
];

export default function OrdersPage() {
  const searchParams = useSearchParams();
  const showSuccess = searchParams.get("success") === "true";

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {showSuccess && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
          <span className="text-3xl">✅</span>
          <div>
            <h3 className="font-bold text-green-800">Order Placed Successfully!</h3>
            <p className="text-sm text-green-700">Your order has been confirmed and will be delivered soon.</p>
          </div>
        </div>
      )}

      <h1 className="text-2xl font-bold text-gray-900 mb-6">My Orders</h1>

      <div className="space-y-4">
        {mockOrders.map((order) => (
          <div key={order.id} className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-bold text-gray-900">{order.id}</p>
                <p className="text-xs text-gray-500">Placed on {order.date}</p>
              </div>
              <span className={`px-3 py-1 text-xs font-bold rounded-full ${order.statusColor}`}>
                {order.status}
              </span>
            </div>

            <div className="space-y-3">
              {order.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm font-bold text-gray-700">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
              <p className="text-sm font-bold text-gray-900">Total: {order.total}</p>
              <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/products"
          className="inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
