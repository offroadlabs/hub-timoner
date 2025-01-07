import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BASE_URL } from "@/lib/constants";

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
    default: "Sébastien Timoner - Hub de liens",
    template: "%s | Sébastien TIMONER",
  },
  description:
    "Portfolio professionnel présentant mes projets et compétences en développement web",
  keywords: ["développeur web", "TypeScript", "React", "Next.js", "portfolio"],
  authors: [{ name: "Sébastien Timoner" }],
  creator: "Sébastien Timoner",
  metadataBase: new URL(BASE_URL),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Sébastien TIMONER - hub de liens",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sébastien TIMONER - hub de liens",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@sebtimoner",
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
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="rgba(158, 195, 58, 1)" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
