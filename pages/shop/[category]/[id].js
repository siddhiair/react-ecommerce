import React from 'react';
import {AiFillStar} from 'react-icons/ai';
import { IconContext } from "react-icons";
//import useUpdateCart from "@/hooks/useUpdateCart";
import { useState } from 'react';

const Product = ({productDetails:data}) => {
  //const {addToCart,isLoading} = useUpdateCart();
  const [isLoading, setIsLoading] = useState(false)

	const handleAddToCart = () => {
		console.log("test")
	}
  return (
    <>
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-wrap justify-between -mx-5 items-center xl:w-10/12 xl:mx-auto">
          <div className='w-full md:w-5/12 px-4 shrink-0'>
            <img alt={data.title} className="max-w-full" src={data.image} />
          </div>
          <div className="w-full md:w-5/12 px-4 shrink-0 mt-6 md:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">{data.category}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-3">{data.title}</h1>
            <div className="flex mb-5">
              <div className="flex items-center gap-x-1">
                <span className='flex items-center gap-x-1'>
                  <IconContext.Provider value={{className:"text-blue-800" }}>
                    <div><AiFillStar /></div>
                  </IconContext.Provider>
                  {data.rating.rate}/5
                </span>
                <span className="text-gray-600 ml-3">({data.rating.count} Reviews)</span>
              </div>
            </div>
            <p className="leading-relaxed">{data.description}</p>
            <div className='mt-5'>
              <span className="title-font font-medium text-2xl text-gray-900">${data.price}</span>
            </div>
            <div className="mt-6">
              <button className="pc_add-to-cart-btn w-full text-white bg-blue-800 border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 rounded" onClick={handleAddToCart} disabled={isLoading}>{isLoading ? 'Adding to Cart...' : 'Add to cart'}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://fakestoreapi.com/products')
  const products = await res.json()

  const paths = products.map((prod) => ({
    params: { id: prod.id.toString(), category: prod.category },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({params}) { 
  //const {id} = context.params;
  //Fetch products data from the API
  const productResponse = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const productDetails = await productResponse.json(); 
  return {
    props: {
      productDetails
    },
  };
}

export default Product;
