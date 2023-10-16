import React from "react";
import BackgroundImage from "./BackgroundImage";

function Hero() {
  return (
    <section className="py-10 relative hidden md:flex">
      <BackgroundImage />
      <div className="flex flex-col justify-center w-full items-center h-full md:gap-y-8 gap-y-6 mx-auto absolute p-10 top-0 left-0">
        <h1 className="text-white text-center xl:max-w-6xl max-w-[80vh] md:leading-none font-semibold text-4xl md:text-[44px] xl:text-[64px]">
          Find your <span className="text-baddhia-orange">Perfect Match</span>
          ,<br /> <span className="text-baddhia-orange"> Anywhere</span> in the
          World.
        </h1>
        <p className="text-white xl:max-w-[80vh] max-w-[60vh] text-[12px] text-center xl:text-base">
          Finding the right person is tough, but we have made it easier. Whether
          you’re looking for love, friendship, or chat, our algorithm will
          connect you with someone who shares your interests and values.
        </p>

        {/* button */}
        <a
          href="https://play.google.com/store/apps/details?id=com.baddhia.app"
          target="_blank"
        >
          <button
            type="submit"
            className="bg-baddhia-orange p-4 xl:px-12 px-8 rounded-[16px] font-semibold xl:text-base text-[12px] text-white transition-all duration-300 hover:scale-105"
          >
            Download Now
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
