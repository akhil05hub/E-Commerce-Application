import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import image1 from '../assets/image-1.jpg';
import image2 from '../assets/image-2.jpg';
import image3 from '../assets/image-3.jpg';
import image4 from '../assets/image-4.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Carousell = () => {
  return (
    <div className='h-[40vh] w-[100vw]'>
            <Carousel autoPlay interval={2000}  showStatus={false} showArrows={false} showThumbs={false} infiniteLoop>
                <div>
                    <img src={image1} className='h-[500px] w-full object-cover '/>
                </div>
                <div>
                    <img src={image2} className='h-[500px] w-full object-cover '/>
                </div>
                <div>
                    <img src={image3} className='h-[500px] w-full object-cover '/>
                </div>
                <div>
                    <img src={image4} className='h-[500px] w-full object-cover '/>
                </div>
            </Carousel>
    </div>
  )
}

export default Carousell
