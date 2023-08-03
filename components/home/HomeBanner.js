import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import {BsArrowRight} from 'react-icons/bs';

const HomeBanner = () => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};
  return (
    <section className='home-hero'>
      <Slider {...settings}>
				<div>
					<div className="container mx-auto px-5">
						<div className='px-5 py-24 slide-wrap rounded overflow-hidden relative' style={{background:"#eee url('/banner-image.jpg') no-repeat center center",backgroundSize:"cover"}}>
						<div className="text-center lg:w-2/3 w-full mx-auto relative z-10">
							<h1 className="title-font text-3xl sm:text-4xl lg:text-5xl mb-6 font-medium text-gray-900 leading-16 text-white">Level up your style with our brand new collection</h1>
							<div className="flex justify-center">
								<Link href="/shop" className="inline-flex items-center gap-x-3 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
									Shop Now
									<BsArrowRight />
								</Link>
							</div>
						</div>
						</div>
					</div>
				</div>
			</Slider>
    </section>
  )
}

export default HomeBanner;
