import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-sepia text-parchment/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-parchment/20 rounded-full flex items-center justify-center">
                <Leaf size={14} className="text-parchment" />
              </div>
              <span className="font-display text-xl text-parchment font-semibold">Vaidya &amp; Co.</span>
            </div>
            <p className="font-body text-sm text-parchment/60 leading-relaxed max-w-xs">
              Ancient wisdom, rigorously sourced. Ayurvedic formulations for the modern practitioner.
            </p>
            <p className="font-body text-xs text-parchment/40 mt-4">
              Est. 2024 · Crafted with respect for tradition
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-sm font-semibold text-parchment uppercase tracking-wider mb-4">
              Navigate
            </h4>
            <ul className="space-y-2">
              {[
                { to: '/shop', label: 'Shop All' },
                { to: '/shop?cat=Digestion', label: 'Digestion' },
                { to: '/shop?cat=Immunity', label: 'Immunity' },
                { to: '/shop?cat=Skin', label: 'Skin' },
                { to: '/shop?cat=Ritual Tools', label: 'Ritual Tools' },
                { to: '/quiz', label: 'Dosha Quiz' },
                { to: '/source-ethics', label: 'Source & Ethics' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="font-body text-sm text-parchment/60 hover:text-parchment transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-sm font-semibold text-parchment uppercase tracking-wider mb-4">
              The Vaidya Letter
            </h4>
            <p className="font-body text-sm text-parchment/60 mb-4 leading-relaxed">
              Seasonal formulations, herb notes, and practitioner wisdom — once a fortnight.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-parchment/10 border border-parchment/20 rounded-lg px-3 py-2 text-sm font-body text-parchment placeholder:text-parchment/30 focus:outline-none focus:border-amber/60 transition-colors"
              />
              <button className="bg-amber text-sepia-dark px-4 py-2 rounded-lg text-sm font-body font-semibold hover:bg-amber-dark transition-colors active:scale-95">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="etched-divider mt-10 opacity-30" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs font-body text-parchment/40 pt-4">
          <p>© 2024 Vaidya &amp; Co. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-parchment/60 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-parchment/60 cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-parchment/60 cursor-pointer transition-colors">Refund Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
