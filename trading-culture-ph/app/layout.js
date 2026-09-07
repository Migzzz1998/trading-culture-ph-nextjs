import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://tradingcultureph.com"; // Update with actual domain

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteConfig.communityName} — Learn to Trade, Free, Together`,
  description:
    "Join a free trading community offering signals, courses, webinars, mentoring, and live sessions. Start learning with a regulated broker partner.",
  openGraph: {
    title: `${siteConfig.communityName} — Learn to Trade, Free, Together`,
    description:
      "Join a free trading community offering signals, courses, webinars, mentoring, and live sessions. Start learning with a regulated broker partner.",
    url: siteUrl,
    siteName: siteConfig.communityName,
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "/og-image.png", // Create this 1200x630 image
        width: 1200,
        height: 630,
        alt: `${siteConfig.communityName} — Free Trading Education`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.communityName} — Learn to Trade, Free, Together`,
    description:
      "Join a free trading community offering signals, courses, webinars, mentoring, and live sessions.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0e14",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} ${inter.variable} ${jetbrains.variable} antialiased bg-base`}
      >
        {children}
      </body>
    </html>
  );
}
