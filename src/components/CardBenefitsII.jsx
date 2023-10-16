import React from "react";
import shareMoment from "/images/share-moments.png";
import privacy from "/images/privacy.png";

function CardBenefitsII() {
  return (
    <div className="px-10 mb-20">
      <div className="flex items-center mb-20 md:mb-20 flex-col md:flex-row justify-center w-full gap-y-[44px] md:gap-[164px]">
        <div className="pt-10">
          <img
            className="h-[532px] w-[282px]"
            src={shareMoment}
            alt=""
            loading="lazy"
          />
        </div>
        <div className="m-w-[503px] flex flex-col gap-[44px]">
          <h2 className="text-4xl xl:text-5xl text-left font-semibold">
            Share{" "}
            <span className="text-baddhia-orange">
              Your <br />
            </span>{" "}
            Exciting
            <br />
            Moments
          </h2>
          <p className="text-left max-w-[440px] text-gray-500 text-[14px]">
            Share your adventures and connect with people who share your
            passions on Baddhia. Our 24-hour disappearing photos, videos and
            text posts are the perfect way to attract like- minded people. So
            whether you’re hiking up a mountain, dancing the night away, or just
            hanging out with friends, share it all on Baddhia. You never know
            who you might meet
          </p>
          {/* button */}
          <div className="flex justify-start">
            <a href="https://play.google.com/store/apps/details?id=com.baddhia.app">
              <button
                type="submit"
                className="bg-baddhia-orange p-4 px-8 xl:px-10 rounded-[16px] font-semibold text-base text-white transition-all duration-300 hover:scale-105"
              >
                Download Now
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col-reverse md:flex-row justify-center w-full gap-[44px] md:gap-[84px]">
        <div className="max-w-[403px] flex flex-col gap-[34px]">
          <h2 className="text-4xl xl:text-5xl text-left font-semibold">
            Privacy <span className="text-baddhia-orange">&</span> <br />{" "}
            Security
          </h2>
          <p className="text-left max-w-[440px] text-gray-500 text-[14px]">
            Tired of meeting people who don’t get your sense of humor? Your
            passion for collecting rubber ducks? Your love of puns? Well, with
            Baddhia, you can finally meet someone who shares your passions,
            understands your quirks, and appreciates your uniqueness.
          </p>
          {/* button */}
          <div className="flex justify-start">
            <a href="https://play.google.com/store/apps/details?id=com.baddhia.app">
              <button
                type="submit"
                className="bg-baddhia-orange p-4 px-8 xl:px-10 rounded-[16px] font-semibold text-base text-white transition-all duration-300 hover:scale-105"
              >
                Download Now
              </button>
            </a>
          </div>
        </div>
        <div className="pt-10">
          <img
            className="xl:h-[503px] xl:w-[442px] h-[403px] w-[332px]"
            src={privacy}
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default CardBenefitsII;
