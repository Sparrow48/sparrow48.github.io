'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import { NextUIProvider } from '@nextui-org/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="light">
            <div className=" font-robotoSerif min-h-screen dark:bg-slate-900 dark:text-white">
              <div className="max-w-4xl mx-auto">
                <Header />
                {children}
                <Footer />
              </div>
            </div>
          </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
