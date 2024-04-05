import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kitabisa | Technical Test",
  description: "Kitabisa sample campaign list page for technical test purpose",
  keywords: "kitabisa, campaign, techinal test"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
