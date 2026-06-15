import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://buntys-taxis-iom.vercel.app"),
  title: {
    default: "Bunty's Taxis | Premier Taxi Service on the Isle of Man",
    template: "%s | Bunty's Taxis",
  },
  description:
    "Bunty's Taxis — premier taxi and multi-seater transport across the entire Isle of Man. Airport transfers, ferry port pickups, local journeys, business & group travel. Call or WhatsApp +44 7624 313151.",
  keywords: [
    "Isle of Man taxi",
    "IOM taxi",
    "taxi Isle of Man",
    "Douglas taxi",
    "Ramsey taxi",
    "Peel taxi",
    "Castletown taxi",
    "Port Erin taxi",
    "Port St Mary taxi",
    "Laxey taxi",
    "Onchan taxi",
    "airport transfer Isle of Man",
    "Ronaldsway airport taxi",
    "IOM airport taxi",
    "ferry port taxi Isle of Man",
    "Douglas Sea Terminal taxi",
    "Bunty's Taxis",
    "Buntys Taxis",
    "Isle of Man transport",
    "minibus hire Isle of Man",
    "multi-seater van Isle of Man",
    "group travel Isle of Man",
    "business travel Isle of Man",
    "taxi booking Isle of Man",
    "island-wide taxi IOM",
    "reliable taxi Isle of Man",
    "pre-book taxi Isle of Man",
  ],
  authors: [{ name: "Bunty's Taxis", url: "https://buntystaxis.com" }],
  creator: "Bunty's Taxis",
  publisher: "Bunty's Taxis",
  category: "Transportation",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://buntys-taxis-iom.vercel.app",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Bunty's Taxis | Premier Taxi Service – Isle of Man",
    description:
      "Premier taxis covering the whole Isle of Man. Cars & multi-seater vehicles. Book in advance or call/WhatsApp for short-notice journeys.",
    url: "https://buntys-taxis-iom.vercel.app",
    siteName: "Bunty's Taxis",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/meta-twitter-card.jpg",
        width: 1200,
        height: 630,
        alt: "Bunty's Taxis — Premier Taxi Service on the Isle of Man",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bunty's Taxis | Premier Taxi Service – Isle of Man",
    description:
      "Premier taxi service covering the entire Isle of Man. Airport transfers, ferry pickups, local & group travel.",
    images: ["/meta-twitter-card.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  name: "Bunty's Taxis",
  alternateName: "Buntys Taxis",
  description:
    "Premier taxi and multi-seater transport service covering the whole Isle of Man. Airport transfers, ferry port pickups, local journeys, business and group travel.",
  url: "https://buntys-taxis-iom.vercel.app",
  logo: "https://buntys-taxis-iom.vercel.app/3000w/logo.png",
  image: "https://buntys-taxis-iom.vercel.app/meta-twitter-card.jpg",
  telephone: "+447624313151",
  email: "info@buntystaxis.com",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Isle of Man",
    addressCountry: "IM",
  },
  areaServed: [
    { "@type": "Place", name: "Isle of Man" },
    { "@type": "City", name: "Douglas" },
    { "@type": "City", name: "Ramsey" },
    { "@type": "City", name: "Peel" },
    { "@type": "City", name: "Castletown" },
    { "@type": "City", name: "Port Erin" },
    { "@type": "City", name: "Port St Mary" },
    { "@type": "City", name: "Laxey" },
    { "@type": "City", name: "Onchan" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Taxi Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Airport Transfer" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ferry Port Transfer" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Local Journeys" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Island-Wide Travel" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Group & Business Travel" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Multi-Seater Vehicle Hire" } },
    ],
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+447624313151",
    contactType: "Reservations",
    contactOption: "TollFree",
    availableLanguage: "English",
  },
  priceRange: "££",
  paymentAccepted: "Cash, Card",
  currenciesAccepted: "GBP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
