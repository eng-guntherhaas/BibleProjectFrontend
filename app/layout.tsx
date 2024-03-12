import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/styles/globals.css';
import { Navbar, Footer } from '@/components/common';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Projet Bible",
  description: "Consumer l'API de la Bible",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
          <>
            {children}
          </>
        <Footer />
        </body>
    </html>
  );
}
