import type { Metadata } from "next";
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { WhatsAppFloat, EmergencyStrip } from '@/components/ui';
export const metadata: Metadata = {
  title: {
    default: "Fateh Hospital | Best Maternity & Child Care Hospital in Morinda",
    template: "%s | Fateh Hospital"
  },
  description: "Fateh Hospital in Morinda offers top-tier maternity, gynaecology, fertility, and pediatric care with a state-of-the-art Level III NICU and expert specialists.",
  keywords: [
    "Fateh Hospital", "Morinda", "maternity hospital", "pediatric hospital", "child care",
    "gynaecologist", "pregnancy care", "fertility clinic", "IVF center", "NICU hospital Mohali",
    "Level III NICU", "best hospital Morinda", "Dr Rupinder Kaur", "Dr Mrigind Singh"
  ],
  authors: [{ name: "Fateh Hospital" }],
  metadataBase: new URL("https://fatehhospital.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/branch_mediclinic.png",
    shortcut: "/branch_mediclinic.png",
    apple: "/branch_mediclinic.png",
  },
  openGraph: {
    title: "Fateh Hospital | Best Maternity & Child Care Hospital in Morinda",
    description: "Fateh Hospital in Morinda offers top-tier maternity, gynaecology, fertility, and pediatric care with a state-of-the-art Level III NICU and expert specialists.",
    url: "https://fatehhospital.com",
    siteName: "Fateh Hospital",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Fateh Hospital Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fateh Hospital | Best Maternity & Child Care Hospital in Morinda",
    description: "Fateh Hospital in Morinda offers top-tier maternity, gynaecology, fertility, and pediatric care with a state-of-the-art Level III NICU and expert specialists.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "name": "Fateh Hospital",
    "alternateName": "FH",
    "url": "https://fatehhospital.com",
    "logo": "https://fatehhospital.com/logo.png",
    "image": "https://fatehhospital.com/logo.png",
    "description": "Fateh Hospital in Morinda offers top-tier maternity, gynaecology, fertility, and pediatric care with a state-of-the-art Level III NICU and expert specialists.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dholan Majra Chowk, Old Plaza Building, Old Chandigarh-Morinda Road",
      "addressLocality": "Morinda",
      "addressRegion": "Punjab",
      "postalCode": "140101",
      "addressCountry": "IN"
    },
    "telephone": "+91-7888741037",
    "emergencyTelephone": "+91-7888741037",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
