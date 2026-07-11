import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ellé Fox | Actor",
    template: "%s | Ellé Fox",
  },

  description:
    "Official acting portfolio for Ellé Fox, featuring acting credits, performance reels, professional photos, statistics, special skills, and contact information.",

  keywords: [
    "Ellé Fox",
    "Ellé Fox actor",
    "actor portfolio",
    "acting reel",
    "acting credits",
    "professional actor",
  ],

  authors: [
    {
      name: "Ellé Fox",
    },
  ],

  creator: "Ellé Fox",

  openGraph: {
    title: "Ellé Fox | Actor",
    description:
      "Explore Ellé Fox's acting credits, performance reels, professional photography, and career information.",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ellé Fox | Actor",
    description:
      "Explore Ellé Fox's acting credits, performance reels, professional photography, and career information.",
  },

  robots: {
    index: true,
    follow: true,
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
        {children}
      </body>
    </html>
  );
}