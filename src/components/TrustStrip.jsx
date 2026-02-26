import { Link } from 'react-router-dom';
import { Leaf, Shield, MapPin, Recycle, ArrowRight } from 'lucide-react';

const pillars = [
  {
    icon: Leaf,
    title: 'Wildcrafted & Organic',
    desc: 'Herbs sourced from certified organic farms across Kerala, Uttarakhand, and Himachal Pradesh.',
  },
  {
    icon: Shield,
    title: 'Third-Party Tested',
    desc: 'Every batch is independently verified for potency, purity, and freedom from heavy metals.',
  },
  {
    icon: MapPin,
    title: 'Traceable Origins',
    desc: 'Each product page carries a provenance note — we name our farmers and our farms.',
  },
  {
    icon: Recycle,
    title: 'Low-Impact Packaging',
    desc: 'Glass bottles, seed-paper inserts, and plastic-free outer packaging on every order.',
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-sepia/5 border-y border-sepia/15 py-12 woodcut-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <p className="text-xs font-body uppercase tracking-widest text-sepia/50 mb-2">
            Our Promise
          </p>
          <h2 className="section-heading">Source &amp; Ethics</h2>
          <p className="font-body text-sepia/70 mt-2 max-w-xl mx-auto">
            Every herb is <strong className="text-sepia">certified organic</strong> and{' '}
            <strong className="text-sepia">verified free of heavy metal contamination</strong> by
            an independent ISO-accredited lab — every batch, no exceptions.
          </p>
          <Link
            to="/source-ethics"
            className="inline-flex items-center gap-1.5 mt-4 text-sm font-body font-medium text-sepia/70 hover:text-sepia transition-colors"
          >
            Read our full transparency report <ArrowRight size={15} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="frame-card p-5 flex flex-col items-start gap-3 hover:shadow-amber-glow transition-shadow duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-sepia/10 flex items-center justify-center shrink-0">
                <Icon size={18} className="text-sepia" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-sepia">{title}</h3>
                <p className="font-body text-sm text-sepia/65 mt-1 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
