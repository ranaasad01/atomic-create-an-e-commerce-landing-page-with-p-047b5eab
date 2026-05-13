"use client";

import { Category } from "@/lib/types";
import { CATEGORIES } from "@/lib/products";

interface CategoryFilterProps {
  active: Category;
  onChange: (cat: Category) => void;
  counts: Record<string, number>;
}

function getButtonClass(isActive: boolean): string {
  const base = "flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200";
  if (isActive) {
    return base + " bg-indigo-600 text-white shadow-md shadow-indigo-200";
  }
  return base + " bg-white text-neutral-600 border border-neutral-200 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50";
}

function getBadgeClass(isActive: boolean): string {
  const base = "text-xs px-1.5 py-0.5 rounded-full font-semibold";
  if (isActive) {
    return base + " bg-white/20 text-white";
  }
  return base + " bg-neutral-100 text-neutral-500";
}

export default function CategoryFilter({ active, onChange, counts }: CategoryFilterProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2">
      {CATEGORIES.map((cat) => {
        const isActive = cat === active;
        const count = counts[cat] ?? 0;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={getButtonClass(isActive)}
          >
            {cat}
            <span className={getBadgeClass(isActive)}>
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
