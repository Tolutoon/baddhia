import React, { useState } from "react";
import FindMatchBackground from "./FindMatchBackground";
import { AiOutlinePlayCircle } from "react-icons/ai";

import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

function FindMatch() {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="banner md:h-[60vh] h-[40vh] w-[100vw] mt-20 mb-[-144px] md:mb-0 relative">
      <FindMatchBackground />

      <div className="absolute left-0 h-[20vh] md:h-full w-full flex justify-center flex-col items-center cursor-pointer top-0 text-white ">
        <h2 className="text-[18px] md:text-4xl md:mb-8 font-semibold">
          How to Find your <span className="text-baddhia-orange">Perfect Match</span>
        </h2>

        <ModalVideo
          channel="youtube"
          youtube={{ mute: 0, autoplay: 0 }}
          isOpen={isOpen}
          videoId="YHetNsWUd5k"
          onClose={() => setOpen(false)}
        />
        <div onClick={() => setOpen(true)}>
          <AiOutlinePlayCircle fontSize={42}/>
        </div>
      </div>
    </section>
  );
}

export default FindMatch;
