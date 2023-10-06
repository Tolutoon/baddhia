import React from "react";
import connectImage from "/images/connect.png";
import emojis from '/images/emojis.png';

function CardBenefits() {
  return (
    <div>
      <div className="flex pt-40 items-center justify-center w-full gap-[84px] mx-auto">
        <div>
          <img className="h-[400px] w-[323px]" src={connectImage} alt="" />
        </div>
        <div className="w-[503px] flex flex-col gap-[24px]">
          <h2 className="text-6xl text-right ">
            Meet, Connect <span className="text-baddhia-orange">&</span> <br />{" "}
            Vibe{" "}
          </h2>
          <p className="text-right m-w-[460px]">
            Tired of meeting people who don’t get your sense <br /> of humor?
            Your passion for collecting rubber ducks? Your love <br /> of puns?
            Well, with Baddhia, you can finally meet someone <br />
            who shares your passions, understands your quirks, and <br />{" "}
            appreciates your uniqueness.
          </p>
          {/* button */}
          <div className="flex justify-end">
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
      </div>
      <div className="flex pt-20 items-center justify-center w-full gap-[84px] mx-auto">
      <div className="w-[503px] flex flex-col gap-[24px]">
          <h2 className="text-6xl text-left ">
            Send & Receive <span className="text-baddhia-orange">Customized</span><br />
            Emojis{" "}
          </h2>
          <p className="text-left m-w-[460px]">
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
                className="bg-baddhia-orange p-4 px-12 rounded-[16px] font-semibold text-base text-white transition-all duration-300 hover:scale-105"
              >
                Download
              </button>
            </a>
          </div>
        </div>
        <div>
          <img className="h-[350px] w-[373px]" src={emojis} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CardBenefits;
