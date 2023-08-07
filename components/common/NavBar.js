import React from 'react';
import Link from 'next/link';
import {BiShoppingBag,BiExclude} from 'react-icons/bi';
import { useRouter } from "next/router";
import useUpdateCart from "@/hooks/useUpdateCart";

export default function NavBar() {
	const router = useRouter();
	const {cartItems} = useUpdateCart();

  return (
    <header className="text-gray-600 body-font">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<Link href="/" className="font-bold text-gray-900 inline-flex items-center gap-x-1">
					<BiExclude />  
					ReactOnlineStore
				</Link>
				<nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
					<Link href="/shop" className={`mr-5 hover:text-gray-900 ${router.pathname == "/shop" ? "font-semibold" : ""}`}>Shop</Link>
					<Link href="/about" className="mr-5 hover:text-gray-900">About</Link>
					<Link href="/contact" className="mr-5 hover:text-gray-900">Contact</Link>
				</nav>
				<div>
					<span className='inline-flex items-center gap-x-1'>
						<BiShoppingBag /> Cart ({cartItems.length})
					</span>
				</div>
			</div>
		</header>
  )
}
