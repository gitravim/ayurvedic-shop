import { useParams, Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, ArrowLeft, Star, Leaf, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-sepia/15">
      <button
        className="w-full flex items-center justify-between py-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-display text-base font-semibold text-sepia">{title}</span>
        {open ? <ChevronUp size={18} className="text-sepia/50" /> : <ChevronDown size={18} className="text-sepia/50" />}
      </button>
      {open && <div className="pb-5 font-body text-sm text-sepia/75 leading-relaxed">{children}</div>}
    </div>
  );
}

export default function ProductPage() {
  const { id } = useParams();
  const { addItem } = useCart();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="text-center py-24 font-body text-sepia/60">
        Product not found.{' '}
        <Link to="/shop" className="underline text-sepia">Back to shop</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3);

  function handleAddToCart() {
    for (let i = 0; i < qty; i++) addItem(product);
  }

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      {/* Back */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-1.5 text-sm font-body text-sepia/60 hover:text-sepia transition-colors mb-8"
      >
        <ArrowLeft size={16} /> Back
      </button>

      {/* Product hero */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        {/* Visual */}
        <div className={`frame-card h-72 md:h-auto min-h-64 flex items-center justify-center bg-gradient-to-br ${product.color} woodcut-bg relative overflow-hidden`}>
          <span className="text-9xl select-none">{product.emoji}</span>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-amber/0 to-amber/15" />
          <span className="absolute top-4 left-4 text-xs font-body font-medium bg-parchment/80 text-sepia px-2.5 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-xs font-body uppercase tracking-widest text-sepia/50 mb-1">
              {product.tagline}
            </p>
            <h1 className="font-display text-3xl md:text-4xl text-sepia font-semibold leading-tight">
              {product.name}
            </h1>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FFBF00" color="#FFBF00" />)}
            </div>
            <span className="font-body text-sm text-sepia/55">
              5.0 ({product.reviews.length} reviews)
            </span>
          </div>

          <p className="font-body text-sepia/75 leading-relaxed">{product.description}</p>

          {/* Dosha matches */}
          <div className="flex flex-wrap gap-2">
            {product.doshaMatch.map((d) => (
              <span key={d} className="text-xs font-body font-medium bg-forest/10 text-forest border border-forest/20 px-3 py-1 rounded-full">
                {d}
              </span>
            ))}
          </div>

          {/* Price & qty */}
          <div className="flex items-center gap-4 pt-2">
            <span className="font-display text-3xl text-sepia font-semibold">
              ${product.price.toFixed(2)}
            </span>
            <div className="flex items-center border border-sepia/20 rounded-lg overflow-hidden">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="px-3 py-2 text-sepia/60 hover:bg-sepia/10 transition-colors font-body font-medium"
              >
                –
              </button>
              <span className="px-4 py-2 font-body font-semibold text-sepia border-x border-sepia/20">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="px-3 py-2 text-sepia/60 hover:bg-sepia/10 transition-colors font-body font-medium"
              >
                +
              </button>
            </div>
          </div>

          {/* Desktop Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="btn-primary hidden md:flex items-center justify-center gap-2 py-4 text-base"
          >
            <ShoppingBag size={18} />
            Add to Cart — ${(product.price * qty).toFixed(2)}
          </button>

          <p className="text-xs font-body text-sepia/45 flex items-center gap-1">
            <Leaf size={12} /> Wildcrafted · Third-party tested · Free shipping over $50
          </p>
        </div>
      </div>

      {/* Detail Accordions */}
      <div className="max-w-2xl">
        <h2 className="section-heading text-2xl mb-4">Product Details</h2>
        <div className="frame-card p-1 divide-y divide-sepia/10">
          <Accordion title="Benefits" defaultOpen>
            <ul className="space-y-2">
              {product.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <Leaf size={14} className="text-forest mt-0.5 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </Accordion>

          <Accordion title="Traditional Use">
            <p>{product.traditionalUse}</p>
          </Accordion>

          <Accordion title="Modern Science">
            <p>{product.modernScience}</p>
          </Accordion>

          <Accordion title="Ingredients">
            <p>{product.ingredients}</p>
          </Accordion>
        </div>
      </div>

      {/* Customer Stories */}
      <div className="mt-12 max-w-2xl">
        <h2 className="section-heading text-2xl mb-6">Customer Stories</h2>
        <div className="space-y-4">
          {product.reviews.map((r) => (
            <div key={r.name} className="frame-card p-5">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} size={13} fill="#FFBF00" color="#FFBF00" />)}
                </div>
                <span className="font-body text-sm font-semibold text-sepia">{r.name}</span>
              </div>
              <p className="font-body text-sm text-sepia/75 leading-relaxed italic">"{r.text}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="section-heading text-2xl mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {related.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="block product-card-hover frame-card p-4">
                <div className={`h-24 rounded-lg bg-gradient-to-br ${p.color} flex items-center justify-center mb-3 woodcut-bg`}>
                  <span className="text-4xl">{p.emoji}</span>
                </div>
                <p className="font-display text-base font-semibold text-sepia">{p.name}</p>
                <p className="font-body text-sm text-sepia/60 mt-0.5">${p.price.toFixed(2)}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Sticky Add to Cart */}
      <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-parchment/95 backdrop-blur-md border-t border-sepia/15 px-4 py-3 shadow-lg">
        <div className="flex items-center gap-3 max-w-lg mx-auto">
          <div className="flex-1">
            <p className="font-display text-base font-semibold text-sepia leading-tight">{product.name}</p>
            <p className="font-body text-sm text-sepia/60">${product.price.toFixed(2)}</p>
          </div>
          <button
            onClick={handleAddToCart}
            className="btn-primary flex items-center gap-2 py-3 px-5 text-sm shrink-0"
          >
            <ShoppingBag size={16} />
            Add to Cart
          </button>
        </div>
      </div>
      {/* Mobile bottom padding */}
      <div className="h-20 md:hidden" />
    </main>
  );
}
