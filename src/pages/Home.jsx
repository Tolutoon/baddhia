import React from 'react';

// import components
import Header from '../components/Header';
import Hero from '../components/Hero';
import FindMatch from '../components/FindMatch';
import CardBenefits from '../components/CardBenefits';

function Home() {
  return (
    <main className='max-w-[1920px] mx-auto transition'>
        <Header />
        <Hero />
        <FindMatch />
        <CardBenefits />
    </main>
  )
}

export default Home