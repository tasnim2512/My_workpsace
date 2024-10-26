import { Inter } from 'next/font/google';
import './globals.css'; 

const inter = Inter({
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'], 
});

export const metadata = {
  title: 'My workspace',
  description: 'My Workspace is a project management platform designed to help teams and individuals streamline their workflow, collaborate effectively, and achieve goals.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
