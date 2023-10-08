import React from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Data from "../Data";

function CardSlider() {
  return (
    <div className="h-fit pt-20 relative xl:my-10 my-5 py-20 max-w-[100vw] xl:hidden flex flex-row duration-500">
      {Data.map((elem) => {
        const { id, description, name } = elem;
        return (
          <div
            className="card flex flex-col gap-[30px] w-fit h-fit py-10 px-5 mb-20 justify-center mx-5 items-center flex-shrink-0 bg-white"
            key={id}
          >
            <span className="text-[64px] text-baddhia-orange">❝</span>
            <p className="text-[12px] w-[80%] text-gray-500 text-center">
              {description}
            </p>
            <h3 className="font-semibold">{name}</h3>
          </div>
        );
      })}
      <div className="flex">
        <div className="absolute -translate-x-0 translate-y-[-50%] left-[35%] bottom-[5%] p-2 md:hidden flex text-2xl cursor-pointer rounded-full text-baddhia-orange bg-white">
          <BsChevronCompactLeft size={24} />
        </div>
        <div className="absolute -translate-x-0 translate-y-[-50%] p-2 right-[35%] bottom-[5%] md:hidden flex text-2xl cursor-pointer rounded-full text-baddhia-orange bg-white">
          <BsChevronCompactRight size={24} />
        </div>
      </div>
    </div>
  );
}

export default CardSlider;
