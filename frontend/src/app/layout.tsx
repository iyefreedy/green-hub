import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "Green Hub",
  description:
    "Green Hub is a sustainable marketing community platform that connects eco-friendly businesses. Join to collaborate, share resources, and expand your network within the sustainable business ecosystem.",
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
