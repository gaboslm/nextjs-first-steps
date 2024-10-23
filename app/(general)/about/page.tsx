import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About page',
  description: 'SEO Description',
  keywords: ['about', 'information', 'detail']
}

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">About Page</span>
    </>
  );
}
