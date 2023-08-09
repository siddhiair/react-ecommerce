import React, { useState } from "react";
import Link from "next/link";
import { useAppState } from "@/context/AppStateContext";

const CartItem = ({data}) => {
	const {removeCartItem, addToCart} = useAppState();
	const [qtyInput, setQtyInput] = useState(data.quantity);
	const removeItem = () => {
		const inputEl = document.querySelector(`.input-p${data.id}`);
		const qty = (parseInt(inputEl.value) - 1 < 0) ? 0 : parseInt(inputEl.value) - 1;
		setQtyInput(qty);
		removeCartItem(data.id,qty)
	}
	const addItem = () => {
		const inputEl = document.querySelector(`.input-p${data.id}`)
		const qty = parseInt(inputEl.value) + 1;
		setQtyInput(qty);
		addToCart(data)
	}
  return(
		<div className="cartItem-card flex items-center gap-x-3">
			<div className="shrink-0">
				<Link href={`/shop/${data.category}/${data.id}`} className="block">
					<img src={data.image} alt="" width={50} height={50} className="object-cover" />
				</Link>				
			</div>
			<div className="grow">
				<p className="text-base font-semibold mt-0 mb-1"><Link href={`/shop/${data.category}/${data.id}`} className="text-current">{data.title}</Link></p>
				<p className="text-sm m-0">${data.price}</p>
			</div>
			<div className="flex border border-slate-300">
				<button className="w-7 bg-slate-200" onClick={removeItem}>-</button>
				<input type="text" value={qtyInput} className={`w-7 text-center input-p${data.id}`} readOnly />
				<button className="w-7 bg-slate-200" onClick={addItem}>+</button>
			</div>
		</div>
	); 
}

export default CartItem;