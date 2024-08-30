import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "World's First AI-Powered Slug Generator - Optimize Your URLs with Smart Technology",
  description:
    "Discover the world's first AI-powered slug generator. Effortlessly create SEO-friendly, optimized URLs tailored to your content with cutting-edge AI technology. Enhance your website's performance and user experience today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
