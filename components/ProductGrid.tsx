"use client";

import { useState, useMemo } from "react";
import { Category } from "@/lib/types";
import { PRODUCTS, CATEGORIES } from "@/lib/products";
import CategoryFilter from "./CategoryFilter";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const counts = useMemo(() => {
    const result: Record<string, number> = { All: PRODUCTS.length };
    CATEGORIES.forEach((cat) => {
      if (cat !== "All") {
        result[cat] = PRODUCTS.filter((p) => p.category === cat).length;
      }
    });
    return result;
  }, []);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="products" className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-1">
              Our Collection
            </p>
            <h2 className="text-3xl font-extrabold text-neutral-900">
              Shop by Category
            </h2>
          </div>
          <p className="text-sm text-neutral-500">
            Showing {filtered.length} of {PRODUCTS.length} products
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <CategoryFilter
            active={activeCategory}
            onChange={setActiveCategory}
            counts={counts}
          />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-200 hover:shadow-lg hover:shadow-indigo-200">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
}
