import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DevLog – Minimal Markdown Blog",
  description: "A clean developer-focused markdown blog built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900`}
      >
        {/* Global Header */}
        <Header />

        {/* Main Content */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
