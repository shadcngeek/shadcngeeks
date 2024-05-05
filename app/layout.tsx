import type { Metadata, Viewport } from "next";

import "./globals.css";

import { GeistSans } from "geist/font/sans";
import { Inter, JetBrains_Mono as FontMono } from "next/font/google";

import { GoogleAnalytics } from "@next/third-parties/google";

import MegaNav from "@/components/headers/mega-nav";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/components/www/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "UI",
    "Free",
    "React",
    "Shadcn",
    "Next.js",
    "Crafted",
    "Designed",
    "Radix UI",
    "Shadcn/ui",
    "Components",
    "ShadcnGeeks",
    "Predesigned",
    "Open Source",
    "Tailwind CSS",
    "Server Components",
    "Client Components",
  ],
  authors: [
    {
      name: "shadcngeeks",
      url: "https://shadcngeeks.vercel.app",
    },
  ],
  creator: "shadcngeeks",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MegaNav>{children}</MegaNav>
        </ThemeProvider>
        {process.env.NODE_ENV === "production" && (
          <GoogleAnalytics gaId={"G-T5Y0Z1HMWD"} />
        )}
      </body>
    </html>
  );
}
