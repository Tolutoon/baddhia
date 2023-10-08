import React from "react";
import { BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import Data from "../Data";

function CardSlider() {
  return (
    <div className="h-fit w-full pt-20 relative px-5 my-10 py-20 xl:hidden flex flex-row duration-500">
      {Data.map((elem) => {
        const { id, description, name } = elem;
        return (
          <div
            className="card flex flex-col gap-[30px] w-[350px] h-fit py-10 px-5 mb-10 justify-center mx-5 items-center flex-shrink-0 bg-white"
            key={id}
          >
            <span className="text-[64px] text-baddhia-orange">❝</span>
            <p className="text-[12px] text-gray-500 text-center">
              {description}
            </p>
            <h3 className="font-semibold">{name}</h3>
          </div>
        );
      })}
      <div className="absolute -translate-x-0 translate-y-[-50%] left-[40%] bottom-[5%] p-2 text-2xl cursor-pointer rounded-full text-baddhia-orange bg-white">
        <BsChevronCompactLeft />
      </div>
      <div className="absolute -translate-x-0 translate-y-[-50%] p-2 right-[40%] bottom-[5%] text-2xl cursor-pointer rounded-full text-baddhia-orange bg-white">
        <BsChevronCompactRight/>
      </div>
    </div>
  );
}

export default CardSlider;
