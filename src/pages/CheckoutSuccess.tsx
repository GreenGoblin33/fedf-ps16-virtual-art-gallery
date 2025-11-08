import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

interface StripeSession {
  id: string;
  customer_email?: string;
  amount_total?: number;
  currency?: string;
  payment_status?: string;
}

export default function CheckoutSuccess() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [session, setSession] = useState<StripeSession | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      if (!sessionId) return;
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/session/${sessionId}`);
        const data = await res.json();
        setSession(data);
      } catch (err) {
        console.error("Error fetching session:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, [sessionId]);

  if (loading)
    return (
      <main className="flex justify-center items-center min-h-[70vh] text-lg">
        Processing your payment...
      </main>
    );

  if (!session)
    return (
      <main className="text-center py-20">
        <h1 className="text-3xl font-bold text-red-600">Payment Session Not Found</h1>
        <Link to="/gallery" className="mt-4 inline-block text-blue-600 underline">
          Return to Gallery
        </Link>
      </main>
    );

  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-lg w-full">
        <h1 className="text-3xl font-bold text-green-600 mb-4">🎉 Payment Successful!</h1>
        <p className="text-gray-700 mb-6">
          Thank you for your purchase, {session.customer_email || "Art Enthusiast"}!
        </p>

        <div className="border-t border-gray-200 pt-4 mb-6 text-left">
          <p><strong>Session ID:</strong> {session.id}</p>
          <p><strong>Amount:</strong> ₹{(session.amount_total || 0) / 100}</p>
          <p><strong>Status:</strong> {session.payment_status}</p>
        </div>

        <Link
          to="/gallery"
          className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Back to Gallery
        </Link>
      </div>
    </main>
  );
}
