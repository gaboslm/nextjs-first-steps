import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Home page',
  description: 'SEO Description',
  keywords: ['home', 'landing', 'initial']
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span className="text-5xl">Hello world!</span>

      <Link href='/about'>About</Link>
    </main>
  );
}
