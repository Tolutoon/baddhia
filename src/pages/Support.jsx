import React, { useEffect } from 'react';
import Header from '../components/Header';
import Faq from '../components/Faq';

import getInTouch from '/images/getIntouch.png'
import JoinCard from '../components/JoinCard';
import Footer from '../components/Footer';


function Support() {
  useEffect(() => {
    window.scrollTo(0, 0)
  },[])
  return (
    <div id='support'>
      <Header />
      <Faq />
      <div className='mb-10'>
        <img src={getInTouch} alt=''/>
      </div>
      <div>
        <div className='flex flex-col justify-center w-[70vw] mx-auto items-center'>
          <div className='flex gap-16 mb-10'>
          <div className='flex flex-col'>
            <p>Email</p>
            <p>support@baddhia.com</p>
          </div>
          <div className='flex flex-col'>
            <p>Call Us</p>
            <p>+234 706 207 2194</p>
          </div>
          </div>
          <form className='flex flex-col w-[70vw] md:w-[40vw] gap-8 mb-10'>
            <input className=' border-baddhia-orange border-2 rounded-xl h-[40px] px-4' placeholder='name' type='name'/>
            <input className=' border-baddhia-orange border-2 rounded-xl h-[40px] px-4' placeholder='email' type='name'/>
            <input className=' border-baddhia-orange border-2 rounded-xl h-[40px] px-4' placeholder='subject' type='name'/>
            <textarea className=' border-baddhia-orange border-2 h-[120px] rounded-xl px-4'/>
            <button className='bg-baddhia-orange p-4 px-14 rounded-[16px] font-semibold text-base text-white w-fit'>Send Message</button>
          </form>
        </div>
      </div>
      <JoinCard/>
      <Footer/>
    </div>
  )
}

export default Support