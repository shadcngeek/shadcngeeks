import type { Metadata } from "next";

import "./globals.css";

import { GeistSans } from "geist/font/sans";
import { Inter, JetBrains_Mono as FontMono } from "next/font/google";

import { GoogleAnalytics } from '@next/third-parties/google'

import MegaNav from "@/components/headers/mega-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" id="mode" className="light">
      <body className={GeistSans.className}>
        <MegaNav>{children}</MegaNav>
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS as string} />
      </body>
    </html>
  );
}
