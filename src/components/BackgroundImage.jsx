import React from 'react';
import background from '/images/backAlternative.png';

function BackgroundImage() {
  return (
    <div className='h-[100vh] w-full'>
        <img src={background} className='h-[100vh] md:w-[100vw] object-cover ' loading='lazy' alt=''/>
    </div>
  )
}

export default BackgroundImage;