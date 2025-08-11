import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShortenURL - Modern URL Shortener",
  description: "Transform long URLs into short, shareable links instantly. Privacy-focused, no registration required, with click tracking and QR code generation.",
  keywords: ["URL shortener", "link shortener", "short links", "URL compression", "link management"],
  authors: [{ name: "ShortenURL" }],
  creator: "ShortenURL",
  openGraph: {
    title: "ShortenURL - Modern URL Shortener",
    description: "Transform long URLs into short, shareable links instantly. Privacy-focused, no registration required.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShortenURL - Modern URL Shortener",
    description: "Transform long URLs into short, shareable links instantly. Privacy-focused, no registration required.",
  },
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
