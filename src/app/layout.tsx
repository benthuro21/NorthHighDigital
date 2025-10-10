import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AT Studios - We ship fast, clean software for founders & brands",
  description: "Design, build, and iterate — from idea to v1 to scale. Boutique software agency founded by Ben Thuroczy and Ardi Ahmed.",
  openGraph: {
    title: "AT Studios - We ship fast, clean software for founders & brands",
    description: "Design, build, and iterate — from idea to v1 to scale. Boutique software agency founded by Ben Thuroczy and Ardi Ahmed.",
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
    <html lang="en">
      <body
        className={`${manrope.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
