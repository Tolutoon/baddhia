import React, { useState } from "react";


function Faqs() {
  // Initialize items state
  const [items, setItems] = useState([
    { id: 1, active: false },
    { id: 2, active: false },
    { id: 3, active: false },
    { id: 4, active: false },
    { id: 5, active: false },
    { id: 6, active: false },
    { id: 7, active: false },
    { id: 8, active: false },
    { id: 9, active: false },
    { id: 10, active: false },
    { id: 11, active: false },
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

  return (
    <div className="md:pt-30 pt-[40px] md:px-40 mb-20">
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
        <div className="flex flex-col bg-[#e9e9e9] rounded-xl p-5 md:w-[60vw] w-[80vw] group mb-2">
          <div
            className="flex items-center gap-4 mb-4 cursor-pointer"
            onClick={() => handleToggleActive(7)}
          >
            <div
              className={`text-xl text-baddhia-orange cursor-pointer ${
                items[6].active ? "rotate-90" : ""
              }`}
            >
              {">"}
            </div>
            <div
              className={`font-semibold ${
                items[6].active ? "group-[.is-active]:font-bold" : ""
              }`}
            >
              <h3>How do I share or withdraw money from my Wallet?</h3>
            </div>
          </div>
          <div
            className={`overflow-hidden ${
              !items[6].active ? "max-h-0" : "max-h-fit"
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
            onClick={() => handleToggleActive(8)}
          >
            <div
              className={`text-xl text-baddhia-orange cursor-pointer ${
                items[7].active ? "rotate-90" : ""
              }`}
            >
              {">"}
            </div>
            <div
              className={`font-semibold ${
                items[7].active ? "group-[.is-active]:font-bold" : ""
              }`}
            >
              <h3>How does the Baddhia Emojis work?</h3>
            </div>
          </div>
          <div
            className={`overflow-hidden ${
              !items[7].active ? "max-h-0" : "max-h-fit"
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
            onClick={() => handleToggleActive(9)}
          >
            <div
              className={`text-xl text-baddhia-orange cursor-pointer ${
                items[8].active ? "rotate-90" : ""
              }`}
            >
              {">"}
            </div>
            <div
              className={`font-semibold ${
                items[8].active ? "group-[.is-active]:font-bold" : ""
              }`}
            >
              <h3>How do I send gift(s) to someone on the Baddhia App?</h3>
            </div>
          </div>
          <div
            className={`overflow-hidden ${
              !items[8].active ? "max-h-0" : "max-h-fit"
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
            onClick={() => handleToggleActive(10)}
          >
            <div
              className={`text-xl text-baddhia-orange cursor-pointer ${
                items[9].active ? "rotate-90" : ""
              }`}
            >
              {">"}
            </div>
            <div
              className={`font-semibold ${
                items[9].active ? "group-[.is-active]:font-bold" : ""
              }`}
            >
              <h3>How does “Moments” work?</h3>
            </div>
          </div>
          <div
            className={`overflow-hidden ${
              !items[9].active ? "max-h-0" : "max-h-fit"
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
            onClick={() => handleToggleActive(11)}
          >
            <div
              className={`text-xl text-baddhia-orange cursor-pointer ${
                items[9].active ? "rotate-90" : ""
              }`}
            >
              {">"}
            </div>
            <div
              className={`font-semibold ${
                items[10].active ? "group-[.is-active]:font-bold" : ""
              }`}
            >
              <h3>Can I invite my spouse/boyfriend/girlfriend to Baddhia?</h3>
            </div>
          </div>
          <div
            className={`overflow-hidden ${
              !items[10].active ? "max-h-0" : "max-h-fit"
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
      </div>
    </div>
  );
}

export default Faqs;