import React from 'react';
import Link from 'next/link';

const HomeCategories = ({categories}) => {
  return (
    <section className='home-categories-section'>
			<div className="container mx-auto px-5 pt-16">
				<h3 className='title-font sm:text-4xl text-3xl mb-8 font-medium text-gray-900'>Shop for</h3>
				<div className='flex flex-wrap -mx-5 gap-y-10 md:flex-nowrap'>
					{categories && categories.map((item,i) => {
						return(
							<div key={i} className='w-1/2 md:w-1/4 px-5'>
								<Link href={`shop/${item}`} className="capitalize p-5 text-center border-2 border-black text-lg block">{item}</Link>
							</div>
						);
					})}
				</div>
			</div>
		</section>
  )
}

export default HomeCategories;