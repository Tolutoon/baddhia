import React from 'react';

// import components
import Header from '../components/Header';
import Hero from '../components/Hero';
import FindMatch from '../components/FindMatch';
import CardBenefits from '../components/CardBenefits';

function Home() {
  return (
    <main>
        <Header />
        <Hero />
        <FindMatch />
        <CardBenefits />
    </main>
  )
}

export default Home