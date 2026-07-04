import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bladeenterprises.com"),
  title: {
    default: "Blade Enterprises | Private Holdings & Capital",
    template: "%s | Blade Enterprises",
  },
  description:
    "Blade Enterprises is a Toronto-based private holding, investment, and operating company focused on manufacturing, construction, software, AI, logistics, and real estate.",
  keywords: [
    "private equity",
    "holding company",
    "Toronto",
    "investment",
    "acquisitions",
    "manufacturing",
    "real estate",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://bladeenterprises.com",
    siteName: "Blade Enterprises",
    title: "Blade Enterprises | Private Holdings & Capital",
    description:
      "A Toronto-based private holding and operating company. We acquire, build, and scale businesses across manufacturing, construction, software, AI, logistics, and real estate.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blade Enterprises | Private Holdings & Capital",
    description:
      "A Toronto-based private holding and operating company.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-blade-black text-blade-white font-body antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
