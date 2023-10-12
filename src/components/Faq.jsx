import React from 'react';
import data from '../faqData';

function Faq() {
  return (
    <div className='md:pt-40 pt-20'>
      <h1 className='md:text-4xl text-2xl text-center mb-10 text-baddhia-orange'>Frequently Asked Questions</h1>
      {data.map((elem)=>{
        return (
          <div className='bg-[#e9e9e9] p-5 rounded-md'>     
          <div className='font-semibold'>{elem.title}</div>
          <div>{elem.info}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Faq