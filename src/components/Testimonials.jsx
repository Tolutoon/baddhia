import React from "react";
import Data from "../Data";
import CardSlider from "./CardSlider";


function Testimonials () {
  return (
    <section className="testimonal-backDrop">
      <div className="flex flex-col justify-center w-full items-center">
        <h2>What our users say</h2>
    <div className="justify-center relative xl:flex flex-col h-fit md:flex-row my-10 p-10 hidden">
      {Data.map((elem) => {
        const { id, description, name } = elem;
        return (
          <div
            className="flex flex-col gap-[40px] w-[350px] h-[490px] px-5 mb-10 justify-center mx-5 items-center flex-shrink-0 bg-white"
            key={id}
          >
            <img src="" alt="" />
            <p className="text-[12px] text-gray-500 text-center">{description}</p>
            <h3 className="font-semibold">{name}</h3>
          </div>
        );
      })}
    </div>
    <div>
     <CardSlider/>
    </div>
      </div>
    </section>
  );
};

export default Testimonials;
