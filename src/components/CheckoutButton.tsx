import React from "react";
import { loadStripe, Stripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY!);

type Item = {
  id: string;
  title: string;
  description?: string;
  price: number;
  qty?: number;
};

interface CheckoutProps {
  items: Item[];
  email?: string;
}

export default function CheckoutButton({ items, email }: CheckoutProps) {
  const handleCheckout = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/create-checkout-session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, customerEmail: email }),
      });

      const data = await res.json();

      // Ensure stripe is a valid instance
      const stripe = (await stripePromise) as Stripe | null;
      if (!stripe) {
        console.error("Stripe failed to initialize.");
        alert("Stripe failed to initialize.");
        return;
      }

      if (data.id) {
        // ✅ Correct usage
        // @ts-ignore: Stripe typing sometimes lags behind runtime API
        const result = await stripe.redirectToCheckout({
          sessionId: data.id,
        });

        if (result?.error) {
          console.error("Stripe redirect error:", result.error.message);
          alert("Redirect failed: " + result.error.message);
        }
      } else {
        alert("No session ID returned from backend.");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Checkout failed. Check console for details.");
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
    >
      Checkout Securely
    </button>
  );
}
