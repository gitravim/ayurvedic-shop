import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import TrustStrip from '../components/TrustStrip';
import { products } from '../data/products';

const bestSellers = products.slice(0, 4);

// Minimal etched botanical SVG as background accent
const BotanicalSVG = () => (
  <svg
    className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 w-64 h-64 hidden lg:block"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M100 20 C80 50, 40 60, 30 100 C50 80, 80 85, 100 120 C120 85, 150 80, 170 100 C160 60, 120 50, 100 20Z" fill="#704214" />
    <path d="M100 80 Q90 110 70 130" stroke="#704214" strokeWidth="2" strokeLinecap="round" />
    <path d="M100 80 Q110 110 130 130" stroke="#704214" strokeWidth="2" strokeLinecap="round" />
    <path d="M100 80 Q100 115 100 145" stroke="#704214" strokeWidth="2" strokeLinecap="round" />
    <circle cx="100" cy="175" r="4" fill="#704214" />
    <circle cx="70" cy="130" r="3" fill="#704214" />
    <circle cx="130" cy="130" r="3" fill="#704214" />
  </svg>
);

export default function HomePage() {
  return (
    <main>
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center woodcut-bg">
        {/* Layered parchment gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-parchment via-parchment to-amber/10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-sepia/5" />
        <BotanicalSVG />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-px bg-sepia/40" />
              <span className="text-xs font-body uppercase tracking-[0.2em] text-sepia/60">
                Ayurvedic Apothecary · Est. 2024
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-sepia leading-[1.05] font-semibold">
              Ancient Remedies,<br />
              <em className="italic font-normal text-sepia/70">Honestly Made.</em>
            </h1>

            {/* Sub */}
            <p className="font-body text-lg text-sepia/70 mt-6 leading-relaxed max-w-lg">
              Classical Ayurvedic formulations drawn from 5,000 years of botanical tradition.
              Wildcrafted, third-party tested, and shipped to your door.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mt-9">
              <Link
                to="/quiz"
                className="btn-amber flex items-center justify-center gap-2 text-base py-4 px-8"
              >
                <Leaf size={18} />
                Discover Your Dosha
              </Link>
              <Link
                to="/shop"
                className="flex items-center justify-center gap-2 border border-sepia/30 text-sepia font-body font-medium
                           px-8 py-4 rounded-lg hover:bg-sepia/5 transition-colors text-base"
              >
                Browse the Apothecary
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Social proof micro-strip */}
            <div className="flex items-center gap-3 mt-8">
              <div className="flex -space-x-1.5">
                {['P', 'A', 'M', 'R'].map((l, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full bg-sepia/20 border-2 border-parchment flex items-center justify-center text-xs font-body font-semibold text-sepia"
                  >
                    {l}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#FFBF00" color="#FFBF00" />)}
              </div>
              <span className="font-body text-sm text-sepia/60">
                4.9 · over 2,000 orders
              </span>
            </div>
          </div>
        </div>

        {/* Bottom decorative border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sepia/20 to-transparent" />
      </section>

      {/* ─── Best Sellers ─────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-body uppercase tracking-widest text-sepia/50 mb-1">
              Most Loved
            </p>
            <h2 className="section-heading">Best Sellers</h2>
          </div>
          <Link
            to="/shop"
            className="flex items-center gap-1 text-sm font-body font-medium text-sepia/70 hover:text-sepia transition-colors"
          >
            View all products <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {bestSellers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* ─── Ritual Bundle Banner ─────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="frame-card p-8 md:p-10 bg-gradient-to-br from-sepia/5 to-amber/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="inline-block text-xs font-body uppercase tracking-widest text-amber bg-amber/10 px-3 py-1 rounded-full mb-3">
              Limited Offer
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-sepia font-semibold">
              Build Your Ritual Bundle
            </h2>
            <p className="font-body text-sepia/70 mt-2 max-w-md">
              Add any 3 products to your cart and receive{' '}
              <strong className="text-sepia">10% off your entire order</strong> — automatically.
            </p>
          </div>
          <Link
            to="/shop"
            className="btn-amber shrink-0 flex items-center gap-2 text-base py-4 px-8 whitespace-nowrap"
          >
            Build Your Bundle
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ─── Dosha CTA ────────────────────────────────────── */}
      <section className="bg-sepia/5 border-y border-sepia/15 py-16 woodcut-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-sepia/10 mb-5">
            <Leaf size={26} className="text-sepia" />
          </div>
          <h2 className="section-heading mb-4">Not Sure Where to Start?</h2>
          <p className="font-body text-sepia/70 text-lg leading-relaxed">
            Our 5-question Dosha Quiz analyses your constitution and recommends the products your
            body actually needs — in under 2 minutes.
          </p>
          <Link to="/quiz" className="btn-primary inline-flex items-center gap-2 mt-8 text-base py-4 px-10">
            <Leaf size={18} />
            Take the Free Dosha Quiz
          </Link>
        </div>
      </section>

      {/* ─── Trust Strip ──────────────────────────────────── */}
      <TrustStrip />

      {/* ─── Testimonials ─────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="text-center mb-10">
          <p className="text-xs font-body uppercase tracking-widest text-sepia/50 mb-1">
            Customer Stories
          </p>
          <h2 className="section-heading">What Our Community Says</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              name: 'Priya S.',
              location: 'London',
              text: 'Vaidya & Co. is the only supplement brand I trust. The provenance notes give me total confidence in what I\'m putting in my body.',
              stars: 5,
            },
            {
              name: 'Marcus W.',
              location: 'New York',
              text: 'I was a sceptic. Three months of Ashwagandha and Triphala later, I sleep better, stress less, and feel more myself than I have in years.',
              stars: 5,
            },
            {
              name: 'Sofia M.',
              location: 'Melbourne',
              text: 'The Kumkumadi oil transformed my skin in three weeks. The ritual of using it every night has become something I genuinely look forward to.',
              stars: 5,
            },
          ].map(({ name, location, text, stars }) => (
            <div key={name} className="frame-card p-6 flex flex-col gap-4">
              <div className="flex">
                {[...Array(stars)].map((_, i) => <Star key={i} size={14} fill="#FFBF00" color="#FFBF00" />)}
              </div>
              <p className="font-body text-sm text-sepia/80 leading-relaxed italic">"{text}"</p>
              <div className="mt-auto pt-3 border-t border-sepia/10">
                <p className="font-body text-sm font-semibold text-sepia">{name}</p>
                <p className="font-body text-xs text-sepia/50">{location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
