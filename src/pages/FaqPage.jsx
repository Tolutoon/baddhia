import React from 'react'
import Header from '../components/Header'
import Faqs from '../components/Faqs'

function FaqPage() {
  return (
    <>
    <Header/>
    <div className='h-[30vh] md:h-[35vh] footer flex items-center text-5xl px-20 text-white pt-[40px] font-semibold md:px-80'>FAQ</div>
    <Faqs/>
    
    </>
  )
}

export default FaqPage