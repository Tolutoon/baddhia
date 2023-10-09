import React from "react";
import Data from "../Data";
import CardSlider from "./CardSlider";

function Testimonials() {
  return (
    <section className="testimonal-backDrop px-10 w-full">
      <div className="flex flex-col justify-center xl:items-center">
        <h2 className="xl:text-3xl text-2xl font-semibold mx-auto xl:mb-20">
          What our <span className="text-baddhia-orange">users</span> say
        </h2>
        <div className="justify-center relative xl:flex flex-col h-fit md:flex-row p-10 hidden">
          {Data.map((elem) => {
            const { id, description, name } = elem;
            return (
              <div
                className="card flex flex-col gap-[32px] w-[330px] h-fit py-10 px-5 mb-10 justify-center mx-5 items-center flex-shrink-0 bg-white"
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
        </div>
        <CardSlider />
      </div>
    </section>
  );
}

export default Testimonials;
