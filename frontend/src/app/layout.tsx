import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layoutComponents/Header';
import Main from '@/components/layoutComponents/Main';
import classNames from 'classnames';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Check card app',
  description:
    'This is a simple check card application built with React/Next, TypeScript, and Tailwind CSS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bodyClass = classNames(
    inter.className,
    'flex flex-col h-screen bg-background overflow-hidden'
  );

  const headerClass = classNames(
    'h-[110px] md:h-[50px] w-full flex flex-col md:flex-row justify-between p-5'
  );

  const mainClass = classNames('flex-1 overflow-auto w-full bg-background');

  return (
    <html lang="en">
      <body className={bodyClass}>
        <Header className={headerClass} />
        <Main className={mainClass}>{children}</Main>
      </body>
    </html>
  );
}
