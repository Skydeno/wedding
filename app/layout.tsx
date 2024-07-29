import type { Metadata } from "next";
import { Dancing_Script, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const dancing_script = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dance",
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open",
});

export const metadata: Metadata = {
  title: "Ślub Alicji i Konrada",
  description: "Stworzone z miłością",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${dancing_script.variable} ${open_sans.variable} xl:w-3/4 m-auto pl-6 pr-6`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
