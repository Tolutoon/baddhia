import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import blogImg from "/images/mohamed.png"
import carly from "/images/carly.png"
import nathan from "/images/nathan.png"
import Autoplay from 'embla-carousel-autoplay'

function BlogImg() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]) 

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container w-full h-full md:h-img-h ">
      <div className="embla__slide relative h-full md:h-full"><img src={carly} alt="" />
        <div className='absolute left-6 md:left-10 bottom-7 inset-0 flex items-end justify-left text-left text-sm font-bold sm:left-10 md:text-xl text-white lg:text-2xl'>
        <p >Mastering Baddhia: A Comprehensive Guide to <br></br> Navigating the App</p>
        </div>
        </div>
        <div className="embla__slide relative h-full md:h-full"><img src={carly} alt="" />
        <div className='absolute left-6 md:left-10 bottom-7 inset-0 flex items-end justify-left text-left text-sm font-bold sm:left-10 md:text-xl text-white lg:text-2xl'>
        <p >Finding Your Perfect Match: A Guide to <br></br>Baddhia's Compatibility Features</p>
        </div>
        </div>
        <div className="embla__slide relative h-full md:h-full"><img src={nathan} alt="" />
        <div className='absolute left-6 md:left-10 bottom-7 inset-0 flex items-end justify-left text-left text-sm font-bold sm:left-10 md:text-xl text-white lg:text-2xl'>
        <p >More than Romance: Building Lasting Friendships <br></br>on Baddhia Navigating the App</p>
        </div>
        </div>
      </div>
    </div>
    
  )
}

export default BlogImg


