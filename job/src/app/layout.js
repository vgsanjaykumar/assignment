import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Home from "./components";


const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Job Portal",
  description: "Post and discover top job openings across India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Home>{children}</Home>
      </body>
    </html>
  );
}
