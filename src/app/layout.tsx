import type { Metadata } from "next";
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { WhatsAppFloat, EmergencyStrip } from '@/components/ui';

export const metadata: Metadata = {
  title: "React Vite Tailwind to Next.js",
  description: "Migrated Next.js project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cream-50 text-ink-900 antialiased">
        <EmergencyStrip />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
