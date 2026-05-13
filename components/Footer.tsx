import { Sparkles, Code2 as Github, MessageCircle as Twitter, Briefcase as Linkedin, Globe as Facebook, Mail } from 'lucide-react';

const footerLinks = {
  Shop: ["New Arrivals", "Best Sellers", "Sale", "Electronics", "Clothing", "Home & Living"],
  Company: ["About Us", "Careers", "Press", "Blog", "Sustainability"],
  Support: ["Help Center", "Track Order", "Returns", "Shipping Info", "Contact Us"],
};

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center group-hover:bg-indigo-500 transition-colors">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Lumière</span>
            </a>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-xs mb-6">
              Curated products for modern living. Quality you can trust, prices you&apos;ll love, delivered to your door.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Twitter, label: "Twitter" },
                { icon: Facebook, label: "Facebook" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Github, label: "GitHub" },
                { icon: Mail, label: "Email" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 bg-neutral-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-neutral-400 hover:text-white transition-colors duration-150"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} Lumière. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
