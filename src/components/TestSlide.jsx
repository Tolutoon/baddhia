import { Carousel } from "flowbite-react";

import Testimony1 from '/images/testimony1.svg';
import Testimony2 from '/images/testimony2.svg';
import Testimony3 from '/images/testimony3.svg';
import Testimony4 from '/images/testimony4.svg';
import Testimony5 from '/images/testimony5.svg';


export default function DefaultCarousel() {
  return (
    <div className="h-[60vh] md:hidden">
      <Carousel
       slideInterval={2600}
       leftControl="<"
       rightControl=">"
      >
        <img
          alt="..."
          src={Testimony1}
          style={{ width: '80%', height: '80%' }}
        />
        <img
          alt="..."
          src={Testimony2}
          style={{ width: '80%', height: '80%' }}
        />
        <img
          alt="..."
          src={Testimony3}
          style={{ width: '80%', height: '80%' }}
        />
        <img
          alt="..."
          src={Testimony4}
          style={{ width: '80%', height: '80%' }}
        />
        <img
          alt="..."
          src={Testimony5}
          style={{ width: '80%', height: '80%' }}
        />
      </Carousel>
    </div>
  );
}
