import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jana Duraisamy | Python & Full-Stack Developer",
  description:
    "Portfolio of Jana Duraisamy, a Python and full-stack developer building practical software solutions for real-world problems.",
  keywords: [
    "Jana Duraisamy",
    "Python Developer",
    "Full-Stack Developer",
    "Next.js",
    "Django",
  ],
  authors: [{ name: "Jana Duraisamy" }],
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
