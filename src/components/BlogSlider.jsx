import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function BlogSlider() {
  return (
    <div className="overflow-hidden">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
            <div className="h-[30vh] bg-red-400"></div>
        </SwiperSlide>
        <SwiperSlide>
            Slide 2
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default BlogSlider;
