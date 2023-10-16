import React from "react";
import hero from "/images/background-image.png";

function Heros() {
  return (
    <div className='relative'>
      <div className="h-[7vh]"></div>
            <img className='w-full h-[45vh] object-fit' src={hero} alt="" />
            <div className='absolute top-1/2 min-w-[300px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
              <p className='lg:text-5xl font-semibold text-3xl text-l mt-5 md:text-3xl w-full mb-2 md:mb-3 m-auto pt-10  md:font-bold'>Find Your <span className="text-baddhia-orange">Perfect Match, 
                Anywhere</span> in the World.
              </p>
              <p className="w-full text-xs md:text-sm mb-4 min-w-[220px] text-center">Finding the right person is tough, but we have made it easier. Whether you’re looking for love, friendship, or chat, our algorithm will connect you with someone who shares your interests and values.</p>
              <a
          href="https://play.google.com/store/apps/details?id=com.baddhia.app"
          target="_blank"
        >
          <button
            type="submit"
            className="bg-baddhia-orange p-2 xl:px-12 px-6 rounded-[16px] font-semibold xl:text-base text-[12px] text-white transition-all duration-300 hover:scale-105"
          >
            Download Now
          </button>
        </a>
            </div>
          </div>
  );
}

export default Heros;