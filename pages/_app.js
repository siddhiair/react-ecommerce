import NavBar from '@/components/common/NavBar';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import SiteFooter from '@/components/common/SiteFooter';

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return(
    <div className={inter.className}>
      <NavBar />
      <main>
        <Component {...pageProps} />
      </main>
      <SiteFooter />
    </div>
  );
}
