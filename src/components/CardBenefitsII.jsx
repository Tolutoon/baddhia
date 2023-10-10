import React from "react";
import shareMoment from "/images/share-moments.png";

function CardBenefitsII() {
  return (
      <div className="flex px-10 items-center flex-col-reverse md:flex-row-reverse justify-center w-full gap-[84px] md:gap-[164px]">
        <div>
          <img className="md:h-[532px] md:w-[282px] h-[423px] w-[262px]" src={shareMoment} alt="" />
        </div>
        <div className="m-w-[503px] flex flex-col gap-[34px]">
          <h2 className="text-4xl xl:text-5xl text-left font-semibold">
            Share{" "}
            <span className="text-baddhia-orange">
              Your <br />
            </span>{" "}
            Exciting
            <br />
            Moments
          </h2>
          <p className="text-left m-w-[460px] text-gray-500 text-base">
            Share your adventures and connect with <br/> people who share your
            passions on Baddhia. <br/> Our 24-hour disappearing photos, videos and <br/>
            text posts are the perfect way to attract like-<br/>minded people. So
            whether you’re hiking up a<br/> mountain, dancing the night away, or just<br/>
            hanging out with friends, share it all on Baddhia.<br/> You never know
            who you might meet
          </p>
          {/* button */}
          <div className="flex justify-start">
            <a href="https://play.google.com/store/apps/details?id=com.baddhia.app">
              <button
                type="submit"
                className="bg-baddhia-orange p-4 px-12 xl:px-14 rounded-[16px] font-semibold text-base text-white transition-all duration-300 hover:scale-105"
              >
                Download
              </button>
            </a>
          </div>
        </div>
      </div>
  );
}

export default CardBenefitsII;
