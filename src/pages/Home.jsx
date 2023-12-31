import React from "react";

// import components
import Header from "../components/Header";
import Hero from "../components/Hero";
import FindMatch from "../components/FindMatch";
import CardBenefits from "../components/CardBenefits";
import Testimonials from "../components/Testimonials";
import ConnectKindly from "../components/ConnectKindly";
import CardBenefitsII from "../components/CardBenefitsII";
import Press from "../components/Press";
import LearnBlog from "../components/LearnBlog";
import JoinCard from "../components/JoinCard";
import Footer from "../components/Footer";

function Home() {
  return (
    <main className="mx-auto transition overflow-hidden">
      <Header />
      <Hero />
      <FindMatch />
      <CardBenefits />
      <Testimonials />
      <ConnectKindly />
      <CardBenefitsII />
      <Press />
      <LearnBlog />
      <JoinCard />
      <Footer />
    </main>
  );
}

export default Home;
