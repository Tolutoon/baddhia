import React from "react";
import Header from "../components/Header";
import banner from "/images/aboutBanner.png";
import Reasons from "../components/Reasons";
import JoinCard from "../components/JoinCard";
import Footer from "../components/Footer";

function About() {
  return (
    <div>
      <Header />
      <div className="h-[5vh]"></div>
      <div className="md:h-[30vh] h-[25vh] about flex flex-col text-3xl md:text-4xl px-10 md:px-40 text-white pt-[55px] md:pt-20 md:mb-20 font-bold">
        <h2 className="md:text-5xl text-4xl font-semibold text-white">
          About Baddhia
        </h2>
        <p className="md:text-xl text-white text-[16px] uppercase tracking-wide">
          Our brand story
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12 h-fit">
        <div>
          <img
            src={banner}
            className="md:w-[50vw] hidden xl:flex h-[986px]"
            alt=""
          />
        </div>
        <div className="xl:w-[40vw] md:w-[90vw] md:px-0 px-10 mb-20 md:md-40">
          <h2 className="text-baddhia-orange md:text-3xl text-3xl text-left md:mb-10 mb-5 font-semibold">
            <span className="text-4xl">Baddhia:</span> <br />
            Where love & <br />
            friendship blossoms
          </h2>
          <p className="text-gray-500 md:leading-7 leading-6 text-base">
            "I never thought I would find love again after my divorce,” says
            Sarah. “I was so hurt, hopeless, and jaded, and I felt like I would
            never be able to trust someone again. But then I met John on
            Baddhia. He was kind, funny, and understanding, and he made me feel
            like I could be myself again. He was supportive, loving, and always
            there for me.” <br /> <br /> Sarah's story is one that many people
            can relate to. We understand that finding the right person can be
            difficult, especially in today's digital age. It can be hard to meet
            new people, and even harder to find someone who you connect with on
            a deeper level. And if you're shy or introverted, it can be even
            more daunting. <br />
            <br /> We know that bad relationships can have a devastating impact
            on our lives. They can lower our self-worth, confidence, and
            motivation. They can also lead to anxiety, depression, and other
            mental health problems. <br />
            <br /> That's why Baddhia was created. Baddhia was founded in 2022
            with a simple mission: to help people find compatible partners,
            create exciting moments, and strengthen intimacy in romantic
            relationships. We're a matchmaking and intimacy-building platform
            that helps you connect with people who are truly compatible with
            you. We use a sophisticated algorithm to match you with people who
            share your interests, values, and goals.
            <br />
            <br />
            We also offer a variety of features that make it easy to meet new
            people and build meaningful relationships. You can create a profile
            that highlights your unique personality, and you can use our search
            filters to find people who are a good match for you. You can also
            send messages, gifts, and customized emojis to other users.
            <br />
            <br /> Using Baddhia can help you feel more confident, desirable,
            and empowered. When you're on Baddhia, you're surrounded by people
            who are looking for the same things as you. You're not alone
            anymore.
            <br />
            <br /> Join Baddhia today and start your journey to finding love or
            friendship!
          </p>
        </div>
      </div>
      <Reasons />
      <JoinCard />
      <Footer />
    </div>
  );
}

export default About;
