import type { Metadata } from "next";
import {
  Bodoni_Moda,
  Cormorant_Garamond,
  Inter,
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Ellé Fox | Actor, Writer & Voice Artist",
    template: "%s | Ellé Fox",
  },

  description:
    "Official creative portfolio for Ellé Fox, featuring acting, writing, voiceover, professional photography, credits, and career highlights.",

  keywords: [
    "Ellé Fox",
    "Ellé Fox actor",
    "Ellé Fox writer",
    "Ellé Fox voice artist",
    "acting reel",
    "screenwriter",
    "voiceover artist",
    "storyteller",
  ],

  authors: [
    {
      name: "Ellé Fox",
    },
  ],

  creator: "Ellé Fox",

  openGraph: {
    title: "Ellé Fox | Actor, Writer & Voice Artist",
    description:
      "Explore the acting, writing, voiceover work, and creative world of Ellé Fox.",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ellé Fox | Actor, Writer & Voice Artist",
    description:
      "Explore the acting, writing, voiceover work, and creative world of Ellé Fox.",
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
        className={`${cormorant.variable} ${inter.variable} ${bodoni.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}