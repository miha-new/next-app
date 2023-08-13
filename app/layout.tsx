import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import Header from '../components/Header';
import Footer from '../components/Footer';

const poppins = Poppins({
  weight: ['400','500','600','700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={poppins.className}>
      <div className="flex flex-col min-h-full">
        <Header />
        <main className="flex-auto p-5 xl:py-8">
          <div className="xl:max-w-7xl xl:m-auto">
            { children }
          </div>
        </main>
        <Footer />
      </div>
    </body>
  </html>
);

export default RootLayout;
