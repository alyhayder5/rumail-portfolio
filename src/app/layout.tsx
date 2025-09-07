import type { Metadata } from 'next';
import { Geist_Mono, Poppins } from 'next/font/google';
import './styles/globals.css';

const geistPoppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Rumail Abbas - Full Stack Developer | Web3',
  description:
    'Welcome to my portfolio! I am a passionate full stack developer and designer creating innovative digital experiences. Explore my projects, skills & journey in technology.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <body
        className={`${geistPoppins.variable} ${geistMono.variable} antialiased relative`}
      >
        {children}
      </body>
    </html>
  );
}
