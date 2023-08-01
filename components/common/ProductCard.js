import React from "react";
import Link from "next/link";
import styles from './ProductCard.module.css';
import {BsCartPlus} from 'react-icons/bs';

const ProductCard = ({data}) => {
  return(
		<div class="product-card">
			<div className="relative overflow-hidden">
				<Link href={`/products/${data.id}`} className="block relative rounded bg-black/5 overflow-hidden p-5">
					<img alt={data.title} className={`object-contain object-center w-full h-[220px] block ${styles.product_img}`} src={data.image} />
				</Link>

				<div className="pc_add-to-card-wrap transition-transform absolute left-0 right-0 bottom-0 z-10 p-3">
					<button type="button" className="pc_add-to-cart-btn w-full bg-white px-4 py-3 flex items-center justify-center gap-x-2 rounded shadow-xl"><BsCartPlus /> Add to Cart</button>
				</div>
			</div>
			<div class="mt-4">
				<h3 class="text-gray-500 text-xs tracking-widest capitalize title-font mb-1">{data.category}</h3>
				<h4 class="text-gray-900 title-font text-lg font-medium">{data.title}</h4>
				<p class="mt-1 text-blue-800 font-semibold">${data.price}</p>
			</div>
		</div>
	); 
}

export default ProductCard;