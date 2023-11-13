import React from 'react'
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import slide10 from "/images/slide10.jpg"
import slide7 from "/images/slide7.jpg"
import slide11 from "/images/slide11.jpg"
import slide9 from "/images/slide9.jpg"
import slide8 from "/images/slide8.jpg"



function BlogAdviceSlide() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]) 

  return (
    <div className="embla" ref={emblaRef}>
    <div className="embla__container w-full h-full md:h-img-h ">
    <div className="embla__slide relative h-full md:h-full"><img src={slide7} alt="" />
      <div className='absolute left-6 md:left-10 bottom-7 inset-0 flex items-end justify-left text-left text-xs font-bold sm:left-10 sm:text-[16px] text-white lg:text-2xl'>
      <p className='md:w-[600px] pr-5 flex flex-wrap'>How to Navigate Dating App Fatigue and Rediscover Love with Baddhia App.</p>
      </div>
      </div>
      <div className="embla__slide relative h-full md:h-full"><img src={slide8} alt="" />
      <div className='absolute left-6 md:left-10 bottom-7 inset-0 flex items-end justify-left text-left text-xs font-bold sm:left-10 md:text-xl text-white lg:text-2xl'>
      <p className='md:w-[600px] pr-5 flex flex-wrap'>How to Build Trust in Your Relationship</p>
      </div>
      </div>
      <div className="embla__slide relative h-full md:h-full"><img src={slide9} alt="" />
      <div className='absolute left-6 md:left-10 bottom-7 inset-0 flex items-end justify-left text-left text-xs font-bold sm:left-10 md:text-xl text-white lg:text-2xl'>
      <p className='md:w-[700px] pr-5 flex flex-wrap'>How to Navigate First Date Jitters: A Guide to Calm and Confidence</p>
      </div>
      </div>
      <div className="embla__slide relative h-full md:h-full"><img src={slide10} alt="" />
      <div className='absolute left-6 md:left-10 bottom-7 inset-0 flex items-end justify-left text-left text-xs font-bold sm:left-10 md:text-xl text-white lg:text-2xl'>
      <p className='md:w-[700px] pr-5 flex flex-wrap'>Cultivating Healthy Relationship Habits That Strengthen Your Relationship</p>
      </div>
      </div>
      <div className="embla__slide relative h-full md:h-full"><img src={slide11} alt="" />
      <div className='absolute left-6 md:left-10 bottom-7 inset-0 flex items-end justify-left text-left text-xs font-bold sm:left-10 md:text-xl text-white lg:text-2xl'>
      <p className='md:w-[700px] pr-5 flex flex-wrap'>The Importance of Self-Love in Dating</p>
      </div>
      </div>
    </div>
  </div>
    
  )
}

export default BlogAdviceSlide