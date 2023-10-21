import React from 'react'
import Header from '../components/Header'
import Faqs from '../components/Faqs'

function FaqPage() {
  return (
    <>
    <Header/>
    <div className='h-[30vh] md:h-[35vh] bg-baddhia-orange flex items-center text-4xl px-20 text-white font-semibold md:px-40'>FAQ</div>
    <Faqs/>
    
    </>
  )
}

export default FaqPage