import React from "react";
import { BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import Data from "../Data";

function CardSlider() {
  return (
    <div className="h-fit w-full pt-20 relative px-20 my-10 py-20 xl:hidden flex flex-row duration-500">
      {Data.map((elem) => {
        const { id, description, name } = elem;
        return (
          <div
            className="flex flex-col gap-[40px] w-[350px] h-[490px] px-5 mb-10 justify-center mx-5 items-center flex-shrink-0 bg-white"
            key={id}
          >
            <img src="" alt="" />
            <p className="text-[12px] text-gray-500 text-center">
              {description}
            </p>
            <h3 className="font-semibold">{name}</h3>
          </div>
        );
      })}
      <div className="absolute -translate-x-0 translate-y-[-50%] left-[40%] bottom-[5%] text-2xl cursor-pointer rounded-full text-baddhia-orange bg-white">
        <BsChevronCompactLeft />
      </div>
      <div>
        <BsChevronCompactRight />
      </div>
    </div>
  );
}

export default CardSlider;
