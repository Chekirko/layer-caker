import type { Metadata } from "next";
import "../globals.css";
import { SanityLive } from "@/sanity/lib/live";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children} <SanityLive />
      </body>
    </html>
  );
}
