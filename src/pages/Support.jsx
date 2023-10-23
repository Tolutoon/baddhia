import React from 'react';
import Header from '../components/Header';
import Faq from '../components/Faq';

import { AiFillMail } from 'react-icons/ai';
import {BsFillTelephoneFill} from 'react-icons/bs';
import JoinCard from '../components/JoinCard';
import Footer from '../components/Footer';
import FaqTest from '../components/FaqTest';


function Support() {
  return (
    <div id='support'>
      <Header />
      <FaqTest />
      <div className="mb-10 bg-[url('/images/getIntouch.png')] h-[50vh] bg-cover bg-center w-[100vw] flex justify-center items-center">
        <h2 className='text-white md:text-5xl text-3xl font-semibold tracking-wide'>Get in Touch</h2>
      </div>
      <div>
        <div className='flex flex-col justify-center w-[70vw] mx-auto md:items-center'>
          <div className='flex md:gap-8 gap-4 mb-10 md:items-center flex-col md:flex-row'>
            <AiFillMail fontSize={26} className='text-baddhia-orange'/>
          <div className='flex flex-col text-gray-500'>
            <p>Email</p>
            <p>support@baddhia.ng</p>
          </div>
            <BsFillTelephoneFill fontSize={26} className='text-baddhia-orange'/>
          <div className='flex flex-col text-gray-500'>
            <p>Call Us</p>
            <p>+234 706 207 2194</p>
          </div>
          </div>
          <form className='flex flex-col w-[70vw] md:w-[40vw] gap-8 mb-10'>
            <input className=' border-baddhia-orange border-[1px] rounded-xl h-[40px] px-4' placeholder='Name' type='name'/>
            <input className=' border-baddhia-orange border-[1px] rounded-xl h-[40px] px-4' placeholder='Email' type='name'/>
            <input className=' border-baddhia-orange border-[1px] rounded-xl h-[40px] px-4' placeholder='Subject' type='name'/>
            <textarea className=' border-baddhia-orange border-1 h-[160px] rounded-xl px-4'/>
            <button className='bg-baddhia-orange p-4 px-12 rounded-[16px] font-semibold text-base text-white w-fit'>Send Message</button>
          </form>
        </div>
      </div>
      <JoinCard/>
      <Footer/>
    </div>
  )
}

export default Support