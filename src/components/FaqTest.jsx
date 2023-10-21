import React, { useState } from "react";
import { Link }from "react-router-dom";

function FaqTest() {
  // Initialize items state
  const [items, setItems] = useState([
    { id: 1, active: false },
    { id: 2, active: false },
    { id: 3, active: false },
    { id: 4, active: false },
    { id: 5, active: false },
    { id: 6, active: false },
  ]);

  const handleToggleActive = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, active: !item.active };
        } else {
          return { ...item, active: false };
        }
      })
    );
  };

  const scrollToTop = () => {
    document.getElementById("blogContent").scroll(0, 0);
  };

  return (
    <div className="md:pt-40 pt-[110px] md:px-40 mb-20">
      <h1 className="md:text-4xl text-3xl text-center mb-5 text-baddhia-orange font-semibold w-full">
        Frequently Asked Questions
      </h1>
      <h3 className="text-center text-gray-500 mb-4 px-8">
        Not sure how to use our product? <br /> We’ve got a step-by-step guide
        that can help!
      </h3>
      <div className="h-full flex gap-4 flex-col justify-center items-center">
        <div className="flex flex-col bg-[#e9e9e9] rounded-xl p-5 md:w-[60vw] w-[80vw] group">
          <div
            className="flex items-center gap-4 mb-4 cursor-pointer"
            onClick={() => handleToggleActive(1)}
          >
            <div
              className={`text-xl text-baddhia-orange cursor-pointer ${
                items[0].active ? "rotate-90" : ""
              }`}
            >
              {">"}
            </div>
            <div
              className={`font-semibold ${
                items[0].active ? "group-[.is-active]:font-bold" : ""
              }`}
            >
              <h3>What is Baddhia?</h3>
            </div>
          </div>
          <div
            className={`overflow-hidden ${
              !items[0].active ? "max-h-0" : "max-h-fit"
            } text-gray-500`}
          >
            <p>
              Baddhia is an online matchmaking, intimacy-building and social
              commerce platform that helps you find your perfect match and build
              a healthy, lifelong romantic relationship, no matter where you are
              in the world. <br />
              <br /> We understand that finding the right person can be
              challenging, and that’s why we use a sophisticated mathematical
              algorithm to evaluate your psychographic and demographic
              information and match you with someone who shares your values,
              interests, and lifestyle.
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-[#e9e9e9] rounded-xl p-5 md:w-[60vw] w-[80vw] group">
          <div
            className="flex items-center gap-4 mb-4 cursor-pointer"
            onClick={() => handleToggleActive(2)}
          >
            <div
              className={`text-xl text-baddhia-orange cursor-pointer ${
                items[1].active ? "rotate-90" : ""
              }`}
            >
              {">"}
            </div>
            <div
              className={`font-semibold ${
                items[1].active ? "group-[.is-active]:font-bold" : ""
              }`}
            >
              <h3>Can I find love on Baddhia?</h3>
            </div>
          </div>
          <div
            className={`overflow-hidden ${
              !items[1].active ? "max-h-0" : "max-h-fit"
            } text-gray-500`}
          >
            <p>
              Yes, you can. Love is a beautiful thing, and we are all out just
              for you. Kindly do these things to increase your chances of
              finding love on the app
            </p>
            <br />
            <ol className="gap-2 flex flex-col">
              <li>
                {" "}
                1. Be yourself and avoid pretending to be someone you are not.
              </li>
              <li> 2. Be honest about your purpose on the app.</li>
              <li> 3. Fill your profile completely and honestly.</li>
              <li>
                {" "}
                4. Use the <strong>Find Your Perfect Match</strong> feature to
                increase your chances by 10x.
              </li>
              <li>
                {" "}
                5. Be patient because it takes time to find love. Don’t get
                discouraged if you don’t find one right away.
              </li>
              <li> 6. Be active on the app.</li>
              <li> 7. Be open to meeting new people.</li>
              <li> 8. Send thoughtful messages.</li>
              <li>
                {" "}
                9. Post photos, videos, or text about your favorite hobbies,
                activities, or causes to connect with people who share your
                passions.
              </li>
            </ol>
          </div>
        </div>
        <div className="flex flex-col bg-[#e9e9e9] rounded-xl p-5 md:w-[60vw] w-[80vw] group">
          <div
            className="flex items-center gap-4 mb-4 cursor-pointer"
            onClick={() => handleToggleActive(3)}
          >
            <div
              className={`text-xl text-baddhia-orange cursor-pointer ${
                items[2].active ? "rotate-90" : ""
              }`}
            >
              {">"}
            </div>
            <div
              className={`font-semibold ${
                items[2].active ? "group-[.is-active]:font-bold" : ""
              }`}
            >
              <h3>How do I find my perfect match on Baddhia?</h3>
            </div>
          </div>
          <div
            className={`overflow-hidden ${
              !items[2].active ? "max-h-0" : "max-h-fit"
            } text-gray-500`}
          >
            <ol className="gap-2 flex flex-col">
              <li>
                {" "}
                ✓ Tap Find Your Match on the Baddhia mobile app home page
              </li>
              <li>✓ Select your preferences on the Find Your Perfect Match interface.</li>
              <li> ✓ Tap Get Result.</li>
              <li>
                {" "}
                ✓ Tap any of the profiles suggested for you.
              </li>
              <li>
                {" "}
                ✓ Tap the Love Icon to activate the Chat Icon.
              </li>
              <li> ✓ Tap the Chat Icon to open the Messaging interface and send a message to your MATCH.</li>
            </ol>
          </div>
        </div>
        <div className="flex flex-col bg-[#e9e9e9] rounded-xl p-5 md:w-[60vw] w-[80vw] group">
          <div
            className="flex items-center gap-4 mb-4 cursor-pointer"
            onClick={() => handleToggleActive(4)}
          >
            <div
              className={`text-xl text-baddhia-orange cursor-pointer ${
                items[3].active ? "rotate-90" : ""
              }`}
            >
              {">"}
            </div>
            <div
              className={`font-semibold ${
                items[3].active ? "group-[.is-active]:font-bold" : ""
              }`}
            >
              <h3>How do I sign up?</h3>
            </div>
          </div>
          <div
            className={`overflow-hidden ${
              !items[3].active ? "max-h-0" : "max-h-fit"
            } text-gray-500`}
          >
            <p>
            Download the Baddhia android app on Google Play Store. The iOS and Web versions are under
development.
            </p>
            <br />
            <ol className="gap-2 flex flex-col">
              <li>
                {" "}
                ✓ Navigate the intro screens.
              </li>
              <li> ✓ Tap <strong>Sign Up</strong>.</li>
              <li> ✓ Enter your correct details in the fields provided (username, first name, last name, & gender).</li>
              <li>
                {" "}
                ✓ Enter your valid email address; Enter and confirm your password; Read and tick the terms of
service and privacy policy box.
              </li>{" "}
            </ol>
          </div>
        </div>
        <div className="flex flex-col bg-[#e9e9e9] rounded-xl p-5 md:w-[60vw] w-[80vw] group">
          <div
            className="flex items-center gap-4 mb-4 cursor-pointer"
            onClick={() => handleToggleActive(5)}
          >
            <div
              className={`text-xl text-baddhia-orange cursor-pointer ${
                items[4].active ? "rotate-90" : ""
              }`}
            >
              {">"}
            </div>
            <div
              className={`font-semibold ${
                items[4].active ? "group-[.is-active]:font-bold" : ""
              }`}
            >
              <h3>Do I need a membership or subscription to get started?</h3>
            </div>
          </div>
          <div
            className={`overflow-hidden ${
              !items[4].active ? "max-h-0" : "max-h-fit"
            } text-gray-500`}
          >
            <p>
              Yes, you can. Love is a beautiful thing, and we are all out just
              for you. Kindly do these things to increase your chances of
              finding love on the app
            </p>
            <br />
            <ol className="gap-2 flex flex-col">
              <li>
                {" "}
                ✓ Tap Find Your Match on the Baddhia mobile app home page
              </li>
              <li> 2. Be honest about your purpose on the app.</li>
              <li> 3. Fill your profile completely and honestly.</li>
              <li>
                {" "}
                4. Use the <strong>Find Your Perfect Match</strong> feature to
                increase your chances by 10x.
              </li>{" "}
            </ol>
          </div>
        </div>
        <div className="flex flex-col bg-[#e9e9e9] rounded-xl p-5 md:w-[60vw] w-[80vw] group mb-2">
          <div
            className="flex items-center gap-4 mb-4 cursor-pointer"
            onClick={() => handleToggleActive(6)}
          >
            <div
              className={`text-xl text-baddhia-orange cursor-pointer ${
                items[5].active ? "rotate-90" : ""
              }`}
            >
              {">"}
            </div>
            <div
              className={`font-semibold ${
                items[5].active ? "group-[.is-active]:font-bold" : ""
              }`}
            >
              <h3>How Do I Fund My Wallet?</h3>
            </div>
          </div>
          <div
            className={`overflow-hidden ${
              !items[5].active ? "max-h-0" : "max-h-fit"
            } text-gray-500`}
          >
            <p>
              Yes, you can. Love is a beautiful thing, and we are all out just
              for you. Kindly do these things to increase your chances of
              finding love on the app
            </p>
            <br />
            <ol className="gap-2 flex flex-col">
              <li>
                {" "}
                ✓ Tap Find Your Match on the Baddhia mobile app home page
              </li>
              <li> 2. Be honest about your purpose on the app.</li>
              <li> 3. Fill your profile completely and honestly.</li>
              <li>
                {" "}
                4. Use the <strong>Find Your Perfect Match</strong> feature to
                increase your chances by 10x.
              </li>{" "}
            </ol>
          </div>
        </div>
        <Link to={'/faq'} onClick={scrollToTop}>
          <button
            type="submit"
            className="bg-baddhia-orange py-2 px-4 xl:px-10 rounded-[16px] font-semibold text-base text-white transition-all duration-300 hover:scale-105"
          >
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FaqTest;
