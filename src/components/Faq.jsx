import React from 'react';
import data from '../faqData';

function Faq() {
  return (
    <div className='md:pt-40 pt-20'>
      <h1>Faq</h1>
      {data.map((elem)=>{
        return (
          <>
          
          <div>{elem.title}</div>
          <div>{elem.info}</div>
          </>
        )
      })}
    </div>
  )
}

export default Faq