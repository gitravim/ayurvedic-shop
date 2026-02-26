import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="product-card-hover frame-card group flex flex-col overflow-hidden">
      {/* Product visual */}
      <Link to={`/product/${product.id}`} className="block">
        <div
          className={`relative h-48 bg-gradient-to-br ${product.color} flex items-center justify-center woodcut-bg`}
        >
          <span className="text-6xl group-hover:scale-110 transition-transform duration-300 select-none">
            {product.emoji}
          </span>
          {/* Amber glass shimmer overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-amber/0 to-amber/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl" />
          {/* Category badge */}
          <span className="absolute top-3 left-3 text-xs font-body font-medium bg-parchment/80 text-sepia px-2 py-0.5 rounded-full backdrop-blur-sm">
            {product.category}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <div className="flex-1">
          <Link to={`/product/${product.id}`} className="block group/title">
            <p className="text-xs font-body text-sepia/50 uppercase tracking-widest mb-0.5">
              {product.tagline}
            </p>
            <h3 className="font-display text-lg text-sepia font-semibold group-hover/title:text-sepia-dark transition-colors leading-tight">
              {product.name}
            </h3>
          </Link>
          <p className="text-sm font-body text-sepia/70 mt-1.5 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Stars */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} fill="#FFBF00" color="#FFBF00" />
          ))}
          <span className="text-xs font-body text-sepia/50 ml-1">
            ({product.reviews.length} reviews)
          </span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-2 border-t border-sepia/10">
          <span className="font-display text-xl text-sepia font-semibold">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addItem(product)}
            className="flex items-center gap-1.5 bg-sepia text-parchment px-3 py-2 rounded-lg text-sm font-body font-medium
                       hover:bg-sepia-dark active:scale-95 transition-all duration-150 shadow-sm hover:shadow-md"
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
