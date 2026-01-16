import React from 'react'; 
import type { Metadata, Viewport } from 'next'; 
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import '../styles/index.css';

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Dnyaneshwar Shinde | Digital Product Lead",
  description:
    "Product leader specializing in 0→1 MVPs, AI-enabled tools, and scalable SaaS platforms.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <Header />

        <main className="min-h-screen">{children}</main>

       
      </body>
    </html>
  );
}