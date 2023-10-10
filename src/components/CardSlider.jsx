import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Data from "../Data";

function CardSlider() {
  return (
    <div className="overflow-hidden">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {Data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="h-fit pt-20 relative xl:my-10 my-5 py-20  xl:hidden flex flex-row duration-500">
              <div
                className={`card flex flex-col gap-[30px] w-fit h-[450px] py-10 px-5 mb-20 justify-center mx-5 items-center flex-shrink-0 bg-white`}
              >
                <span className="text-[54px] text-baddhia-orange">❝</span>
                <p className="text-[12px] text-gray-500 text-center w-[80%]">
                  {item.description}
                </p>
                <h3 className="font-semibold">{item.name}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="flex">
          <div className="absolute -translate-x-0 translate-y-[-50%] left-[35%] bottom-[5%] p-2 text-2xl cursor-pointer rounded-full text-baddhia-orange bg-white">
            <BsChevronCompactLeft size={24} />
          </div>
          <div className="absolute -translate-x-0 translate-y-[-50%] p-2 right-[35%] bottom-[5%] text-2xl cursor-pointer rounded-full text-baddhia-orange bg-white">
            <BsChevronCompactRight size={24} />
          </div>
        </div>
      </Swiper>
    </div>
  );

  {
    /*<div className="h-fit pt-20 relative xl:my-10 my-5 py-20  xl:hidden flex flex-row duration-500">
      {Data.map((item) => {
        const { id, description, name } = item;
        return (
          <div
            className={`card flex flex-col gap-[30px] w-[320px] h-[450px] py-10 px-5 mb-20 justify-center mx-5 items-center flex-shrink-0 bg-white`}
            key={id}
          >
            <span className="text-[54px] text-baddhia-orange">❝</span>
            <p className="text-[12px] text-gray-500 text-center w-[80%]">
              {description}
            </p>
            <h3 className="font-semibold">{name}</h3>
          </div>
        );
      })}
      <div className="flex">
        <div className="absolute -translate-x-0 translate-y-[-50%] left-[35%] bottom-[5%] p-2 text-2xl cursor-pointer rounded-full text-baddhia-orange bg-white">
          <BsChevronCompactLeft size={24} />
        </div>
        <div className="absolute -translate-x-0 translate-y-[-50%] p-2 right-[35%] bottom-[5%] text-2xl cursor-pointer rounded-full text-baddhia-orange bg-white">
          <BsChevronCompactRight  size={24} />
        </div>
      </div>
    </div>*/
  }
}

export default CardSlider;
