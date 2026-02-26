import { useState } from 'react';
import { CreditCard, Lock } from 'lucide-react';

export default function MockPayment({ amount, onSuccess }) {
  const [form, setForm] = useState({ card: '', expiry: '', cvv: '', name: '' });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  function formatCard(val) {
    return val.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
  }
  function formatExpiry(val) {
    const digits = val.replace(/\D/g, '').slice(0, 4);
    return digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits;
  }

  function validate() {
    const e = {};
    if (form.card.replace(/\s/g, '').length < 16) e.card = 'Enter a valid 16-digit card number';
    if (form.expiry.length < 5) e.expiry = 'Enter a valid expiry (MM/YY)';
    if (form.cvv.length < 3) e.cvv = 'Enter a valid CVV';
    if (!form.name.trim()) e.name = 'Cardholder name is required';
    return e;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    // Simulate payment processing
    setTimeout(() => onSuccess({ method: 'Demo Card', last4: form.card.slice(-4) }), 2000);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-body bg-amber/20 text-sepia px-2 py-0.5 rounded-full font-medium">
          Demo Mode — no real charge
        </span>
      </div>

      {/* Card number */}
      <div>
        <label className="block text-xs font-body font-medium text-sepia/70 mb-1">Card Number</label>
        <div className="relative">
          <input
            type="text"
            placeholder="4242 4242 4242 4242"
            value={form.card}
            onChange={(e) => setForm({ ...form, card: formatCard(e.target.value) })}
            className={`w-full border rounded-lg px-3 py-2.5 pr-10 font-body text-sm text-sepia bg-white/60 focus:outline-none focus:border-sepia/50 transition-colors ${errors.card ? 'border-red-400' : 'border-sepia/25'}`}
          />
          <CreditCard size={16} className="absolute right-3 top-3 text-sepia/30" />
        </div>
        {errors.card && <p className="text-xs text-red-500 mt-1">{errors.card}</p>}
      </div>

      {/* Expiry + CVV */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-body font-medium text-sepia/70 mb-1">Expiry</label>
          <input
            type="text"
            placeholder="MM/YY"
            value={form.expiry}
            onChange={(e) => setForm({ ...form, expiry: formatExpiry(e.target.value) })}
            className={`w-full border rounded-lg px-3 py-2.5 font-body text-sm text-sepia bg-white/60 focus:outline-none focus:border-sepia/50 transition-colors ${errors.expiry ? 'border-red-400' : 'border-sepia/25'}`}
          />
          {errors.expiry && <p className="text-xs text-red-500 mt-1">{errors.expiry}</p>}
        </div>
        <div>
          <label className="block text-xs font-body font-medium text-sepia/70 mb-1">CVV</label>
          <input
            type="text"
            placeholder="123"
            value={form.cvv}
            onChange={(e) => setForm({ ...form, cvv: e.target.value.replace(/\D/g, '').slice(0, 4) })}
            className={`w-full border rounded-lg px-3 py-2.5 font-body text-sm text-sepia bg-white/60 focus:outline-none focus:border-sepia/50 transition-colors ${errors.cvv ? 'border-red-400' : 'border-sepia/25'}`}
          />
          {errors.cvv && <p className="text-xs text-red-500 mt-1">{errors.cvv}</p>}
        </div>
      </div>

      {/* Cardholder name */}
      <div>
        <label className="block text-xs font-body font-medium text-sepia/70 mb-1">Cardholder Name</label>
        <input
          type="text"
          placeholder="Name on card"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={`w-full border rounded-lg px-3 py-2.5 font-body text-sm text-sepia bg-white/60 focus:outline-none focus:border-sepia/50 transition-colors ${errors.name ? 'border-red-400' : 'border-sepia/25'}`}
        />
        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full flex items-center justify-center gap-2 py-3.5 text-base disabled:opacity-60"
      >
        <Lock size={16} />
        {loading ? 'Processing…' : `Pay $${amount.toFixed(2)} (Demo)`}
      </button>
    </form>
  );
}
