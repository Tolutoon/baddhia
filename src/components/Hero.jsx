import React from "react";

function Hero() {
  return (
    <section className="py-20">
      <div className="homePage h-[95vh] w-full">
        <div className="flex flex-col justify-center w-full items-center h-full gap-y-7 mx-auto">
          <h1 className="text-white text-center xl:max-w-6xl font-semibold text-6xl xl:text-[64px]">
            Find your <span className="text-baddhia-orange">Perfect Match</span>
            , <br /> <span className="text-baddhia-orange">Anywhere</span> in
            the World.
          </h1>
          <p className="text-white max-w-[70vh] text-center text-base">
            Finding the right person is tough, but we have made it easier.
            Whether you’re looking for love, friendship, or chat, our algorithm
            will connect you with someone who shares your interests and values.
          </p>

          {/* button */}
          <a href="https://play.google.com/store/apps/details?id=com.baddhia.app">
            <button
              type="submit"
              className="bg-baddhia-orange p-4 px-12 rounded-[16px] font-semibold text-base text-white transition-all duration-300 hover:scale-105"
            >
              Download
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
