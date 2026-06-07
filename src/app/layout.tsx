// src/app/layout.tsx
import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Samman Enterprises — B2B Produce Sourcing",
  description:
    "B2B supplier of fresh fruits and vegetables for malls, retail chains, wholesalers, and export-focused business buyers. Based in Nagpur, India.",
  metadataBase: new URL("https://sammanenterprises.com"),
  openGraph: {
    title: "Samman Enterprises — B2B Produce Sourcing",
    description:
      "Fresh produce for serious B2B buyers. Wholesale, retail chains, export.",
    url: "https://sammanenterprises.com",
    siteName: "Samman Enterprises",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samman Enterprises",
    description: "B2B produce sourcing from India.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${cormorant.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}

