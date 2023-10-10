import React from "react";
import pressData from "../PressData";

function Press() {
  return (
    <section className="px-10 md:px-20">
        <h2 className="xl:text-3xl text-2xl font-semibold mx-auto xl:mb-20 mb-10 text-center">
          Baddhia in the <span className="text-baddhia-orange">press</span>
        </h2>
      <div className="flex md:flex-row flex-col justify-center items-center gap-10">

        {pressData.map((item) => {
          const divStyle = {
            backgroundImage: `url(${item.backgroundUrl})`,
          };

          return (

            <div style={divStyle} className="md:h-[350px] md:w-[323px] h-[280px] w-[263px] bg-cover bg-no-repeat relative shadow-md rounded-2xl " key={item.id}>
              <div className="flex absolute bg-[#FFF6F2] md:w-[323px] h-[40%] w-[263px]  bottom-0 flex-col gap-[16px] rounded-2xl justify-center items-center">
                <img className="w-[130px]" src={item.logoUrl} alt="" />
                <a href={item.url}>
                  <button
                    type="submit"
                    className="bg-baddhia-orange p-4 px-8 rounded-[16px] font-semibold md:text-base text-[12px] text-white transition-all duration-300 hover:scale-105"
                  >
                    Read More
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Press;
