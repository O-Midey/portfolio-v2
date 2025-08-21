import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "./_components/Navbar";
import type { Metadata } from "next";
import Layout from "./_components/Layout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Omotosho David ",
  description: "Full-Stack Developer & Blockchain Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
