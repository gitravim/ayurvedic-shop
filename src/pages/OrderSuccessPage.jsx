import { useLocation, Link } from 'react-router-dom';
import { CheckCircle, Leaf, Package, Mail } from 'lucide-react';

export default function OrderSuccessPage() {
  const { state } = useLocation();
  const { details, total, info } = state || {};

  const orderId = `VC-${Date.now().toString().slice(-8)}`;

  return (
    <main className="max-w-2xl mx-auto px-4 sm:px-6 py-16 text-center">
      {/* Success icon */}
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-forest/10 border-2 border-forest/30 mb-6">
        <CheckCircle size={40} className="text-forest" strokeWidth={1.5} />
      </div>

      <p className="text-xs font-body uppercase tracking-widest text-sepia/50 mb-2">Order Confirmed</p>
      <h1 className="font-display text-4xl text-sepia font-semibold mb-4">
        Thank You{info?.name ? `, ${info.name.split(' ')[0]}` : ''}!
      </h1>
      <p className="font-body text-sepia/70 leading-relaxed max-w-md mx-auto">
        Your order has been received and is being prepared with care. You will receive a
        confirmation email shortly.
      </p>

      {/* Order details card */}
      <div className="frame-card p-6 mt-8 text-left space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-sepia/10">
          <div>
            <p className="font-body text-xs text-sepia/50 uppercase tracking-wide">Order ID</p>
            <p className="font-display text-lg text-sepia font-semibold">{orderId}</p>
          </div>
          <div className="text-right">
            <p className="font-body text-xs text-sepia/50 uppercase tracking-wide">Total Paid</p>
            <p className="font-display text-lg text-sepia font-semibold">${total?.toFixed(2)}</p>
          </div>
        </div>

        {details && (
          <div className="flex items-center gap-2 text-sm font-body text-sepia/70">
            <span className="text-base">{details.method === 'PayPal' ? '🅿️' : details.method === 'Razorpay' ? '₹' : '💳'}</span>
            <span>
              Paid via <strong className="text-sepia">{details.method}</strong>
              {details.last4 && ` ending in ${details.last4}`}
              {details.paymentId && ` · ID: ${details.paymentId}`}
              {details.orderId && ` · Order: ${details.orderId}`}
            </span>
          </div>
        )}

        {info?.email && (
          <div className="flex items-center gap-2 text-sm font-body text-sepia/70">
            <Mail size={15} className="shrink-0 text-sepia/40" />
            <span>Confirmation sent to <strong className="text-sepia">{info.email}</strong></span>
          </div>
        )}

        {info?.address && (
          <div className="flex items-start gap-2 text-sm font-body text-sepia/70">
            <Package size={15} className="shrink-0 text-sepia/40 mt-0.5" />
            <span>
              Shipping to: {info.address}, {info.city}, {info.state} {info.zip}, {info.country}
            </span>
          </div>
        )}
      </div>

      {/* Delivery note */}
      <div className="mt-6 px-5 py-4 bg-amber/10 border border-amber/25 rounded-xl">
        <p className="font-body text-sm text-sepia leading-relaxed">
          <span className="font-semibold">Estimated delivery: 5–7 business days.</span>{' '}
          Each order is packed by hand and inspected before dispatch. You will receive a
          tracking number once your order ships.
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
        <Link to="/shop" className="btn-primary flex items-center justify-center gap-2 py-3.5 px-8">
          <Leaf size={16} />
          Continue Shopping
        </Link>
        <Link to="/" className="border border-sepia/30 text-sepia font-body font-medium px-8 py-3.5 rounded-lg hover:bg-sepia/5 transition-colors flex items-center justify-center">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
