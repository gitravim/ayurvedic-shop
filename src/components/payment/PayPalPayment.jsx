import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const CLIENT_ID = import.meta.env.VITE_PAYPAL_CLIENT_ID;

export default function PayPalPayment({ amount, onSuccess }) {
  if (!CLIENT_ID) {
    return (
      <div className="p-4 bg-amber/10 border border-amber/30 rounded-lg text-sm font-body text-sepia space-y-2">
        <p className="font-semibold">PayPal not configured</p>
        <p className="text-sepia/70">
          Add <code className="bg-sepia/10 px-1 rounded">VITE_PAYPAL_CLIENT_ID</code> to your{' '}
          <code className="bg-sepia/10 px-1 rounded">.env</code> file.
        </p>
        <p className="text-sepia/60 text-xs">
          Get your sandbox client ID at developer.paypal.com
        </p>
      </div>
    );
  }

  return (
    <PayPalScriptProvider options={{ clientId: CLIENT_ID, currency: 'USD' }}>
      <div className="space-y-3">
        <p className="text-xs font-body text-sepia/50">
          You will be redirected to PayPal to complete your payment securely.
        </p>
        <PayPalButtons
          style={{ layout: 'vertical', color: 'gold', shape: 'rect', label: 'pay' }}
          createOrder={(data, actions) =>
            actions.order.create({
              purchase_units: [{ amount: { value: amount.toFixed(2) } }],
            })
          }
          onApprove={async (data, actions) => {
            const order = await actions.order.capture();
            onSuccess({ method: 'PayPal', orderId: order.id });
          }}
          onError={(err) => console.error('PayPal error:', err)}
        />
      </div>
    </PayPalScriptProvider>
  );
}
