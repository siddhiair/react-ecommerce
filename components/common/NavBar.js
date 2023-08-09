import React from 'react';
import Link from 'next/link';
import {BiShoppingBag,BiExclude,BiMenu} from 'react-icons/bi';
import { useRouter } from "next/router";
import { useAppState } from "@/context/AppStateContext";
import CartSidePanel from './CartSidePanel';


export default function NavBar() {
	const router = useRouter();
	const {cartCount} = useAppState();

	const toggleSidebar = (el) => {
		const targetEl = document.querySelector(`.${el}`);
		if(targetEl.classList.contains("in")){
			targetEl.classList.remove("in")
		}
		else{
			targetEl.classList.add("in")
		}
	}
  return (
    <header className="text-gray-600 body-font">
			<div className="container mx-auto">
				<div className='flex items-center justify-between gap-x-5 px-4 py-3'>
					<div className='md:order-1'>
						<Link href="/" className="font-bold text-gray-900 inline-flex items-center gap-x-1">
							<BiExclude />  
							ReactOnlineStore
						</Link>
					</div>
					<div className="flex items-center gap-x-5 md:order-3">
						<button className='inline-flex items-center gap-x-1' onClick={()=>toggleSidebar("cart-sidepanel")}>
							<BiShoppingBag /> Cart ({cartCount})
						</button>
						<button className='toggle-menu md:hidden' onClick={()=>toggleSidebar("site-nav")}>
							<BiMenu />
						</button>
					</div>
					<div className='site-nav md:order-2'>
						<nav className="md:flex flex-wrap items-center text-lg md:text-base text-center">
							<Link href="/shop" className={`block mr-5 py-2 hover:text-gray-900 ${router.pathname == "/shop" ? "font-semibold" : ""}`}>Shop</Link>
							<Link href="/about" className={`block mr-5 py-2 hover:text-gray-900 ${router.pathname == "/about" ? "font-semibold" : ""}`}>About</Link>
							<Link href="/contact" className={`block mr-5 py-2 hover:text-gray-900 ${router.pathname == "/contact" ? "font-semibold" : ""}`}>Contact</Link>
						</nav>
					</div>					
					<CartSidePanel />
				</div>
			</div>
		</header>
  )
}
