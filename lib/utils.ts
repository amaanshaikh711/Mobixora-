export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatNumber(num: number): string {
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  }
  return num.toString();
}

export function getDiscountedPrice(originalPrice: number, discount: number): number {
  return Math.round(originalPrice * (1 - discount / 100));
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function getRatingColor(rating: number): string {
  if (rating >= 4.5) return "bg-green-600";
  if (rating >= 4.0) return "bg-green-500";
  if (rating >= 3.5) return "bg-yellow-500";
  if (rating >= 3.0) return "bg-orange-500";
  return "bg-red-500";
}

export function getEMIPrice(price: number, months: number = 12): number {
  return Math.round(price / months);
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}
