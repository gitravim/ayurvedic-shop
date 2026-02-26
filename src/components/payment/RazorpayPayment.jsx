import { useState } from 'react';
import { Lock } from 'lucide-react';

const KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID;

function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (document.getElementById('razorpay-script')) { resolve(true); return; }
    const script = document.createElement('script');
    script.id = 'razorpay-script';
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export default function RazorpayPayment({ amount, customerInfo, onSuccess }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!KEY_ID) {
    return (
      <div className="p-4 bg-amber/10 border border-amber/30 rounded-lg text-sm font-body text-sepia space-y-2">
        <p className="font-semibold">Razorpay not configured</p>
        <p className="text-sepia/70">
          Add <code className="bg-sepia/10 px-1 rounded">VITE_RAZORPAY_KEY_ID</code> to your{' '}
          <code className="bg-sepia/10 px-1 rounded">.env</code> file.
        </p>
        <p className="text-sepia/60 text-xs">
          Get your test key at dashboard.razorpay.com/app/keys
        </p>
      </div>
    );
  }

  async function handlePay() {
    setLoading(true);
    setError('');
    const loaded = await loadRazorpayScript();
    if (!loaded) {
      setError('Failed to load Razorpay. Check your internet connection.');
      setLoading(false);
      return;
    }

    // In production: create an order on your backend and pass the order_id here
    const options = {
      key: KEY_ID,
      amount: Math.round(amount * 100), // paise
      currency: 'USD',
      name: 'Vaidya & Co.',
      description: 'Ayurvedic Apothecary Order',
      image: '/favicon.svg',
      prefill: {
        name: customerInfo?.name || '',
        email: customerInfo?.email || '',
      },
      theme: { color: '#704214' },
      handler: function (response) {
        onSuccess({
          method: 'Razorpay',
          paymentId: response.razorpay_payment_id,
        });
      },
      modal: {
        ondismiss: () => setLoading(false),
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.on('payment.failed', (resp) => {
      setError(resp.error.description || 'Payment failed. Please try again.');
      setLoading(false);
    });
    rzp.open();
    setLoading(false);
  }

  return (
    <div className="space-y-4">
      <p className="text-xs font-body text-sepia/50">
        Clicking the button below will open the Razorpay checkout modal. Supports UPI, cards,
        net banking, and wallets.
      </p>
      {error && <p className="text-xs text-red-500">{error}</p>}
      <button
        onClick={handlePay}
        disabled={loading}
        className="btn-primary w-full flex items-center justify-center gap-2 py-3.5 text-base disabled:opacity-60"
      >
        <Lock size={16} />
        {loading ? 'Opening Razorpay…' : `Pay $${amount.toFixed(2)} with Razorpay`}
      </button>
      <p className="text-xs font-body text-sepia/40 text-center">
        UPI · Cards · Net Banking · Wallets
      </p>
    </div>
  );
}
