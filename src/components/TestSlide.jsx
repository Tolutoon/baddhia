import { Carousel } from "flowbite-react";

import Testimony1 from '/images/testimony1.svg';


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
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
        />
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
        />
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
        />
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
        />
      </Carousel>
    </div>
  );
}
