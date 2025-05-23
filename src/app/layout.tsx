import type { Metadata } from 'next';
import { Montserrat, Karla } from 'next/font/google';
import './globals.css';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Header } from '@/components/Header';

const montserratSans = Montserrat({
  variable: '--font-montserrat-sans',
  subsets: ['latin'],
  display: 'swap',
});

const karlaSans = Karla({
  variable: '--font-karla-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Guilherme Matos - Dev',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserratSans.variable} ${karlaSans.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
