import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Sathwik Doddi",
  description: "Software Engineer & Computer Science Student at Georgia Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: 'Poppins, Arial, sans-serif' }}>
        <Navbar />
        <main className="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
