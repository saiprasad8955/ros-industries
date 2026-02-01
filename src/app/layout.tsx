import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ROS Industries | Precision Engineering Solutions",
  description: "Global leader in industrial hydraulics, electric drives, and linear motion technologies for automotive, aerospace, and energy sectors.",
  keywords: ["Industrial Automation", "Hydraulics", "Electric Drives", "Linear Motion", "Engineering", "Manufacturing"],
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
