import React from "react";
import techCabalLogo from "/images/techCabalLogo.svg";
import pulseLogo from "/images/pulseLogo.svg";
import guardianLogo from "/images/guardianLogo.svg";
import PressCarousel from "./TestPress";

function Press() {
  return (
    <section className="px-5 md:px-20 md:mb-20">
      <h2 className="xl:text-4xl text-3xl font-semibold mx-auto xl:mb-20 md:mb-10 text-center">
        Baddhia In The <span className="text-baddhia-orange">Press</span>
      </h2>
      <div className="md:flex md:flex-row flex-col justify-center items-center gap-8 hidden">
        <div className="md:h-[350px] bg-[url('/images/techCabal.png')] md:w-[303px] h-[250px] w-[233px] bg-cover bg-no-repeat relative shadow-md rounded-2xl">
          <div className="flex absolute bg-[#FFF6F2] md:w-[303px] h-[40%] w-[233px] bottom-0 flex-col gap-[16px] rounded-2xl justify-center items-center">
            <img className="w-[130px] h-[20px]" src={techCabalLogo} alt="" />
            <a
              href="https://techcabal.com/2022/10/27/baddhia-launches-app-aims-to-inspire-bliss-in-every-romantic-relationship-across-africa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              {/* Added target="_blank" for opening links in a new tab */}
              <button
                type="submit"
                className="bg-baddhia-orange py-2 px-6 rounded-[16px] font-semibold text-[12px] text-white transition-all duration-300 hover:scale-105"
              >
                Read More
              </button>
            </a>
          </div>
        </div>
        <div className="md:h-[350px] bg-[url('/images/pulseImage.png')] md:w-[303px] h-[280px] w-[263px] bg-cover bg-no-repeat relative shadow-md rounded-2xl">
          <div className="flex absolute bg-[#FFF6F2] md:w-[303px] h-[40%] w-[263px] bottom-0 flex-col gap-[16px] rounded-2xl justify-center items-center">
            <img
              className="w-[130px] h-[20px]"
              src={pulseLogo}
              alt=""
              loading="lazy"
            />
            <a
              href="https://www.pulse.ng/lifestyle/relationships-weddings/fight-breakfast-syndrome-find-love-and-build-long-lasting-relationships-on-baddhia/v1fr9s0"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              {/* Added target="_blank" for opening links in a new tab */}
              <button
                type="submit"
                className="bg-baddhia-orange py-2 px-6 rounded-[16px] font-semibold text-[12px] text-white transition-all duration-300 hover:scale-105"
              >
                Read More
              </button>
            </a>
          </div>
        </div>
        <div className="md:h-[350px] bg-[url('/images/guadian.png')] md:w-[303px] h-[280px] w-[263px] bg-cover bg-no-repeat relative shadow-md rounded-2xl">
          <div className="flex absolute bg-[#FFF6F2] md:w-[303px] h-[40%] w-[263px] bottom-0 flex-col gap-[16px] rounded-2xl justify-center items-center">
            <img
              className="w-[130px] h-[20px]"
              src={guardianLogo}
              alt=""
              loading="lazy"
            />
            <a
              href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjZ7_Dfk-yBAxXClFwKHaWEBXIQFnoECAsQAQ&url=https%3A%2F%2Fguardian.ng%2Flife%2Fhow-baddhia-is-helping-africans-find-compatible-partners-and-rekindle-intimacy-in-romantic-relationships%2F&usg=AOvVaw0iCxRm1mAe7KL06hyADwFX&opi=89978449"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              {/* Added target="_blank" for opening links in a new tab */}
              <button
                type="submit"
                className="bg-baddhia-orange py-2 px-6 rounded-[16px] font-semibold text-[12px] text-white transition-all duration-300 hover:scale-105"
              >
                Read More
              </button>
            </a>
          </div>
        </div>
      </div>
      <PressCarousel/>
    </section>
  );
}

export default Press;
