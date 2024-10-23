import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact page',
  description: 'SEO Description',
  keywords: ['contact', 'info', 'data']
}

export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">Contact Page</span>
    </>
  );
}
