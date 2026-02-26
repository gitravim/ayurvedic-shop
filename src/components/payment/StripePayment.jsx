import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { Lock } from 'lucide-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
const stripePromise = PUBLISHABLE_KEY ? loadStripe(PUBLISHABLE_KEY) : null;

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: '14px',
      color: '#4A2A0A',
      fontFamily: 'Inter, system-ui, sans-serif',
      '::placeholder': { color: '#9B6B35' },
    },
    invalid: { color: '#ef4444' },
  },
};

function StripeForm({ amount, onSuccess }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);
    setError('');
    try {
      const cardElement = elements.getElement(CardElement);
      const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });
      if (stripeError) {
        setError(stripeError.message);
        setLoading(false);
        return;
      }
      // In production: send paymentMethod.id to your backend to create a PaymentIntent
      // and confirm. Here we simulate success for demo purposes.
      console.log('Stripe PaymentMethod created:', paymentMethod.id);
      onSuccess({ method: 'Stripe', last4: paymentMethod.card?.last4 });
    } catch (err) {
      setError('An unexpected error occurred.');
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="border border-sepia/25 rounded-lg px-3 py-3 bg-white/60 focus-within:border-sepia/50 transition-colors">
        <CardElement options={CARD_ELEMENT_OPTIONS} />
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
      <p className="text-xs font-body text-sepia/50">
        Test card: <code className="bg-sepia/10 px-1 rounded">4242 4242 4242 4242</code> · Any future date · Any CVV
      </p>
      <button
        type="submit"
        disabled={!stripe || loading}
        className="btn-primary w-full flex items-center justify-center gap-2 py-3.5 text-base disabled:opacity-60"
      >
        <Lock size={16} />
        {loading ? 'Processing…' : `Pay $${amount.toFixed(2)} with Stripe`}
      </button>
    </form>
  );
}

export default function StripePayment({ amount, onSuccess }) {
  if (!stripePromise) {
    return (
      <div className="p-4 bg-amber/10 border border-amber/30 rounded-lg text-sm font-body text-sepia space-y-2">
        <p className="font-semibold">Stripe not configured</p>
        <p className="text-sepia/70">
          Add <code className="bg-sepia/10 px-1 rounded">VITE_STRIPE_PUBLISHABLE_KEY</code> to your{' '}
          <code className="bg-sepia/10 px-1 rounded">.env</code> file.
        </p>
        <p className="text-sepia/60 text-xs">
          Get your key at dashboard.stripe.com/apikeys
        </p>
      </div>
    );
  }

  return (
    <Elements stripe={stripePromise}>
      <StripeForm amount={amount} onSuccess={onSuccess} />
    </Elements>
  );
}
