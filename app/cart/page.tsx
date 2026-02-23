"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-6xl mb-4">🛒</p>
        <h1 className="text-2xl font-bold text-gray-900">Your cart is empty</h1>
        <p className="text-gray-500 mt-2">Add some smartphones to get started!</p>
        <Link
          href="/products"
          className="mt-6 inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
        >
          Shop Now
        </Link>
      </div>
    );
  }

  const subtotal = getCartTotal();
  const delivery = subtotal > 999 ? 0 : 99;
  const discount = Math.round(
    items.reduce((sum, item) => sum + (item.product.originalPrice - item.product.price) * item.quantity, 0)
  );
  const total = subtotal + delivery;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Shopping Cart ({items.length} items)</h1>
        <button
          onClick={clearCart}
          className="text-sm font-semibold text-red-600 hover:text-red-700 transition"
        >
          Clear Cart
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.product.id}
              className="flex gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md transition"
            >
              <Link href={`/products/${item.product.id}`} className="shrink-0">
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
              </Link>

              <div className="flex-1 min-w-0">
                <Link href={`/products/${item.product.id}`}>
                  <h3 className="font-bold text-gray-900 text-sm hover:text-blue-600 transition line-clamp-2">
                    {item.product.name}
                  </h3>
                </Link>
                <p className="text-xs text-gray-500 mt-1">
                  Color: {item.selectedColor} · {item.product.specs.ram} RAM · {item.product.specs.storage}
                </p>

                <div className="flex items-center gap-2 mt-2">
                  <span className="text-lg font-extrabold text-gray-900">
                    {formatPrice(item.product.price)}
                  </span>
                  {item.product.originalPrice > item.product.price && (
                    <>
                      <span className="text-xs text-gray-400 line-through">
                        {formatPrice(item.product.originalPrice)}
                      </span>
                      <span className="text-xs font-semibold text-green-600">
                        {item.product.discount}% off
                      </span>
                    </>
                  )}
                </div>

                <div className="flex items-center gap-3 mt-3">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-l-lg transition"
                    >
                      −
                    </button>
                    <span className="px-3 py-1 text-sm font-bold border-x border-gray-300">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-r-lg transition"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-sm font-semibold text-red-600 hover:text-red-700 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 rounded-xl p-6 sticky top-24">
            <h2 className="font-bold text-gray-900 text-lg mb-4">Order Summary</h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal ({items.length} items)</span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Discount</span>
                <span className="font-medium text-green-600">− {formatPrice(discount)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery</span>
                <span className="font-medium">
                  {delivery === 0 ? (
                    <span className="text-green-600">FREE</span>
                  ) : (
                    formatPrice(delivery)
                  )}
                </span>
              </div>
              <div className="border-t border-gray-200 pt-3 flex justify-between">
                <span className="font-bold text-gray-900">Total</span>
                <span className="font-extrabold text-lg text-gray-900">{formatPrice(total)}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="block w-full mt-6 py-3.5 bg-orange-500 text-white font-bold text-center rounded-lg hover:bg-orange-600 transition shadow-lg"
            >
              Proceed to Checkout
            </Link>

            <p className="text-xs text-gray-500 text-center mt-3">
              🔒 Secure checkout with SSL encryption
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
