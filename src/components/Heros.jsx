import React from "react";
import hero from "/images/background-image.png";

function Heros() {
  return (
    <div className='relative'>
            <img className='w-full' src={hero} alt="" />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
              <p className='lg:text-5xl font-bold sm:text-2xl text-l mt-5 md:text-3xl w-full mb-0 md:mb-3 m-auto md:font-bold'>Find Your <span className="text-baddhia-orange">Perfect Match, 
                Anywhere</span> in the World.
              </p>
              <p className="w-full text-xs md:text-sm mb-2">Finding the right person is tough, but we have made it easier. Whether you’re looking for love, friendship, or chat, our algorithm will connect you with someone who shares your interests and values.</p>
              <a href="https://play.google.com/store/apps/details?id=com.baddhia.app">
              <button
               className='bg-baddhia-orange md:py-3 mb-6 md:px-10 md:text-sm text-xs py-2 px-4 rounded-full'>Download Now
               </button>
               </a>
            </div>
          </div>
  );
}

export default Heros;