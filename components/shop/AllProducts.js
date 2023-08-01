import React from 'react';
import ProductCard from '../common/ProductCard';

const AllProducts = ({products}) => {
  return (
    <section className='home-product-section'>
			<div className="container mx-auto px-5 py-24">
				<h2 className='title-font sm:text-4xl text-3xl mb-8 font-medium text-gray-900'>All Products</h2>
				<div className='flex flex-wrap -mx-4 gap-y-8'>
					{products && products.map((item,i) => {
						return(
							<div key={item.id} className='px-4 w-full sm:w-1/2 md:w-1/3 xl:w-1/4'>
								<ProductCard data={item} />
							</div>
						);
					})}
				</div>
			</div>
		</section>
  )
}

export default AllProducts;