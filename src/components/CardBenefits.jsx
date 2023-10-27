import React from "react";
import connectImage from "/images/meet_connect.png";
import emojis from "/images/emojis.png";
import gifts from "/images/exchange_gifts.png";

function CardBenefits() {
  return (
    <div className="px-10 mb-20">
      <div className="flex md:pt-40 pt-20 items-center flex-col md:flex-row justify-center w-full gap-[44px] md:gap-[84px]">
        <div>
          <img
            className="h-[443px] w-[338px] rounded-[32px] max-w-[100%] object-cover"
            src={connectImage}
            alt=""
            loading="lazy"
          />
        </div>
        <div className="m-w-[503px] flex flex-col gap-[26px]">
          <h2 className="text-[32px] xl:text-5xl text-left font-semibold leading-10">
            Meet, Connect <span className="text-baddhia-orange">&</span> <br />{" "}
            Vibe{" "}
          </h2>
          <p className="text-left max-w-[410px] text-gray-500 text-[16px] leading-[27px]">
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
      </div>
      <div className="flex pt-20 md:pt-25 items-center flex-col-reverse md:flex-row justify-center w-full md:gap-[84px] gap-[44px] mx-auto">
        <div className="flex flex-col gap-[26px]">
          <h2 className="text-[32px] xl:text-5xl text-left font-semibold leading-10">
            Shop <span className="text-baddhia-orange">&</span> <br /> Exchange
            Gifts
          </h2>
          <p className=" text-left max-w-[420px] text-gray-500 text-[16px] leading-[27px]">
            Show your loved one or crush how much you care with a personalized
            gift from Baddhia. With our wide selection of trendy and romantic
            gifts, you’re sure to find the perfect way to make them feel
            special. Whether it’s a birthday gift, holiday gift, or just a
            random act of kindness, we’ve got you covered.
          </p>
          {/* button */}
          <div className="flex">
            <a href="https://play.google.com/store/apps/details?id=com.baddhia.app">
              <button
                type="submit"
                className="bg-baddhia-orange p-4 px-8 md:px-10 rounded-[16px] font-semibold text-base text-white transition-all duration-300 hover:scale-105"
              >
                Download Now
              </button>
            </a>
          </div>
        </div>
        <div>
          <img
            className="h-[443px] w-[332px] object-cover rounded-[32px]"
            src={gifts}
            alt=""
            loading=""
          />
        </div>
      </div>
      <div className="flex pt-20 items-center flex-col md:flex-row justify-center w-full md:gap-[94px] gap-[44px]">
        <div>
          <img
            className="h-[443px] w-[332px] object-cover rounded-[32px]"
            src={emojis}
            alt=""
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-[26px]">
          <h2 className="xl:text-5xl text-[32px] text-left font-semibold leading-10">
            Send & Receive <br />
            <span className="text-baddhia-orange"> Customized </span>
            Emojis{" "}
          </h2>
          <p className="text-left max-w-[410px] text-gray-500 text-[16px] leading-[27px]">
            Say it with heartfelt emojis. Our emojis are like the ones you see
            on messaging apps, but they have a short romantic note that will
            make your messages pop. With Baddhia’s customized emojis, you can
            express your emotions wholeheartedly and make your loved ones feel
            special.
          </p>
          {/* button */}
          <div className="flex justify-start">
            <a href="https://play.google.com/store/apps/details?id=com.baddhia.app">
              <button
                type="submit"
                className="bg-baddhia-orange p-4 px-8 rounded-[16px] font-semibold text-base text-white transition-all duration-300 hover:scale-105"
              >
                Download Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardBenefits;
