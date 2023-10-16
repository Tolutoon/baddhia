import React from 'react';

// import components
import Header from '../components/Header';
import Heros from '../components/Heros';
import FindMatch from '../components/FindMatch';
import CardBenefits from '../components/CardBenefits';
import Testimonials from '../components/Testimonials';
import ConnectKindly from '../components/ConnectKindly';
import CardBenefitsII from '../components/CardBenefitsII';
import Press from '../components/Press';
import LearnBlog from '../components/LearnBlog';
import JoinCard from '../components/JoinCard';
import Footer from '../components/Footer';



function Home() {

  return (
    <main className='max-w-[1920px] mx-auto transition overflow-hidden'>

        <Header />
        <Heros />
        <FindMatch />
        <CardBenefits />
        <Testimonials />
        <ConnectKindly />
        <CardBenefitsII />
        <Press />
        <LearnBlog />
        <JoinCard/>
        <Footer/>
    </main>
  )
}

export default Home