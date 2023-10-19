import React from "react";

function JoinCard() {
  return (
    <div className="bg-[url('/images/joinBack.png')] h-[80vh] xl:h-fit w-full bg-center xl:mt-0 md:mb-0 bg-no-repeat flex md:flex-row flex-col md:items-center justify-center mx-auto p-10 xl:py-40 md:gap-[84px] gap-[34px] bg-cover">
      <div className="flex flex-col md:max-w-[40vw] gap-8 ">
        <h2 className="xl:text-6xl text-4xl font-semibold md:text-left xl:leading-[59px] text-white uppercase w-[80vw] xl:w-fit text-center">
          Join the <span className="text-baddhia-orange">Baddhia</span>{" "}
          Community
        </h2>
        <p className="text-white md:w-[442px] w-[80vw] leading-[26px] text-[14px] text-center md:text-left">
          We exist to inspire bliss in every romantic relationship. Rest assured
          that all of us at Baddhia are committed to helping you find love and
          build intimacy with your significant other. Join our exclusive mailing
          list to receive updates and other information firsthand.
        </p>
      </div>
      <form className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Your Name"
          className="mb-4 md:p-4 p-4 md:w-[400px] w-[80vw] rounded-xl"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="md:p-4 mb-4 p-4 md:w-[400px] w-[80vw] rounded-xl"
        />
        <button className="bg-baddhia-orange py-4 px-12 xl:px-16 text-[14px] md:text-base text-white rounded-[32px] transition-all duration-300 hover:scale-105">
          Submit
        </button>
      </form>
    </div>
  );
}

export default JoinCard;
