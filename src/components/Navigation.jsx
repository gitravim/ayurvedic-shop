import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Leaf, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navigation() {
  const { totalItems, setIsOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop' },
    { to: '/quiz', label: 'Dosha Quiz' },
    { to: '/source-ethics', label: 'Source & Ethics' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-parchment/95 backdrop-blur-sm border-b border-sepia/15 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-sepia rounded-full flex items-center justify-center group-hover:bg-sepia-dark transition-colors">
            <Leaf size={16} className="text-parchment" />
          </div>
          <span className="font-display text-xl text-sepia font-semibold tracking-tight">
            Vaidya <span className="text-sepia/50 font-normal">&amp; Co.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`font-body text-sm font-medium transition-colors ${
                location.pathname === to
                  ? 'text-sepia border-b-2 border-amber pb-0.5'
                  : 'text-sepia/70 hover:text-sepia'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="p-2 text-sepia/70 hover:text-sepia transition-colors hidden sm:block">
            <Search size={20} />
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="relative p-2 text-sepia/70 hover:text-sepia transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-amber text-sepia-dark text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center leading-none">
                {totalItems > 9 ? '9+' : totalItems}
              </span>
            )}
          </button>
          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-sepia/70 hover:text-sepia"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-sepia/15 bg-parchment px-4 py-4 flex flex-col gap-4">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMobileOpen(false)}
              className={`font-body text-base font-medium py-1 ${
                location.pathname === to ? 'text-sepia' : 'text-sepia/70'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
