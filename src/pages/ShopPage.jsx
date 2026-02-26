import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, CATEGORIES } from '../data/products';

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const cat = searchParams.get('cat');
    if (cat && CATEGORIES.includes(cat)) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const filtered =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-xs font-body uppercase tracking-widest text-sepia/50 mb-2">
          The Collection
        </p>
        <h1 className="section-heading text-4xl md:text-5xl">The Apothecary</h1>
        <p className="font-body text-sepia/65 mt-3 max-w-lg mx-auto leading-relaxed">
          Every formulation is classical, every herb traceable, every batch tested.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-all duration-150 ${
              activeCategory === cat
                ? 'bg-sepia text-parchment shadow-sm'
                : 'bg-sepia/10 text-sepia/70 hover:bg-sepia/20 hover:text-sepia'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Bundle nudge */}
      <div className="mb-8 px-4 py-3 bg-amber/15 border border-amber/30 rounded-xl text-center">
        <p className="font-body text-sm text-sepia">
          <span className="font-semibold">Ritual Bundle Deal:</span>{' '}
          Add any 3 products to your cart and save 10% automatically.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-sepia/50 font-body">
          No products found in this category.
        </div>
      )}
    </main>
  );
}
