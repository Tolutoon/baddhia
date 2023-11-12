import React from 'react'
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import slide4 from "/images/slide4.jpg"
import slide1 from "/images/slide1.jpg"
import slide5 from "/images/slide5.jpg"
import slide3 from "/images/slide3.jpg"
import slide6 from "/images/slide6.png"
import slide2 from "/images/slide2.jpg"



function BlogImg() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]) 

  return (
    <div className="embla" ref={emblaRef}>
    <div className="embla__container w-full h-full md:h-img-h ">
    <div className="embla__slide relative h-full md:h-full"><img src={slide1} alt="" />
      <div className='absolute left-6 md:left-10 bottom-7 inset-0 flex items-end justify-left text-left text-xs font-bold sm:left-10 sm:text-[16px] text-white lg:text-2xl'>
      <p className='md:w-[600px] pr-5 flex flex-wrap'>Mastering Baddhia: A Comprehensive Guide to Navigating the App</p>
      </div>
      </div>
      <div className="embla__slide relative h-full md:h-full"><img src={slide2} alt="" />
      <div className='absolute left-6 md:left-10 bottom-7 inset-0 flex items-end justify-left text-left text-xs font-bold sm:left-10 md:text-xl text-white lg:text-2xl'>
      <p className='md:w-[600px] pr-5 flex flex-wrap'>Finding Your Perfect Match: A Guide to Baddhia's Compatibility Features</p>
      </div>
      </div>
      <div className="embla__slide relative h-full md:h-full"><img src={slide3} alt="" />
      <div className='absolute left-6 md:left-10 bottom-7 inset-0 flex items-end justify-left text-left text-xs font-bold sm:left-10 md:text-xl text-white lg:text-2xl'>
      <p className='md:w-[700px] pr-5 flex flex-wrap'>More than Romance: Building Lasting Friendships on Baddhia Navigating the App</p>
      </div>
      </div>
      <div className="embla__slide relative h-full md:h-full"><img src={slide4} alt="" />
      <div className='absolute left-6 md:left-10 bottom-7 inset-0 flex items-end justify-left text-left text-xs font-bold sm:left-10 md:text-xl text-white lg:text-2xl'>
      <p className='md:w-[700px] pr-5 flex flex-wrap'>Rekindling Romance: Baddhia's Guide to Spicing Up Relationships</p>
      </div>
      </div>
      <div className="embla__slide relative h-full md:h-full"><img src={slide5} alt="" />
      <div className='absolute left-6 md:left-10 bottom-7 inset-0 flex items-end justify-left text-left text-xs font-bold sm:left-10 md:text-xl text-white lg:text-2xl'>
      <p className='md:w-[700px] pr-5 flex flex-wrap'>How to Date with Confidence and Debunk the Desperation Myth with Baddhia</p>
      </div>
      </div>
      <div className="embla__slide relative h-full md:h-full"><img src={slide6} alt="" />
      <div className='absolute left-6 md:left-10 bottom-7 inset-0 flex items-end justify-left text-left text-xs font-bold sm:left-10 md:text-xl text-white lg:text-2xl'>
      <p className='md:w-[700px] pr-5 flex flex-wrap'>How to Create a Safe Haven in Your Dating Journey with Baddhia's Measures Against Ghosting and Catfishing</p>
      </div>
      </div>
    </div>
  </div>
    
  )
}

export default BlogImg