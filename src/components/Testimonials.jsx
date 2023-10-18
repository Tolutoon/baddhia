import React from "react";
import Data from "../Data";
import CardSlider from "./CardSlider";
import DefaultCarousel from "./TestSlide";

function Testimonials() {
  return (
    <section className="testimonal-backDrop px-10 py-10 w-full mb-0 ">
      <div className="flex flex-col justify-center">
        <h2 className="xl:text-3xl text-2xl font-semibold mx-auto md:mb-10">
          What our <span className="text-baddhia-orange">users</span> say
        </h2>
{ /*       <div className=" md:justify-start items-start relative md:flex h-fit p-10 hidden">
          {Data.map((elem) => {
            const { id, description, name } = elem;
            return (
              <div
                className="card flex flex-col gap-[32px] w-[330px] h-[330px] py-10 px-5 mb-10 justify-center mx-5 items-center flex-shrink-0 bg-white"
                key={id}
              >
                <span className="text-[64px] text-baddhia-orange">❝</span>
                <p className="text-[12px] text-gray-500 text-center italic w-[80%]">
                  {description}
                </p>
                <h3 className="font-semibold">{name}</h3>
              </div>
            );
          })}
        </div> */}
        <CardSlider/>
        <DefaultCarousel/>
      </div>
    </section>
  );
}

export default Testimonials;
