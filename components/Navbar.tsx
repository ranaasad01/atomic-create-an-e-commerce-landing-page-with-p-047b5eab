"use client";

import { ShoppingCart, Menu, X, Sparkles } from 'lucide-react';
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { totalItems, dispatch } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = ["Shop", "Collections", "Sale", "About"];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:bg-indigo-700 transition-colors">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-neutral-900 tracking-tight">
              Lumière
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-medium text-neutral-600 hover:text-indigo-600 transition-colors relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-200" />
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => dispatch({ type: "TOGGLE_CART" })}
              className="relative p-2 rounded-full hover:bg-indigo-50 transition-colors group"
              aria-label="Open shopping cart"
            >
              <ShoppingCart className="w-5 h-5 text-neutral-700 group-hover:text-indigo-600 transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-indigo-600 text-white text-xs font-bold rounded-full flex items-center justify-center animate-in zoom-in-50">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-neutral-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5 text-neutral-700" />
              ) : (
                <Menu className="w-5 h-5 text-neutral-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden border-t border-neutral-100 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="block px-3 py-2 text-sm font-medium text-neutral-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
