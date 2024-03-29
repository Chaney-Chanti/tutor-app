import './globals.css';
import {Navbar} from '@/components'

export const metadata = {
  title: 'Tootr',
  description: 'Discover the best services in the world',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
