import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bandung Farmer",
  description: "Bandung Farmer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-white`}>{children}</body>
    </html>
  );
}
