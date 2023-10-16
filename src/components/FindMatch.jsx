import React from "react";
import FindMatchBackground from "./FindMatchBackground";
import { AiOutlinePlayCircle } from "react-icons/ai";

function FindMatch() {
  return (
    <section className="banner md:h-[60vh] h-[40vh] w-[100vw] mt-20 mb-[-120px] md:mb-0 relative">
      <FindMatchBackground />

      <div className="absolute left-0 h-[20vh] md:h-full w-full flex justify-center items-center z-20 cursor-pointer top-0 text-white ">
        <h2>How to Find your Perfect Match</h2>
        <AiOutlinePlayCircle fontSize={28} />
      </div>
    </section>
  );
}

export default FindMatch;
