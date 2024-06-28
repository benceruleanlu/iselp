import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar"
import Footer from "./components/footer"

const inter = Inter({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "ISELP for Everyone",
  description: "Digestable ISELP information for educators, staff, and administrators at Peel District School Board.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
// script for google programmable engine needs to be placed within the 'body' of a page, but seemingly cant do it when its inside of a nested thing