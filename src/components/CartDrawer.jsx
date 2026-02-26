import { X, ShoppingBag, Plus, Minus, Trash2, Tag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const {
    items, isOpen, setIsOpen, removeItem, updateQty,
    subtotal, bundleDiscount, total, totalItems, isBundleEligible,
  } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-sepia-dark/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-sm bg-parchment shadow-2xl flex flex-col cart-drawer ${
          isOpen ? 'cart-drawer-open' : 'cart-drawer-closed'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-sepia/15">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-sepia" />
            <h2 className="font-display text-xl text-sepia font-semibold">
              Your Cart {totalItems > 0 && <span className="text-sepia/50 font-normal text-base">({totalItems})</span>}
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 text-sepia/60 hover:text-sepia transition-colors rounded-md hover:bg-sepia/10"
          >
            <X size={20} />
          </button>
        </div>

        {/* Bundle Banner */}
        {!isBundleEligible && items.length > 0 && (
          <div className="mx-4 mt-3 px-4 py-3 bg-amber/20 border border-amber/40 rounded-lg flex items-start gap-2">
            <Tag size={16} className="text-sepia shrink-0 mt-0.5" />
            <p className="text-xs text-sepia font-body">
              <span className="font-semibold">Add {3 - items.length} more item{3 - items.length !== 1 ? 's' : ''}</span> to unlock the{' '}
              <span className="font-semibold">Ritual Bundle — 10% off</span> your entire order.
            </p>
          </div>
        )}
        {isBundleEligible && (
          <div className="mx-4 mt-3 px-4 py-3 bg-forest/10 border border-forest/30 rounded-lg flex items-center gap-2">
            <Tag size={16} className="text-forest shrink-0" />
            <p className="text-xs text-forest font-body font-semibold">
              Ritual Bundle discount applied — 10% off!
            </p>
          </div>
        )}

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-16">
              <div className="w-16 h-16 rounded-full bg-sepia/10 flex items-center justify-center">
                <ShoppingBag size={28} className="text-sepia/40" />
              </div>
              <div>
                <p className="font-display text-lg text-sepia/60">Your cart is empty</p>
                <p className="text-sm text-sepia/40 font-body mt-1">Discover our apothecary</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="btn-primary text-sm">
                Browse the Shop
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="frame-card p-3 flex gap-3">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-sepia/10 flex items-center justify-center text-2xl shrink-0">
                  {item.emoji}
                </div>
                {/* Details */}
                <div className="flex-1 min-w-0">
                  <p className="font-body text-sm font-medium text-sepia-dark truncate">{item.name}</p>
                  <p className="font-body text-xs text-sepia/60 mt-0.5">${item.price.toFixed(2)} each</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      className="w-6 h-6 rounded-full bg-sepia/10 hover:bg-sepia/20 flex items-center justify-center transition-colors"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="font-body text-sm font-semibold w-4 text-center">{item.qty}</span>
                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      className="w-6 h-6 rounded-full bg-sepia/10 hover:bg-sepia/20 flex items-center justify-center transition-colors"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
                {/* Price + Remove */}
                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-sepia/30 hover:text-sepia/70 transition-colors"
                  >
                    <Trash2 size={14} />
                  </button>
                  <span className="font-body text-sm font-semibold text-sepia">
                    ${(item.price * item.qty).toFixed(2)}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-sepia/15 px-6 py-5 space-y-3">
            <div className="space-y-1.5">
              <div className="flex justify-between text-sm font-body text-sepia/70">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {isBundleEligible && (
                <div className="flex justify-between text-sm font-body text-forest font-medium">
                  <span>Ritual Bundle (–10%)</span>
                  <span>–${bundleDiscount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between font-body font-semibold text-sepia text-base pt-1 border-t border-sepia/10">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button className="btn-primary w-full text-center text-base py-3.5 mt-2">
              Proceed to Checkout
            </button>
            <p className="text-xs text-center text-sepia/40 font-body">
              Free shipping on orders over $50 · Secure checkout
            </p>
          </div>
        )}
      </aside>
    </>
  );
}
