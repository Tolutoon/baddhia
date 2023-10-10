import React from 'react';

// import components
import Header from '../components/Header';
import Hero from '../components/Hero';
import FindMatch from '../components/FindMatch';
import CardBenefits from '../components/CardBenefits';
import Testimonials from '../components/Testimonials';
import ConnectKindly from '../components/ConnectKindly';
import CardBenefitsII from '../components/CardBenefitsII';
import Press from '../components/Press';
import LearnBlog from '../components/LearnBlog';

function Home() {
  return (
    <main className='max-w-[1920px] mx-auto transition'>
        <Header />
        <Hero />
        <FindMatch />
        <CardBenefits />
        <Testimonials />
        <ConnectKindly />
        <CardBenefitsII />
        <Press />
        <LearnBlog />
    </main>
  )
}

export default Home