import React, { useState } from "react";

function FaqTest() {
  // Initialize items state
  const [items, setItems] = useState([
    { id: 1, active: false },
    { id: 2, active: false },
  ]);

  const handleToggleActive = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, active: !item.active };
        }
        return item;
      })
    );
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
      <div className="h-[70vh] flex gap-8 flex-col">
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
              Baddhia is an online matchmaking, intimacy-building and social
              commerce platform that helps you find your perfect match and build
              a healthy, lifelong romantic relationship, no matter where you are
              in the world. We understand that finding the right person can be
              challenging, and that’s why we use a sophisticated mathematical
              algorithm to evaluate your psychographic and demographic
              information and match you with someone who shares your values,
              interests, and lifestyle.
            </p>
          </div>
        </div>
      </div>

      <div>
        <button>View More</button>
      </div>
    </div>
  );
}

export default FaqTest;
