import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ROS Industries | Precision Engineering & Industrial Solutions",
  description: "Global leader in industrial hydraulics, fabrication, and custom engineering solutions. Serving automotive, aerospace, and energy sectors with high-performance technologies.",
  keywords: [
    "Industrial Automation",
    "Hydraulics",
    "Electric Drives",
    "Project Fabrication",
    "Engineering Solutions",
    "Manufacturing India",
    "Pneumatic Systems"
  ],
  openGraph: {
    title: "ROS Industries | Engineering Excellence",
    description: "High-performance industrial solutions for global enterprises.",
    url: "https://ros-industries.com",
    siteName: "ROS Industries",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ROS Industries - Precision Engineering",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ROS Industries | Global Engineering",
    description: "Precision hydraulics and fabrication solutions.",
    images: ["/og-image.png"],
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased font-sans text-ros-gray-dark bg-white`}>
        {children}
      </body>
    </html>
  );
}
