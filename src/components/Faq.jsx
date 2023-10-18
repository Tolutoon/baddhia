import React, { useState } from "react";
import data from "../faqData";

function Faq() {
  const [items, setItems] = useState(data);

  const handleToggleActive = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, active: item.active === 1 ? 0 : 1 };
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
        Not sure how to use our product? We’ve got a step-by-step guide that can
        help!
      </h3>
      {items.map((elem) => (
        <div
          className="p-5 rounded-md flex items-center justify-center"
          key={elem.id}
        >
          <div
            className={`flex flex-col bg-[#e9e9e9] rounded-xl p-5 md:w-[60vw] w-[80vw] group ${
              elem.active === 1 ? "is-active" : ""
            }`}
          >
            <div
              className="flex items-center gap-4 mb-4 cursor-pointer"
              onClick={() => handleToggleActive(elem.id)}
            >
              <div className="text-xl text-baddhia-orange cursor-pointer rotate-90 group-[.is-active]:rotate-[270deg]">
                {">"}
              </div>
              <div className="font-semibold group-[.is-active]:font-bold">
                {elem.title}
              </div>
            </div>
            <div className="overflow-hidden max-h-0 group-[.is-active]:max-h-fit text-gray-500">
              {elem.info}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Faq;
