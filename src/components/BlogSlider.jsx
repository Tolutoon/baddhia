import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import "swiper/css";

function BlogSlider() {
    const scrollToTop = () => {
        document.getElementById("blogContent").scroll(0, 0);
      };
  return (
    <div className="overflow-hidden md:hidden">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="flex justify-center items-center mb-10">
            <div className=" bg-[url('/images/dummyImg.png')]  h-[470px] w-[293px] bg-cover bg-center bg-no-repeat relative shadow-md rounded-2xl">
              <div className="flex absolute bg-[#FFF6F2] w-fit bottom-0 flex-col gap-[16px] rounded-2xl justify-center items-center md:p-4 p-2">
                <div className="w-[90%]">
                  <h3 className="text-baddhia-orange font-semibold mb-4">
                    More Then Romance: Building Lasting Friendships on Baddhia
                  </h3>
                  <p className="text-gray-400 text-[12px] mb-4">
                    Aenean eleifend ante maecenas pulvinar montes lorem et pede
                    dis dolor pretium donec dictum. Vici consequat justo enim.
                    Venenatis eget adipiscing luctus lorem.
                  </p>
                  <div className="flex md:gap-4 gap-8 ">
                    <div className="flex flex-col">
                      <span className="text-[12px] font-semibold">
                        Fletcher James
                      </span>
                      <span className="text-[12px]">June 28, 2013</span>
                    </div>

                    <Link to={"/blogContent"} onClick={scrollToTop}>
                      {" "}
                      {/* Added target="_blank" for opening links in a new tab */}
                      <button
                        type="submit"
                        className="bg-baddhia-orange p-2  px-6 rounded-[16px] font-semibold text-[12px] text-white transition-all duration-300 hover:scale-105"
                      >
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex justify-center items-center mb-10">
            <div className=" bg-[url('/images/dummyImg.png')]  h-[470px] w-[293px] bg-cover bg-center bg-no-repeat relative shadow-md rounded-2xl">
              <div className="flex absolute bg-[#FFF6F2] w-fit bottom-0 flex-col gap-[16px] rounded-2xl justify-center items-center md:p-4 p-2">
                <div className="w-[90%]">
                  <h3 className="text-baddhia-orange font-semibold mb-4">
                    More Then Romance: Building Lasting Friendships on Baddhia
                  </h3>
                  <p className="text-gray-400 text-[12px] mb-4">
                    Aenean eleifend ante maecenas pulvinar montes lorem et pede
                    dis dolor pretium donec dictum. Vici consequat justo enim.
                    Venenatis eget adipiscing luctus lorem.
                  </p>
                  <div className="flex md:gap-4 gap-8 ">
                    <div className="flex flex-col">
                      <span className="text-[12px] font-semibold">
                        Fletcher James
                      </span>
                      <span className="text-[12px]">June 28, 2013</span>
                    </div>

                    <Link to={"/blogContent"} onClick={scrollToTop}>
                      {" "}
                      {/* Added target="_blank" for opening links in a new tab */}
                      <button
                        type="submit"
                        className="bg-baddhia-orange p-2  px-6 rounded-[16px] font-semibold text-[12px] text-white transition-all duration-300 hover:scale-105"
                      >
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex justify-center items-center mb-10">
            <div className=" bg-[url('/images/dummyImg.png')]  h-[470px] w-[293px] bg-cover bg-center bg-no-repeat relative shadow-md rounded-2xl">
              <div className="flex absolute bg-[#FFF6F2] w-fit bottom-0 flex-col gap-[16px] rounded-2xl justify-center items-center md:p-4 p-2">
                <div className="w-[90%]">
                  <h3 className="text-baddhia-orange font-semibold mb-4">
                    More Then Romance: Building Lasting Friendships on Baddhia
                  </h3>
                  <p className="text-gray-400 text-[12px] mb-4">
                    Aenean eleifend ante maecenas pulvinar montes lorem et pede
                    dis dolor pretium donec dictum. Vici consequat justo enim.
                    Venenatis eget adipiscing luctus lorem.
                  </p>
                  <div className="flex md:gap-4 gap-8 ">
                    <div className="flex flex-col">
                      <span className="text-[12px] font-semibold">
                        Fletcher James
                      </span>
                      <span className="text-[12px]">June 28, 2013</span>
                    </div>

                    <Link to={"/blogContent"} onClick={scrollToTop}>
                      {" "}
                      {/* Added target="_blank" for opening links in a new tab */}
                      <button
                        type="submit"
                        className="bg-baddhia-orange p-2  px-6 rounded-[16px] font-semibold text-[12px] text-white transition-all duration-300 hover:scale-105"
                      >
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="flex mt-20">
          <div className="absolute -translate-x-0 translate-y-[-50%] left-[35%] bottom-[5%] p-2 text-2xl cursor-pointer rounded-full text-baddhia-orange bg-#FFF6F2">
            <BsChevronCompactLeft size={24} />
          </div>
          <div className="absolute -translate-x-0 translate-y-[-50%] p-2 right-[35%] bottom-[5%] text-2xl cursor-pointer rounded-full text-baddhia-orange bg-#ffdaca">
            <BsChevronCompactRight size={24} />
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default BlogSlider;
