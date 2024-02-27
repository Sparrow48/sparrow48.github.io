'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import { NextUIProvider } from '@nextui-org/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" font-robotoSerif min-h-screen dark:bg-black dark:text-white">
          <div className="max-w-4xl mx-auto">
            <NextUIProvider>
              <Header />
              {children}
              <Footer />
            </NextUIProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
