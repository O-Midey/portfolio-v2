import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "./_components/Navbar";
import type { Metadata } from "next";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-black text-white mx-5 my-5 md:mx-10 md:my-10 font-poppins h-screen">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
