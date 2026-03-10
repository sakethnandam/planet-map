import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wemo - Modern Website Solutions for Small Businesses",
  description: "Expert website redesign, SEO optimization, and maintenance services. Transform your restaurant or small business with our modern, clean web solutions.",
  keywords: "website redesign, SEO, restaurant websites, small business websites, web development, digital marketing",
  authors: [{ name: "Wemo" }],
  openGraph: {
    title: "Wemo - Modern Website Solutions",
    description: "Expert website redesign and SEO for small businesses",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
