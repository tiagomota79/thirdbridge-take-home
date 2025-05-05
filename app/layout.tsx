import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { getAllUsers } from '@/lib/actions/user.actions';
import UsersSection from '@/components/users-section';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Thirdbridge Take Home Test',
  description: 'Developed by Tiago Mota',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const users = await getAllUsers();

  return (
    <html lang='en'>
      <body
        className={`md:grid md:grid-cols-5 max-h-screen p-8 pb-20 gap-4 sm:p-12 font-[family-name:var(--font-geist-sans)] ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UsersSection users={users} />
        {children}
      </body>
    </html>
  );
}
