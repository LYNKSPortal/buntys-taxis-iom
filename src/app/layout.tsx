import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bunty's Taxis | Premium Taxi Service Across the Isle of Man",
  description:
    "Bunty's Taxis provides premium taxi and multi-seater transport services across the entire Isle of Man. Airport transfers, ferry port pickups, local journeys, business travel and more. Call or WhatsApp +44 7624 313151.",
  keywords:
    "Isle of Man taxi, IOM taxi, Douglas taxi, airport transfer Isle of Man, ferry port taxi, Bunty's Taxis, Isle of Man transport, Ramsey taxi, Peel taxi, Castletown taxi",
  openGraph: {
    title: "Bunty's Taxis | Premium Taxi Service – Isle of Man",
    description:
      "Reliable, premium taxis covering the whole Isle of Man. Cars and multi-seater vehicles. Book in advance or call/WhatsApp for short-notice journeys.",
    url: "https://buntystaxis.com",
    siteName: "Bunty's Taxis",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bunty's Taxis | Isle of Man",
    description: "Premium taxi service covering the entire Isle of Man.",
  },
  metadataBase: new URL("https://buntystaxis.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
