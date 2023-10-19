import React from 'react';
import background from '/images/background-image.png';
import mobileBack from '/images/backAlt.png';

function BackgroundImage() {
  return (
    <div className='h-[90vh] w-full mb-10'>
        <img src={background} className='h-[100vh] md:w-[100vw] object-cover flex' loading='lazy' alt=''/>

    </div>
  )
}

export default BackgroundImage;