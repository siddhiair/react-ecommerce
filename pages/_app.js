import NavBar from '@/components/common/NavBar';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import SiteFooter from '@/components/common/SiteFooter';
import { useState } from 'react';
import { AppStateProvider } from '@/context/AppStateContext';

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  const [cartItems,setCartItems] = useState([]);
  const hideTogglePanel = () => {
    const targetEls = document.querySelectorAll('.bg-overlay, .toggle-panel');
		targetEls.forEach(targetEl => {
				targetEl.classList.remove("in");
		});
  }
  return(
    <AppStateProvider>
      <div className={`flex flex-col min-h-screen ${inter.className}`}>
        <NavBar cartCount={cartItems.length} />
        <main className='main-content grow'>
          <Component {...pageProps} />
        </main>
        <SiteFooter />
      </div>
      <div className='bg-overlay' onClick={hideTogglePanel}></div>
    </AppStateProvider>
  );
}
