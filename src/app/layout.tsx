import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";

import Header from "@/components/Header";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

// const spaceMono = Space_Mono({subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Galaxy Casino",
  description: "The best casino in the galaxy",
  applicationName: "Galaxy Casino",
  //FIXME: Something does not work properly with the icons
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
