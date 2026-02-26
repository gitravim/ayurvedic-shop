import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Lock, CreditCard, Tag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import StripePayment from '../components/payment/StripePayment';
import PayPalPayment from '../components/payment/PayPalPayment';
import RazorpayPayment from '../components/payment/RazorpayPayment';
import MockPayment from '../components/payment/MockPayment';

const PAYMENT_METHODS = [
  { id: 'stripe', label: 'Credit / Debit Card', sublabel: 'via Stripe', icon: '💳' },
  { id: 'paypal', label: 'PayPal', sublabel: 'Pay with PayPal balance or card', icon: '🅿️' },
  { id: 'razorpay', label: 'Razorpay', sublabel: 'UPI, cards, net banking, wallets', icon: '₹' },
  { id: 'demo', label: 'Demo / Test', sublabel: 'No real charge', icon: '🧪' },
];

function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-xs font-body font-medium text-sepia/70 mb-1">{label}</label>
      {children}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

function inputClass(hasError) {
  return `w-full border rounded-lg px-3 py-2.5 font-body text-sm text-sepia bg-white/60 focus:outline-none focus:border-sepia/50 transition-colors ${hasError ? 'border-red-400' : 'border-sepia/25'}`;
}

export default function CheckoutPage() {
  const { items, subtotal, bundleDiscount, total, isBundleEligible, clearCart } = useCart();
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    name: '', email: '', phone: '',
    address: '', city: '', state: '', zip: '', country: 'United States',
  });
  const [infoErrors, setInfoErrors] = useState({});
  const [infoConfirmed, setInfoConfirmed] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('stripe');

  // Redirect if cart is empty
  if (items.length === 0) {
    return (
      <div className="max-w-lg mx-auto px-4 py-24 text-center">
        <ShoppingBag size={40} className="text-sepia/30 mx-auto mb-4" />
        <h2 className="font-display text-2xl text-sepia mb-2">Your cart is empty</h2>
        <p className="font-body text-sepia/60 mb-6">Add some products before checking out.</p>
        <Link to="/shop" className="btn-primary">Browse the Shop</Link>
      </div>
    );
  }

  function validateInfo() {
    const e = {};
    if (!info.name.trim()) e.name = 'Required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(info.email)) e.email = 'Valid email required';
    if (!info.address.trim()) e.address = 'Required';
    if (!info.city.trim()) e.city = 'Required';
    if (!info.zip.trim()) e.zip = 'Required';
    return e;
  }

  function handleConfirmInfo(e) {
    e.preventDefault();
    const errs = validateInfo();
    if (Object.keys(errs).length) { setInfoErrors(errs); return; }
    setInfoErrors({});
    setInfoConfirmed(true);
  }

  function handlePaymentSuccess(details) {
    clearCart();
    navigate('/order-success', { state: { details, total, info } });
  }

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <Link to="/" className="flex items-center gap-1.5 text-sm font-body text-sepia/60 hover:text-sepia transition-colors">
          <ArrowLeft size={16} /> Continue Shopping
        </Link>
        <span className="text-sepia/20">/</span>
        <span className="font-body text-sm text-sepia font-medium">Checkout</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

        {/* ── Left: Forms ──────────────────────────────── */}
        <div className="lg:col-span-3 space-y-6">

          {/* Step 1: Customer Info */}
          <div className="frame-card p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-display text-xl text-sepia font-semibold flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-sepia text-parchment text-xs flex items-center justify-center font-body font-bold">1</span>
                Delivery Information
              </h2>
              {infoConfirmed && (
                <button onClick={() => setInfoConfirmed(false)} className="text-xs font-body text-sepia/60 hover:text-sepia underline">
                  Edit
                </button>
              )}
            </div>

            {infoConfirmed ? (
              <div className="bg-sepia/5 rounded-lg p-4 font-body text-sm text-sepia/80 space-y-0.5">
                <p className="font-semibold text-sepia">{info.name}</p>
                <p>{info.email}</p>
                <p>{info.address}, {info.city}, {info.state} {info.zip}</p>
                <p>{info.country}</p>
              </div>
            ) : (
              <form onSubmit={handleConfirmInfo} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Full Name *" error={infoErrors.name}>
                    <input type="text" value={info.name} onChange={(e) => setInfo({ ...info, name: e.target.value })}
                      placeholder="Jane Smith" className={inputClass(infoErrors.name)} />
                  </Field>
                  <Field label="Email *" error={infoErrors.email}>
                    <input type="email" value={info.email} onChange={(e) => setInfo({ ...info, email: e.target.value })}
                      placeholder="jane@example.com" className={inputClass(infoErrors.email)} />
                  </Field>
                </div>
                <Field label="Phone (optional)">
                  <input type="tel" value={info.phone} onChange={(e) => setInfo({ ...info, phone: e.target.value })}
                    placeholder="+1 555 000 0000" className={inputClass(false)} />
                </Field>
                <Field label="Street Address *" error={infoErrors.address}>
                  <input type="text" value={info.address} onChange={(e) => setInfo({ ...info, address: e.target.value })}
                    placeholder="123 Herb Lane" className={inputClass(infoErrors.address)} />
                </Field>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <Field label="City *" error={infoErrors.city}>
                    <input type="text" value={info.city} onChange={(e) => setInfo({ ...info, city: e.target.value })}
                      placeholder="New York" className={inputClass(infoErrors.city)} />
                  </Field>
                  <Field label="State">
                    <input type="text" value={info.state} onChange={(e) => setInfo({ ...info, state: e.target.value })}
                      placeholder="NY" className={inputClass(false)} />
                  </Field>
                  <Field label="ZIP *" error={infoErrors.zip}>
                    <input type="text" value={info.zip} onChange={(e) => setInfo({ ...info, zip: e.target.value })}
                      placeholder="10001" className={inputClass(infoErrors.zip)} />
                  </Field>
                </div>
                <Field label="Country">
                  <select value={info.country} onChange={(e) => setInfo({ ...info, country: e.target.value })}
                    className={inputClass(false)}>
                    {['United States', 'United Kingdom', 'Canada', 'Australia', 'India', 'Other'].map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </Field>
                <button type="submit" className="btn-primary w-full py-3">
                  Continue to Payment
                </button>
              </form>
            )}
          </div>

          {/* Step 2: Payment */}
          {infoConfirmed && (
            <div className="frame-card p-6">
              <h2 className="font-display text-xl text-sepia font-semibold flex items-center gap-2 mb-5">
                <span className="w-6 h-6 rounded-full bg-sepia text-parchment text-xs flex items-center justify-center font-body font-bold">2</span>
                Payment Method
              </h2>

              {/* Method selector */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {PAYMENT_METHODS.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setPaymentMethod(m.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      paymentMethod === m.id
                        ? 'border-sepia bg-sepia/5 shadow-sm'
                        : 'border-sepia/20 hover:border-sepia/40'
                    }`}
                  >
                    <span className="text-xl block mb-1">{m.icon}</span>
                    <p className="font-body text-xs font-semibold text-sepia leading-tight">{m.label}</p>
                    <p className="font-body text-xs text-sepia/50 leading-tight mt-0.5">{m.sublabel}</p>
                  </button>
                ))}
              </div>

              {/* Payment form */}
              {paymentMethod === 'stripe' && (
                <StripePayment amount={total} onSuccess={handlePaymentSuccess} />
              )}
              {paymentMethod === 'paypal' && (
                <PayPalPayment amount={total} onSuccess={handlePaymentSuccess} />
              )}
              {paymentMethod === 'razorpay' && (
                <RazorpayPayment amount={total} customerInfo={info} onSuccess={handlePaymentSuccess} />
              )}
              {paymentMethod === 'demo' && (
                <MockPayment amount={total} onSuccess={handlePaymentSuccess} />
              )}

              {/* Trust badges */}
              <div className="flex items-center justify-center gap-3 mt-5 pt-4 border-t border-sepia/10">
                <Lock size={13} className="text-sepia/40" />
                <span className="text-xs font-body text-sepia/40">256-bit SSL encrypted · Secure checkout</span>
              </div>
            </div>
          )}
        </div>

        {/* ── Right: Order Summary ──────────────────────── */}
        <div className="lg:col-span-2">
          <div className="frame-card p-5 sticky top-24">
            <h3 className="font-display text-lg text-sepia font-semibold mb-4 flex items-center gap-2">
              <ShoppingBag size={18} />
              Order Summary
            </h3>

            <div className="space-y-3 mb-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sepia/10 flex items-center justify-center text-xl shrink-0">
                    {item.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-body text-sm font-medium text-sepia truncate">{item.name}</p>
                    <p className="font-body text-xs text-sepia/50">Qty: {item.qty}</p>
                  </div>
                  <span className="font-body text-sm font-semibold text-sepia shrink-0">
                    ${(item.price * item.qty).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-sepia/10 pt-3 space-y-2">
              <div className="flex justify-between font-body text-sm text-sepia/70">
                <span>Subtotal</span><span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-body text-sm text-sepia/70">
                <span>Shipping</span><span className="text-forest font-medium">Free</span>
              </div>
              {isBundleEligible && (
                <div className="flex items-center justify-between font-body text-sm text-forest font-medium">
                  <span className="flex items-center gap-1"><Tag size={12} /> Ritual Bundle (–10%)</span>
                  <span>–${bundleDiscount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between font-display text-lg text-sepia font-semibold pt-2 border-t border-sepia/10">
                <span>Total</span><span>${total.toFixed(2)}</span>
              </div>
            </div>

            {isBundleEligible && (
              <div className="mt-3 px-3 py-2 bg-forest/10 border border-forest/20 rounded-lg">
                <p className="text-xs font-body text-forest font-medium flex items-center gap-1">
                  <Tag size={11} /> Ritual Bundle discount applied!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
