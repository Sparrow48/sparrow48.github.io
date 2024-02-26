import { Inter } from 'next/font/google';
import './globals.css';

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
            <h1>Header</h1>
            {children}
            <h1>Footer</h1>
          </div>
        </div>
      </body>
    </html>
  );
}
