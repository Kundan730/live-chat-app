import './globals.css';
import { Inter } from 'next/font/google';
import { Nunito } from 'next/font/google';
import { Poppins } from 'next/font/google';
import ToasterContext from './context/ToasterContext';
import AuthCotext from './context/AuthContext';
import ActiveStatus from './components/ActiveStatus';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

// const nunito = Nunito({ subsets: ['latin'] });

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['300', '400', '500', '600', '700'],
// });

export const metadata = {
  title: 'Chat App',
  description: 'This is a live chat Application...',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthCotext>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthCotext>
      </body>
    </html>
  );
}
