import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shrimad Rejchandra Mission",
  description: "Join the 35 days of Gaam Celebrations at SRM. Experience cultural events, festivities, and community gatherings.",
  keywords: "Shrimad Rejchandra Mission, SRM events, Gaam Celebrations, cultural events, festival, community",
  openGraph: {
    title: "Shrimad Rejchandra Mission - SRM Events",
    description: "Join the 35 days of Gaam Celebrations at SRM. Experience cultural events, festivities, and community gatherings.",
    images: "/images/banner/Banner-1.webp",
    url: "https://yourdomain.com/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}

