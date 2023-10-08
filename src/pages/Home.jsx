import React from 'react';

// import components
import Header from '../components/Header';
import Hero from '../components/Hero';
import FindMatch from '../components/FindMatch';
import CardBenefits from '../components/CardBenefits';
import Testimonials from '../components/Testimonials';

function Home() {
  return (
    <main className='max-w-[1920px] mx-auto transition'>
        <Header />
        <Hero />
        <FindMatch />
        <CardBenefits />
        <Testimonials />
        <div className='h-[2000px]'></div>
    </main>
  )
}

export default Home