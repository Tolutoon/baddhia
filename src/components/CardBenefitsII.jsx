import React from "react";
import shareMoment from "/images/share-moments.png";
import privacy from "/images/privacy.png";

function CardBenefitsII() {
  return (
    <div className="px-10 mb-20">
      <div className="flex items-center mb-10 md:mb-0 flex-col md:flex-row justify-center w-full gap-y-[44px] md:gap-[84px]">
        <div className="pt-10">
          <img
            className="h-[443px] w-[332px] object-cover rounded-[32px]"
            src={shareMoment}
            alt=""
            loading="lazy"
          />
        </div>
        <div className="m-w-[403px] flex flex-col gap-[26px]">
          <h2 className="text-[32px] xl:text-5xl text-left font-semibold md:hidden block leading-10">
            Share{" "}
            <span className="text-baddhia-orange">
              Your
            </span>{" "}<br/>
            Exciting
            Moments
          </h2>
          <h2 className="text-4xl xl:text-5xl text-left font-semibold md:block hidden">
            Share{" "}
            <span className="text-baddhia-orange">
              Your
            </span>{" "}
            Exciting
            <br />
            Moments
          </h2>
          <p className="text-left max-w-[400px] text-gray-500 text-[16px] leading-[27px]">
            Share your adventures and connect with people who share your
            passions on Baddhia. Our 24-hour disappearing photos, videos and
            text posts are the perfect way to attract like- minded people. So
            whether you’re hiking up a mountain, dancing the night away, or just
            hanging out with friends, share it all on Baddhia. You never know
            who you might meet.
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
        <div className="max-w-[403px] flex flex-col gap-[26px]">
          <h2 className="text-[32px] xl:text-5xl text-left font-semibold">
            Privacy <span className="text-baddhia-orange">&</span> Security
          </h2>
          <p className="text-left max-w-[440px] text-gray-500 text-[16px] leading-[27px]">
            With Baddhia, you can be yourself without fear of judgement. You can
            control who sees what you do online, and hide your online activities
            and profile details from everyone. It’s your privacy, your choice.
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
            className=" h-[443px] w-[332px] object-cover rounded-[32px]"
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
