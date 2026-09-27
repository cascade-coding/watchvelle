import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const rand = () => Math.random().toString(36).slice(2, 8);

// Cart Helpers
export const parsePrice = (priceStr = "") =>
  parseFloat(priceStr.replace(/[^0-9.]/g, "")) || 0;

export const cartTotal = (items) =>
  items.reduce((sum, item) => sum + parsePrice(item.price) * item.quantity, 0);

export const formatPrice = (amount) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
