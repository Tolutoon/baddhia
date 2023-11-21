import { Carousel } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function BlogCarousel() {
  const scrollToTop = () => {
    document.getElementById("blogContent").scroll(0, 0);
  };
  return (
    <div className="h-[80vh] md:hidden">
      <Carousel slideInterval={3600} leftControl="<" rightControl=">">
        <div className=" bg-[url('/images/Article1.webp')]  h-[470px] w-[293px] bg-cover bg-center bg-no-repeat relative shadow-md rounded-2xl">
          <div className="flex absolute bg-[#FFF6F2] w-fit bottom-0 flex-col gap-[16px] rounded-2xl justify-center items-center md:p-4 p-2">
            <div className="w-[90%]">
              <h3 className="text-baddhia-orange font-semibold mb-4">
                Mastering Baddhia: A Comprehensive Guide to Navigating the App
              </h3>
              <p className="text-gray-400 text-[12px] mb-4">
                Have you ever experienced disappointment in relationships that
                made you decide not to go into one again?...
              </p>
              <div className="flex md:gap-4 gap-8 ">
                <div className="flex flex-col">
                  <span className="text-[12px] font-semibold">
                    Elegbeleye Paul
                  </span>
                  <span className="text-[12px]">October 28, 2023</span>
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
        <div className=" bg-[url('/images/Article2.webp')]  h-[470px] w-[293px] bg-cover bg-center bg-no-repeat relative shadow-md rounded-2xl">
          <div className="flex absolute bg-[#FFF6F2] w-fit bottom-0 flex-col gap-[16px] rounded-2xl justify-center items-center md:p-4 p-2">
            <div className="w-[90%]">
              <h3 className="text-baddhia-orange font-semibold mb-4">
                Finding Your Perfect Match: A Guide to Baddhia's Compatibility
                Features
              </h3>
              <p className="text-gray-400 text-[12px] mb-4">
                There are many online dating sites that singles have used but
                couldn't find a compatible partner. Perhaps you have tried some
                of these online dating...
              </p>
              <div className="flex md:gap-4 gap-8 ">
                <div className="flex flex-col">
                  <span className="text-[12px] font-semibold">
                    Elegbeleye Paul
                  </span>
                  <span className="text-[12px]">October 28, 2023</span>
                </div>

                <Link to={"/blogContent2"} onClick={scrollToTop}>
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
        <div className=" bg-[url('/images/Article-3.webp')]  h-[470px] w-[293px] bg-cover bg-center bg-no-repeat relative shadow-md rounded-2xl">
          <div className="flex absolute bg-[#FFF6F2] w-fit bottom-0 flex-col gap-[16px] rounded-2xl justify-center items-center md:p-4 p-2">
            <div className="w-[90%]">
              <h3 className="text-baddhia-orange font-semibold mb-4">
                More than Romance: Building Lasting Friendships on Baddhia
              </h3>
              <p className="text-gray-400 text-[12px] mb-4">
                In today's fast-paced world, finding meaningful connections and
                building lasting friendships can be a challenge. However, with
                the rise of social apps and online dating platforms...
              </p>
              <div className="flex md:gap-4 gap-8 ">
                <div className="flex flex-col">
                  <span className="text-[12px] font-semibold">
                    Chibuike Iheka
                  </span>
                  <span className="text-[12px]">October 28, 2023</span>
                </div>

                <Link to={"/blogContent3"} onClick={scrollToTop}>
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
      </Carousel>
    </div>
  );
}
