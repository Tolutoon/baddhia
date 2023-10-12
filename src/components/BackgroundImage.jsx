import React from 'react';
import background from '/images/background-image.png';

function BackgroundImage() {
  return (
    <div className='h-[100vh] w-full'>
        <img src={background} className='h-[100vh] w-[100vw] object-fill' alt=''/>
    </div>
  )
}

export default BackgroundImage;