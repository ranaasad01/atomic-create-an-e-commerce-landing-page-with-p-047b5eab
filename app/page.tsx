export const dynamic = "force-dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductGrid />

      {/* Trust Badges */}
      <section className="bg-white py-12 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: "🚚",
                title: "Free Shipping",
                desc: "On all orders over $50",
              },
              {
                icon: "🔄",
                title: "Easy Returns",
                desc: "30-day hassle-free returns",
              },
              {
                icon: "🔒",
                title: "Secure Payment",
                desc: "256-bit SSL encryption",
              },
              {
                icon: "💬",
                title: "24/7 Support",
                desc: "Dedicated customer care",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left"
              >
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="font-bold text-neutral-900 text-sm">{item.title}</p>
                  <p className="text-xs text-neutral-500 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Banner */}
      <section className="bg-amber-50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-amber-100">
            <div className="max-w-lg">
              <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                Limited Time Offer
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mb-3">
                Summer Clearance Sale
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Up to 40% off on selected electronics, clothing, and home goods. Shop before stocks run out — deals end Sunday midnight.
              </p>
              <a
                href="#products"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-7 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-indigo-200 hover:-translate-y-0.5"
              >
                Shop the Sale
              </a>
            </div>
            <div className="flex-shrink-0 grid grid-cols-2 gap-3">
              {[
                { label: "Electronics", off: "35% OFF", color: "bg-indigo-100 text-indigo-700" },
                { label: "Clothing", off: "40% OFF", color: "bg-pink-100 text-pink-700" },
                { label: "Home", off: "25% OFF", color: "bg-emerald-100 text-emerald-700" },
                { label: "Beauty", off: "30% OFF", color: "bg-amber-100 text-amber-700" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={"rounded-2xl px-5 py-4 text-center " + item.color}
                >
                  <p className="text-lg font-extrabold">{item.off}</p>
                  <p className="text-xs font-semibold mt-0.5">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  );
}
