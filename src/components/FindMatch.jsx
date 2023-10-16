import React from "react";
import FindMatchBackground from "./FindMatchBackground";
import { AiOutlinePlayCircle } from "react-icons/ai";

function FindMatch() {
  return (
    <section className="banner md:h-[60vh] h-[40vh] w-[100vw] mt-20 mb-[-120px] md:mb-0 relative">
      <FindMatchBackground />

      <div className="absolute left-0 h-[20vh] md:h-full w-full flex justify-center flex-col items-center z-20 cursor-pointer top-0 text-white ">
        <h2 className="text-[18px] md:text-4xl md:mb-8 font-semibold">
          How to Find your Perfect Match
        </h2>
        <a href="https://www.youtube.com/watch?v=YHetNsWUd5k" target="_blank">
          <AiOutlinePlayCircle fontSize={42} />
        </a>
      </div>
    </section>
  );
}

export default FindMatch;
