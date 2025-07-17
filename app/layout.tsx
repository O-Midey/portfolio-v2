import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "./_components/Navbar";

const poppins = Poppins({
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
    <html lang="en" className={poppins.variable}>
      <body className="bg-black text-white px-32 md:px-10 lg:px-36 py-20 font-poppins">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
