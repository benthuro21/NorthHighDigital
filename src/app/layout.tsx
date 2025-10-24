import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
  weight: ["400", "500", "600", "700"],
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0B1120',
};

export const metadata: Metadata = {
  title: "North High Digital - We ship fast, clean software for founders & brands",
  description: "Design, build, and iterate — from idea to v1 to scale. Boutique software agency founded by Benjamin Thuroczy and Ardi Ahmed.",
  keywords: ["software agency", "web development", "app development", "digital transformation", "automation", "AI solutions"],
  authors: [{ name: "North High Digital" }],
  creator: "North High Digital",
  icons: {
    icon: "/nhd-favicon.svg",
  },
  openGraph: {
    title: "North High Digital - We ship fast, clean software for founders & brands",
    description: "Design, build, and iterate — from idea to v1 to scale. Boutique software agency founded by Benjamin Thuroczy and Ardi Ahmed.",
    type: "website",
    locale: "en_US",
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
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
