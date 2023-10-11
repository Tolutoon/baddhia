import React from "react";

function JoinCard() {
  return (
    <div className="bg-[url('/images/joinBack.png')] h-[80vh] w-full bg-center bg-no-repeat flex xl:items-center justify-center pt-20">
      <div className="flex flex-col md:max-w-[40vw]">

      <h2 className="xl:text-6xl text-4xl font-semibold text-left xl:leading-[69px] text-white uppercase">Join the<br/> <span className="text-baddhia-orange">Baddhia</span> <br/> Community</h2>
      <p className="text-white w-[442px] leading-[28px]">
        We exist to inspire bliss in every romantic relationship. Be sure that
        all of us at Baddhia are committed to making you find love and build
        intimacy with your significant other. Join our exclusive mailing list to
        receive updates and other information firsthand
      </p>
      </div>
    </div>
  );
}

export default JoinCard;
