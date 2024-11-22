import type { Metadata } from "next";
import "./globals.scss";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { urbanist } from "@/data/font";
export const metadata: Metadata = {
  title: "StudenV",
  description: "Student Environment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager gtmId={""} />
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </head>
      <body className={`${urbanist.className} main`}>
        {children}
        <GoogleAnalytics gaId={""} />
      </body>
    </html>
  );
}
