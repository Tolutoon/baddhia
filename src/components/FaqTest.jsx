import React, { useState } from "react";
import { Link } from "react-router-dom";

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
                ✓ Tap <strong>Find Your Match </strong>on the Baddhia mobile app home page.
              </li>
              <li>
                ✓ Select your preferences on the Find Your Perfect Match
                interface.
              </li>
              <li> ✓ Tap <strong>Get Result</strong>.</li>
              <li> ✓ Tap any of the profiles suggested for you.</li>
              <li> ✓ Tap the <strong>Love Icon</strong> to activate the Chat Icon.</li>
              <li>
                {" "}
                ✓ Tap the <strong>Chat Icon</strong> to open the Messaging interface and send a
                message to your MATCH.
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
              Download the Baddhia android app on Google Play Store. The iOS and
              Web versions are under development.
            </p>
            <br />
            <ol className="gap-2 flex flex-col">
              <li> ✓ Navigate the intro screens.</li>
              <li>
                {" "}
                ✓ Tap <strong>Sign Up</strong>.
              </li>
              <li>
                {" "}
                ✓ Enter your correct details in the fields provided (username,
                first name, last name, & gender).
              </li>
              <li>
                {" "}
                ✓ Enter your valid email address; Enter and confirm your
                password; Read and tick the terms of service and privacy policy
                box.
              </li>{" "}
              <li> ✓ Tap <strong>Continue</strong></li>{" "}
              <li>
                {" "}
                ✓ Check your email to copy the OTP sent to your email address.
              </li>{" "}
              <li>
                {" "}
                ✓ Insert the 4-digit OTP in the space provided on the app.
              </li>{" "}
              <li>
                {" "}
                ✓ Enable your location. We use your location to suggest profiles
                of people living near you.
              </li>{" "}
              <li> ✓ Upload a minimum of 3 photos.</li>{" "}
              <li>
                {" "}
                ✓ Congratulations! your Baddhia account has been successfully
                created.
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
              No! You don’t need a subscription to connect with people on
              Baddhia. However, if you want to enjoy unlimited access to all the
              features on Baddhia, you need to subscribe.
            </p>
            <br />
            <h3 className="font-semibold mb-2">
              Here are the features you can use without a subscription
            </h3>
            <ol className="gap-2 flex flex-col">
              <li> ✓ Free access to ten (10) profile suggestions daily.</li>
              <li> ✓ View ten (10) profiles in Moments per time.</li>
              <li> ✓ Chat before matching.</li>
              <li> ✓ Upload media in Chat and Moments.</li>{" "}
            </ol>
            <h3 className="font-semibold py-4">
              To enjoy unlimited access, upgrade to “Rose Plan” and get access
              to the following features:
            </h3>
            <ol className="gap-2 flex flex-col">
              <li>✓ Unlimited access to profiles on the Home Page.</li>
              <li>✓ Unlimited profile rewinds.</li>
              <li>✓ See who likes you.</li>
              <li>✓ Find your perfect match anywhere in the world.</li>
              <li>✓ View all profiles in Moments and chat with them.</li>
              <li>✓ See who viewed your profile in Moments.</li>
              <li>✓ See who is online.</li>
            </ol>
            <h3 className="font-semibold py-4">
              How to Check your Active Subscription Plan:
            </h3>
            <ol className="gap-2 flex flex-col">
              <li>
                ✓ Tap the side navigation menu at the top left on the home page.
              </li>
              <li>✓ Tap <strong>Settings</strong> > <strong>Manage Subscription</strong>.</li>
              <li>
                ✓ Tap <strong>Manage Subscription</strong> to view your active subscription plan.
              </li>
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
            <h3 className="font-semibold mb-2">
              1. How to Fund your Baddhia Main Wallet.
            </h3>
            <ol className="gap-2 flex flex-col">
              <li>
                {" "}
                ✓ Tap <strong>Wallet</strong> on the side navigation menu of the home page.
              </li>
              <li>✓ Tap <strong>Fund Wallet</strong> on the Main Wallet interface.</li>
              <li> ✓ Enter the amount you want to fund e.g., $50.</li>
              <li>
                ✓ Select your preferred payment method e.g.,
                <li className="pl-4 md:px-10 mt-2">
                  a) <strong>Pay with Card</strong> (Enter your card details).
                  Note that the CVC is the last three digits behind your card.
                </li>
                <li className="pl-4 md:px-10 mt-2">
                  b) <strong>Pay with Bank</strong> (Select your bank from the
                  list of banks).
                </li>
                <li className="pl-4 md:px-10 mt-2">
                  c) <strong>Pay with Transfer </strong>(Copy the generated
                  account number and make a transfer to it).
                </li>
                <li className="pl-4 md:px-10 mt-2">
                  d) <strong>Pay with USSD: </strong>Select your bank and dial
                  the USSD code on your phone.
                </li>
              </li>{" "}
              <li>
                ✓ Tap <strong>Continue.</strong>
              </li>
              <li>
                ✓ Follow the prompts to <strong>Pay</strong>.
              </li>
              <li>✓ Congrats! You’ve successfully funded your wallet.</li>
            </ol>
            <h3 className="font-semibold mb-2 mt-2">
              2. What to do if your Money isn’t Reflecting after Funding your
              Main Wallet
            </h3>
            <ol className="gap-2 flex flex-col pl-4">
              <li>
                ✓ Exit the “Main Wallet” interface and return to home page.
              </li>
              <li>
                ✓ Tap <strong>Wallet</strong> on the side navigation menu of the home page to
                return to the “Main Wallet” interface.
              </li>
            </ol>
            <h3 className="font-semibold mb-2 pl-4 mt-2">
              If the above did not work;
            </h3>
            <ol className="flex gap-2 flex-col pl-4">
              <li>✓ Check your email for a payment receipt.</li>
              <li>
                ✓ If you got an email showing “Transaction Successful”, please
                reach out to Baddhia customer support via support@baddhia.ng or
                chat +234 706 207 2194.
              </li>
              <li>
                ✓ If you didn’t get any email, it means the transaction wasn’t
                successful i.e., wait for another 12- 24hrs for your bank to
                reverse the money.
              </li>
            </ol>
          </div>
        </div>
        <Link to={"/faq"} onClick={scrollToTop}>
          <button
            type="submit"
            className="bg-baddhia-orange py-2 px-8 xl:px-10 rounded-[16px] font-semibold text-base text-white transition-all duration-300 hover:scale-105"
          >
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FaqTest;
