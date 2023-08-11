import React from "react";
import Link from "next/link";
import CartItem from './CartItem';
import { useAppState } from "@/context/AppStateContext";

const CartSidePanel = () => {
	const {cartCount, cartItems, clearCart} = useAppState();
  return(
		<div className='cart-sidepanel toggle-panel'>						
			{cartCount===0 && 
				<div className='text-lg text-center'>Cart is empty</div>
			}
			{cartCount>0 && 
				<div className='flex h-full flex-col justify-between gap-y-6'>
					<div className='flex flex-col gap-y-6'>
						{
							cartItems.map((el)=>{
								return(
									<CartItem key={el.id} data={el} />
								)
							})
						}
					</div>
					<div>
						<Link href="/" className="block text-center text-white bg-blue-800 border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 rounded mb-2">Checkout</Link>
						<Link href="/" className="block text-center py-2 px-6 bg-slate-100 border focus:outline-none rounded" onClick={clearCart}>Clear Cart</Link>
					</div>
				</div>
			}						
		</div>
	); 
}

export default CartSidePanel;