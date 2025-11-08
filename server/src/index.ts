import express, { Request, Response } from "express";
import dotenv from "dotenv";
import Stripe from "stripe";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2022-11-15" as any,
});

app.use(cors({ origin: process.env.FRONTEND_ORIGIN || "*" }));
app.use(express.json());
app.use(bodyParser.json());

// ✅ Create Stripe Checkout Session
app.post("/create-checkout-session", async (req: Request, res: Response) => {
  try {
    const { items, customerEmail } = req.body;

    const line_items = items.map((i: any) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: i.title,
          description: i.description || "",
        },
        unit_amount: Math.round(i.price * 100),
      },
      quantity: i.qty || 1,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items,
      customer_email: customerEmail,
      success_url: `${process.env.FRONTEND_ORIGIN}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_ORIGIN}/checkout-cancel`,
    });

    res.json({ id: session.id });
  } catch (err) {
    console.error("❌ Error creating session:", err);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
});

// ✅ Retrieve Session
app.get("/session/:id", async (req: Request, res: Response) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(req.params.id);
    res.json(session);
  } catch (err) {
    console.error("❌ Error retrieving session:", err);
    res.status(500).json({ error: "Failed to retrieve session" });
  }
});

const PORT = process.env.PORT || 4242;
app.listen(PORT, () => console.log(`✅ Stripe backend running on port ${PORT}`));
