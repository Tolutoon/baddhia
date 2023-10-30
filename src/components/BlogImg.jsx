import React from 'react'
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import blogImg from "/images/mohamed.png"
import carly from "/images/carly.png"
import nathan from "/images/nathan.png"



function BlogImg() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]) 

  return (
    <div className="embla" ref={emblaRef}>
    <div className="embla__container w-full h-full md:h-img-h ">
    <div className="embla__slide relative h-full md:h-full"><img src={carly} alt="" />
      <div className='absolute left-6 md:left-10 bottom-7 inset-0 flex items-end justify-left text-left text-xs font-bold sm:left-10 sm:text-[16px] text-white lg:text-2xl'>
      <p className='md:w-[600px] pr-5 flex flex-wrap'>Mastering Baddhia: A Comprehensive Guide to Navigating the App</p>
      </div>
      </div>
      <div className="embla__slide relative h-full md:h-full"><img src={carly} alt="" />
      <div className='absolute left-6 md:left-10 bottom-7 inset-0 flex items-end justify-left text-left text-xs font-bold sm:left-10 md:text-xl text-white lg:text-2xl'>
      <p className='md:w-[600px] pr-5 flex flex-wrap'>Finding Your Perfect Match: A Guide to Baddhia's Compatibility Features</p>
      </div>
      </div>
      <div className="embla__slide relative h-full md:h-full"><img src={nathan} alt="" />
      <div className='absolute left-6 md:left-10 bottom-7 inset-0 flex items-end justify-left text-left text-xs font-bold sm:left-10 md:text-xl text-white lg:text-2xl'>
      <p className='md:w-[700px] pr-5 flex flex-wrap'>More than Romance: Building Lasting Friendships on Baddhia Navigating the App</p>
      </div>
      </div>
    </div>
  </div>
    
  )
}

export default BlogImg