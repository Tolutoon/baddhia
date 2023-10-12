import React from "react";
import Header from "../components/Header";
import banner from "/images/aboutBanner.png";
import Reasons from "../components/Reasons";

function About() {
  return (
    <div>
      <Header />
      <div className="h-[10vh]"></div>
      <div className="aboutBannerHeader md:h-[40vh] h-[15vh] md:mb-10 text-white md:px-20 md:py-10 px-10 pt-2">
        <h2 className="md:text-5xl text-3xl font-semibold md:mb-8">About Baddhia</h2>
        <p className="md:text-xl">Our brand story</p>
      </div>
      <div className="flex flex-col md:flex-row gap-12 h-fit">
        <div>
          <img src={banner} className="md:w-[45vw] hidden xl:flex h-[776px]" alt="" />
        </div>
        <div className="xl:w-[40vw] md:w-[90vw] md:px-0 px-10">
          <h2 className="text-baddhia-orange md:text-4xl text-3xl text-left md:mb-10 mb-5 font-semibold">
            Where Love & Friendship
            <br /> Blossoms
          </h2>
          <p className="text-gray-500 md:leading-7 leading-6 md:text-base text-[12px]">
            I never thought I would find love again after my divorce,” says
            Sarah. “I was so hurt, hopeless, and jaded, and I felt like I would
            never be able to trust someone again. But then I met John on
            Baddhia. He was kind, funny, and understanding, and he made me feel
            like I could be myself again. He was supportive, loving, and always
            there for me.” Sarah's story is one that many people can relate to.
            We understand that finding the right person can be difficult,
            especially in today's digital age. It can be hard to meet new
            people, and even harder to find someone who you connect with on a
            deeper level. And if you're shy or introverted, it can be even more
            daunting. We know that bad relationships can have a devastating
            impact on our lives. They can lower our self-worth, confidence, and
            motivation. They can also lead to anxiety, depression, and other
            mental health problems. That's why Baddhia was created. Baddhia was
            founded in 2022 with a simple mission: to help people find
            compatible partners, create exciting moments, and strengthen
            intimacy in romantic relationships. We're a matchmaking and
            intimacy-building platform that helps you connect with people who
            are truly compatible with you. We use a sophisticated algorithm to
            match you with people who share your interests, values, and goals.
            We also offer a variety of features that make it easy to meet new
            people and build meaningful relationships. You can create a profile
            that highlights your unique personality, and you can use our search
            filters to find people who are a good match for you. You can also
            send messages, gifts, and customized emojis to other users. Using
            Baddhia can help you feel more confident, desirable, and empowered.
            When you're on Baddhia, you're surrounded by people who are looking
            for the same things as you. You're not alone anymore. Join Baddhia
            today and start your journey to finding love or friendship
          </p>
        </div>
      </div>
      <Reasons />
    </div>
  );
}

export default About;
