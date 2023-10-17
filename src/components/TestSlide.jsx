import { Carousel } from "flowbite-react";

import Testimony1 from '/images/Frame.svg';


export default function DefaultCarousel() {
  return (
    <div className="h-[70vh] md:hidden">
      <Carousel
       slideInterval={2500}
       leftControl='<'
       rightControl='>'
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
      <style>
        {`
          /* Customize the previous button */
          .left-control {
            background-color: #007acc;
            color: #fff;
          }

          /* Customize the next button */
          .carousel-button-next {
            background-color: #ff5722;
            color: #fff;
          }
        `}
      </style>
    </div>
  );
}
