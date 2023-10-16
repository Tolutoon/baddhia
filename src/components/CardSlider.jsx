import React, {useRef, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from 'swiper/core';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Data from "../Data";

SwiperCore.use([Navigation, Pagination, Scrollbar]);

function CardSlider() {
  const swiperRef = useState(null);

  const slideToNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const slideToPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div className="overflow-hidden">
      <Swiper

        spaceBetween={50}
        slidesPerView={1}

        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {Data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="h-[520px] pt-20 relative xl:my-10 my-5 mb-20  md:hidden flex flex-row duration-500">
              <div
                className={`card flex flex-col gap-[16px] w-fit py-10 px-5 mb-20 justify-center mx-5 items-center bg-white`}
              >
                <span className="text-[54px] text-baddhia-orange">❝</span>
                <p className="text-base text-gray-500 text-center w-[90%]">
                  {item.description}
                </p>
                <h3 className="font-semibold">{item.name}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="flex mt-20">
          <div className="absolute -translate-x-0 translate-y-[-50%] left-[35%] md:left-[45%] bottom-[5%] p-2 text-2xl cursor-pointer rounded-full text-baddhia-orange bg-white shadow-md" onClick={slideToPrev}>
            <BsChevronCompactLeft size={24} onTouchStart={slideToPrev}/>
          </div>
          <div className="absolute -translate-x-0 translate-y-[-50%] p-2 right-[35%] md:right-[45%] bottom-[5%] text-2xl cursor-pointer rounded-full text-baddhia-orange bg-white shadow-md" onClick={slideToNext}>
            <BsChevronCompactRight size={24} onTouchStart={slideToNext}/>
          </div>
        </div>
      </Swiper>
    </div>
  );

}

export default CardSlider;
