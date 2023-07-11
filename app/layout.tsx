import "./globals.css";
import type { Metadata } from "next";

import Header from "../components/Header";
import Providers from "../components/Providers";

export const metadata: Metadata = {
  title: "Galaxy Casino",
  description: "The best casino in the galaxy",
  applicationName: "Galaxy Casino",
  //FIXME: Something does not work properly with the public folder
  icons: {
    icon: "/../public/favicon.ico",
    apple: "/../public/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
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
