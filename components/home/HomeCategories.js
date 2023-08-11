import React from 'react';
import Link from 'next/link';

const HomeCategories = ({categories}) => {
  return (
    <section className='home-categories-section'>
			<div className="container mx-auto px-5 pt-16">
				<h3 className='title-font sm:text-4xl text-3xl mb-8 font-medium text-gray-900'>Shop for</h3>
				<div className='flex flex-wrap -mx-2 gap-y-4 md:flex-nowrap'>
					{categories && categories.map((item,i) => {
						return(
							<div key={i} className='w-1/2 md:w-1/4 px-2'>
								<Link href={`shop/${item}`} className="capitalize py-4 px-3 border-2 border-black text-lg flex text-center justify-center h-full items-center hover:text-blue-800 hover:border-blue-800">{item}</Link>
							</div>
						);
					})}
				</div>
			</div>
		</section>
  )
}

export default HomeCategories;