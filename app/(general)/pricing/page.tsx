import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pricing page',
  description: 'Pricing, subscriptions',
  keywords: ['pricing', 'payment', 'subscription']
}

export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">Pricing Page</span>
    </>
  );
}
