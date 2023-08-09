import React, { useState } from "react";
import Link from "next/link";
import {BsCartPlus} from 'react-icons/bs';
import { useAppState } from "@/context/AppStateContext";

const ProductCard = ({data}) => {
	const [isLoading, setIsLoading] = useState(false);
	const {addToCart} = useAppState(0);
	const handleCart = () => {
		setIsLoading(true);
		addToCart(data);
		setTimeout(()=>setIsLoading(false),500)
	}
  return(
		<div className="product-card">
			<div className="relative overflow-hidden">
				<Link href={`/shop/${data.category}/${data.id}`} className="block relative rounded bg-black/5 overflow-hidden p-5">
					<img alt={data.title} className="object-contain object-center w-full h-[220px] block product-img" src={data.image} />
				</Link>

				<div className="pc_add-to-card-wrap transition-transform absolute left-auto lg:left-0 right-0 bottom-0 z-10 p-3">
					<button type="button" className="pc_add-to-cart-btn w-full hidden lg:flex bg-white px-4 py-3 items-center justify-center gap-x-2 rounded shadow-xl" onClick={handleCart} disabled={isLoading}><BsCartPlus /> {isLoading ? 'Adding to Cart...' : 'Add to cart'}</button>
					<button type="button" className="pc_add-to-cart-btn lg:hidden bg-white p-4  rounded-full shadow-xl" onClick={handleCart} disabled={isLoading}><BsCartPlus /></button>
				</div>
			</div>
			<div className="mt-4">
				<h3 className="text-gray-500 text-xs tracking-widest capitalize title-font mb-1">{data.category}</h3>
				<h4 className="text-gray-900 title-font text-lg font-medium">{data.title}</h4>
				<p className="mt-1 text-indigo-500 font-semibold">${data.price}</p>
			</div>
			<div></div>
		</div>
	); 
}

export default ProductCard;