import "./globals.css";
import type { Metadata } from "next";

import Header from "../components/Header";
import Providers from "../components/Providers";

export const metadata: Metadata = {
  title: "Galaxy Casino",
  description: "The best casino in the galaxy",
  applicationName: "Galaxy Casino",
  icons: {
    icon: "/favicon.ico",
    apple: "/applce-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
