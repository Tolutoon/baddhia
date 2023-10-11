import React from "react";

function JoinCard() {
  return (
    <div className="bg-[url('/images/joinBack.png')] h-[100vh] xl:h-fit w-full bg-center bg-no-repeat flex xl:flex-row flex-col xl:items-center justify-center mx-auto p-10 xl:gap-[84px] gap-[34px]">
      <div className="flex flex-col md:max-w-[40vw] gap-8">
        <h2 className="xl:text-6xl text-4xl font-semibold text-left xl:leading-[59px] text-white uppercase">
          Join the <span className="text-baddhia-orange">Baddhia</span> Community
        </h2>
        <p className="text-white md:w-[442px] w-[80vw] leading-[26px]">
          We exist to inspire bliss in every romantic relationship. Rest assured
          that all of us at Baddhia are committed to helping you find love and build
          intimacy with your significant other. Join our exclusive mailing list
          to receive updates and other information firsthand.
        </p>
      </div>
      <form className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Your Name"
          className="mb-4 p-4 md:w-[400px] w-[80vw]"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-4 mb-4 md:w-[400px] w-[80vw]"
        />
        <button className="bg-baddhia-orange py-4 px-12 xl:px-16 text-white rounded-[32px] transition-all duration-300 hover:scale-105">
          Submit
        </button>
      </form>
    </div>
  );
}

export default JoinCard;

