"use client";

import { useState } from "react";
import { Mail, Check, ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 py-20">
      {/* Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-2xl mb-6">
          <Mail className="w-7 h-7 text-white" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Get Exclusive Deals
        </h2>
        <p className="text-indigo-200 text-lg mb-8 leading-relaxed">
          Subscribe to our newsletter and be the first to know about new arrivals, flash sales, and members-only discounts.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 bg-emerald-400/20 rounded-full flex items-center justify-center">
              <Check className="w-8 h-8 text-emerald-300" />
            </div>
            <p className="text-white font-semibold text-lg">
              You&apos;re on the list!
            </p>
            <p className="text-indigo-200 text-sm">
              Check your inbox for a welcome discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="Enter your email address"
                  className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                  aria-label="Email address"
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-amber-950 font-bold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-amber-400/30 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            {error && (
              <p className="mt-2 text-sm text-red-300 text-left sm:text-center">{error}</p>
            )}
            <p className="mt-4 text-xs text-indigo-300">
              No spam, ever. Unsubscribe at any time.
            </p>
          </form>
        )}

        {/* Perks */}
        <div className="flex flex-wrap justify-center gap-6 mt-10 pt-8 border-t border-white/10">
          {[
            "10% off your first order",
            "Early access to sales",
            "Exclusive member deals",
          ].map((perk) => (
            <div key={perk} className="flex items-center gap-2 text-sm text-indigo-200">
              <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
              {perk}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
