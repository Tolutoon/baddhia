import React from "react";
import vision from "/images/icon1.svg";
import misson from "/images/icon2.svg";
import purpose from "/images/icon3.svg";
import promise from "/images/icon4.png";

const Data = [
  {
    id: 1,
    title: "Vision",
    img: vision,
    description: "To inspire bliss in every romantic relationship.",
  },
  {
    id: 2,
    title: "Mission",
    img: misson,
    description:
      "To help people find compatible partners, create exciting moments and strengthen intimacy in romantic relationships.",
  },
  {
    id: 3,
    title: "Purpose",
    img: purpose,
    description:
      "To help people build happy and healthy life-long romantic relationships.",
  },
  {
    id: 4,
    title: "Promise",
    img: promise,
    description:
      "Inspiring true expressions.",
  },
];

function Reasons() {
  return (
    <div className="mb-20 px-5 md:px-20 flex flex-col justify-center items-center">
      <h2 className="text-center m-4 md:text-3xl text-3xl font-semibold mb-10">
        Why We Built <span className="text-baddhia-orange">Baddhia</span>
      </h2>
      <div className="flex md:flex-row flex-col gap-y-8 gap-x-8">
        {Data.map((elem) => {
          return (
            <div
              className="bg-[#FFF6F2] shadow-lg rounded-[32px] md:h-[418px] md:w-[255px] h-fit w-[300px] gap-8 p-6 flex justify-center flex-col items-center"
              key={elem.id}
            >
              <h2 className="m-2 text-2xl text-baddhia-orange">
                {elem.title}
              </h2>
              <img
                src={elem.img}
                alt=""
                className="md:w-[70px] md:h-[70px] w-[60px] h-[60px]"
              />
              <p className="text-center text-gray-600 text-base w-[90%]">
                {elem.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Reasons;
