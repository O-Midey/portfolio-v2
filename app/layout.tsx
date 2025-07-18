import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "./_components/Navbar";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

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
