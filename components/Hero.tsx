import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-800 text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/30 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            Summer Sale &mdash; Up to 40% Off
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Discover Products{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
              You&apos;ll Love
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-indigo-200 leading-relaxed mb-10 max-w-xl">
            Curated collections of premium electronics, fashion, home goods, and more &mdash; all at prices that make sense. Free shipping on orders over $50.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-amber-950 font-bold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              Shop Now
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              View Collections
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-white/10">
            {[
              { value: "50K+", label: "Happy Customers" },
              { value: "1,200+", label: "Products" },
              { value: "4.9 Stars", label: "Average Rating" },
              { value: "Free", label: "Returns & Exchanges" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-indigo-300 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 40L1440 40L1440 20C1200 0 960 40 720 20C480 0 240 40 0 20L0 40Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
