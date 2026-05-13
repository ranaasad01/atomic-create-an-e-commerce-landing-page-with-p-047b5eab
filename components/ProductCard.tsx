"use client";

import { Star, ShoppingCart, Check } from 'lucide-react';
import { useState } from "react";
import { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className="w-3.5 h-3.5"
          fill={star <= Math.round(rating) ? "#f59e0b" : "none"}
          stroke={star <= Math.round(rating) ? "#f59e0b" : "#d1d5db"}
        />
      ))}
    </div>
  );
}

function BadgeLabel({ badge }: { badge: Product["badge"] }) {
  if (!badge) return null;
  const styles: Record<string, string> = {
    sale: "bg-red-500 text-white",
    featured: "bg-indigo-600 text-white",
    new: "bg-emerald-500 text-white",
  };
  const labels: Record<string, string> = {
    sale: "Sale",
    featured: "Featured",
    new: "New",
  };
  return (
    <span className={"absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full z-10 " + styles[badge]}>
      {labels[badge]}
    </span>
  );
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Image */}
      <div className="relative overflow-hidden bg-neutral-50 aspect-square">
        <BadgeLabel badge={product.badge} />
        {discount && (
          <span className="absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded-full bg-amber-400 text-amber-950 z-10">
            -{discount}%
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs font-semibold text-indigo-500 uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <h3 className="text-sm font-semibold text-neutral-900 leading-snug mb-2 line-clamp-2 group-hover:text-indigo-700 transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <StarRating rating={product.rating} />
          <span className="text-xs text-neutral-500">
            {product.rating} ({product.reviewCount.toLocaleString()})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-bold text-neutral-900">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-neutral-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <button
          onClick={handleAdd}
          className={
            "w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 " +
            (added
              ? "bg-emerald-500 text-white"
              : "bg-indigo-600 hover:bg-indigo-700 text-white hover:shadow-md hover:shadow-indigo-200 active:scale-95")
          }
        >
          {added ? (
            <>
              <Check className="w-4 h-4" />
              Added!
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}
