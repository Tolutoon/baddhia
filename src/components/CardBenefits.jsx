import React from "react";
import connectImage from "/images/connect.png";
import emojis from "/images/emojis.png";
import gifts from "/images/gifts.png";

function CardBenefits() {
  return (
    <div className="px-10 mb-20">
      <div className="flex pt-40 items-center flex-col md:flex-row justify-center w-full gap-[44px] md:gap-[144px]">
        <div>
          <img
            className="h-[363px] w-[323px]"
            src={connectImage}
            alt=""
            loading="lazy"
          />
        </div>
        <div className="m-w-[503px] flex flex-col gap-[34px]">
          <h2 className="text-4xl xl:text-5xl text-left font-semibold">
            Meet, Connect <span className="text-baddhia-orange">&</span> <br />{" "}
            Vibe{" "}
          </h2>
          <p className="text-left m-w-[460px] text-gray-500 text-base">
            Tired of meeting people who don’t get your sense <br /> of humor?
            Your passion for collecting rubber ducks? Your love <br /> of puns?
            Well, with Baddhia, you can finally meet someone <br />
            who shares your passions, understands your quirks, and <br />{" "}
            appreciates your uniqueness.
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
      <div className="flex pt-20 items-center flex-col-reverse md:flex-row justify-center w-full gap-[64px]">
        <div className="flex flex-col gap-[24px]">
          <h2 className="xl:text-5xl text-4xl text-left font-semibold">
            Send & Receive <br />{" "}
            <span className="text-baddhia-orange">Customized</span>
            <br />
            Emojis{" "}
          </h2>
          <p className="text-left m-w-[460px] text-gray-500 text-base">
            Tired of meeting people who don’t get your sense <br /> of humor?
            Your passion for collecting rubber ducks? Your love <br /> of puns?
            Well, with Baddhia, you can finally meet someone <br />
            who shares your passions, understands your quirks, and <br />{" "}
            appreciates your uniqueness.
          </p>
          {/* button */}
          <div className="flex justify-start">
            <a href="https://play.google.com/store/apps/details?id=com.baddhia.app">
              <button
                type="submit"
                className="bg-baddhia-orange p-4 px-14 rounded-[16px] font-semibold text-base text-white transition-all duration-300 hover:scale-105"
              >
                Download
              </button>
            </a>
          </div>
        </div>
        <div>
          <img
            className="h-[320px] w-[363px]"
            src={emojis}
            alt=""
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex pt-20 items-center flex-col md:flex-row justify-center w-full gap-[84px] mx-auto">
        <div>
          <img className="h-[400px] w-[323px]" src={gifts} alt="" loading="" />
        </div>
        <div className="flex flex-col gap-[24px]">
          <h2 className="text-4xl xl:text-5xl xl:text-right text-left font-semibold">
            Shop <span className="text-baddhia-orange">&</span> <br /> Exchange
            Gifts
          </h2>
          <p className="xl:text-right text-left m-w-[460px] text-gray-500">
            Tired of meeting people who don’t get your sense <br /> of humor?
            Your passion for collecting rubber ducks? Your love <br /> of puns?
            Well, with Baddhia, you can finally meet someone <br />
            who shares your passions, understands your quirks, and <br />{" "}
            appreciates your uniqueness.
          </p>
          {/* button */}
          <div className="flex xl:justify-end">
            <a href="https://play.google.com/store/apps/details?id=com.baddhia.app">
              <button
                type="submit"
                className="bg-baddhia-orange p-4 px-14 rounded-[16px] font-semibold text-base text-white transition-all duration-300 hover:scale-105"
              >
                Download
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardBenefits;
