import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "North High Digital - We ship fast, clean software for founders & brands",
  description: "Design, build, and iterate — from idea to v1 to scale. Boutique software agency founded by Benjamin Thuroczy and Ardi Ahmed.",
  openGraph: {
    title: "North High Digital - We ship fast, clean software for founders & brands",
    description: "Design, build, and iterate — from idea to v1 to scale. Boutique software agency founded by Benjamin Thuroczy and Ardi Ahmed.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
