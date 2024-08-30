import { Analytics } from "@vercel/analytics/react";
import { Raleway } from "next/font/google";
import Footer from "./components/Footer";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata = {
  title:
    "World's First AI-Powered Slug Generator - Optimize Your URLs with Smart Technology",
  description:
    "Discover the world's first AI-powered slug generator. Effortlessly create SEO-friendly, optimized URLs tailored to your content with cutting-edge AI technology. Enhance your website's performance and user experience today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://slugifyai.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta
          property="og:image"
          content="https://ogcdn.net/6064b869-74ed-4eb9-b76c-0b701ffe7e6b/v4/slugifyai.vercel.app/World's%20First%20AI-Powered%20Slug%20Generator%20-%20Optimize%20Your%20URLs%20with%20Smart%20Technology/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2F65479a96-df81-49a0-9711-227cb5f5d059.jpg%3Ftoken%3Dzvh25gZWKF9blxwagRXb3SljiIRy7Axljpnxpy8zIc8%26height%3D900%26width%3D1200%26expires%3D33260996414/og.png"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="slugifyai.vercel.app" />
        <meta property="twitter:url" content="https://slugifyai.vercel.app/" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image"
          content="https://ogcdn.net/6064b869-74ed-4eb9-b76c-0b701ffe7e6b/v4/slugifyai.vercel.app/World's%20First%20AI-Powered%20Slug%20Generator%20-%20Optimize%20Your%20URLs%20with%20Smart%20Technology/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2F65479a96-df81-49a0-9711-227cb5f5d059.jpg%3Ftoken%3Dzvh25gZWKF9blxwagRXb3SljiIRy7Axljpnxpy8zIc8%26height%3D900%26width%3D1200%26expires%3D33260996414/og.png"
        />
      </head>
      <body className={raleway.className}>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
