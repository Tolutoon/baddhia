import React from 'react'
import Header from '../components/Header'
import Faqs from '../components/Faqs'

function FaqPage() {
  return (
    <>
    <Header/>
    <div className='h-[25vh] md:h-[35vh] footer text-center flex items-center text-3xl px-10 text-white pt-[50px] font-semibold md:px-80'>Frequently Asked Questions</div>
    <Faqs/>
    
    </>
  )
}

export default FaqPage