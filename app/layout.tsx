import type { Metadata } from "next";
import { Teko, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const teko = Teko({
  subsets: ["latin"],
  variable: "--font-teko",
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Venoma Sport",
  description:
    "Shop high-quality sportswear, shoes, and accessories at Venoma Sport. Discover durable and stylish gear designed for comfort, performance, and everyday active lifestyle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${teko.variable} ${poppins.variable} antialiased`}>
        <main className="w-full max-w-285 mx-auto overflow-hidden bg-white">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
