import React from 'react';
import background from '/images/background-image.png';
import mobileBack from '/images/backAlt.png';

function BackgroundImage() {
  return (
    <div className='h-[90vh] w-full mb-10'>
        <img src={background} className='h-[100vh] md:w-[100vw] object-cover md:flex hidden' loading='lazy' alt=''/>
        <img src={mobileBack} className='h-[100vh] w-[100vw] md:hidden object-cover' alt='' loading='lazy'/>
    </div>
  )
}

export default BackgroundImage;