import "./globals.css";
import clsx from "clsx";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Sidebar from "../components/navigationbar";
import { Analytics } from "@vercel/analytics/react";

const kaisei = localFont({
  src: "../public/fonts/kaisei-tokumin-latin-700-normal.woff2",
  weight: "700",
  variable: "--font-kaisei",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Antonio Karam",
    template: "%s | Antonio Karam",
  },
  metadataBase: new URL("https://antoniokaram.com"),
  description: "Software Engineer and Cybersecurity Professional",
  openGraph: {
    title: "Antonio Karam",
    description: "Software Engineer and Cybersecurity Professional",
    url: "https://antoniokaram.com",
    siteName: "Antonio Karam",
    images: [
      {
        url: "https://antoniokaram.com/logo.png",
        width: 500,
        height: 500,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        "text-black bg-white dark:text-white dark:bg-[#121212]",
        kaisei.variable
      )}
    >
      <body className="sticky antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <Sidebar />
        <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
