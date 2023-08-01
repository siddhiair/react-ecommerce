import React from 'react';
import Slider from "react-slick";
import ProductCard from '../common/ProductCard';

const HomeProducts = ({products}) => {
	var settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};
  return (
    <section className='home-product-section'>
			<div className="container mx-auto px-5 py-24">
				<h2 className='title-font sm:text-4xl text-3xl mb-8 font-medium text-gray-900'>Popular Products</h2>
				<Slider className='productcards-slider' {...settings}>
					{products && products.map((item,i) => {
						return(
							<ProductCard key={item.id} data={item} />
						);
					})}
				</Slider>
			</div>
		</section>
  )
}

export default HomeProducts;