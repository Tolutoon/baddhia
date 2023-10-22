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
    { id: 12, active: false },
    { id: 13, active: false },
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
            <ol className="gap-2 flex flex-col">
              <li>
                {" "}
                ✓ Tap <strong>Find Your Match </strong>on the Baddhia mobile app
                home page.
              </li>
              <li>
                ✓ Select your preferences on the Find Your Perfect Match
                interface.
              </li>
              <li>
                {" "}
                ✓ Tap <strong>Get Result</strong>.
              </li>
              <li> ✓ Tap any of the profiles suggested for you.</li>
              <li>
                {" "}
                ✓ Tap the <strong>Love Icon</strong> to activate the Chat Icon.
              </li>
              <li>
                {" "}
                ✓ Tap the <strong>Chat Icon</strong> to open the Messaging
                interface and send a message to your MATCH.
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
              <li>
                {" "}
                ✓ Tap <strong>Continue</strong>
              </li>{" "}
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
              <li>
                ✓ Tap <strong>Settings</strong> >{" "}
                <strong>Manage Subscription</strong>.
              </li>
              <li>
                ✓ Tap <strong>Manage Subscription</strong> to view your active
                subscription plan.
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
                ✓ Tap <strong>Wallet</strong> on the side navigation menu of the
                home page.
              </li>
              <li>
                ✓ Tap <strong>Fund Wallet</strong> on the Main Wallet interface.
              </li>
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
                ✓ Tap <strong>Wallet</strong> on the side navigation menu of the
                home page to return to the “Main Wallet” interface.
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
            <h3 className="font-semibold">
              1. How to transfer money from your Baddhia Wallet to another user
              on the Baddhia App
            </h3>
            <br />
            <ol className="gap-2 flex flex-col">
              <li>
                {" "}
                ✓ Tap <strong>Wallet </strong>on the side navigation menu of the
                home page.
              </li>
              <li> ✓ Tap Share Funds on the Main Wallet interface.</li>
              <li>
                {" "}
                ✓ Tap <strong>Transfer Funds </strong>to move your “Gift Wallet”
                current balance to your Main Wallet.
              </li>
              <li>
                {" "}
                ✓ Enter the correct username of the recipient and the amount you
                want to share e.g., $20.
              </li>{" "}
              <li>
                {" "}
                ✓ Tap <strong>Continue.</strong>
              </li>{" "}
              <li> ✓ Enter your login password for verification.</li>{" "}
              <li>
                {" "}
                ✓ Tap <strong>Share Funds</strong>.
              </li>{" "}
              <li>
                {" "}
                ✓ Check your “Transaction History” to see details of the
                transaction.
              </li>
            </ol>
            <p className="mt-2">
              <strong>Note:</strong> The fund will be converted from the
              sender’s home currency to the recipient’s home currency using the
              official exchange rate published by the apex bank of the
              recipient’s home currency on the date of the transaction.
            </p>
            <h3 className="font-semibold py-2 mt-2">
              2. How to Withdraw Money from your Gift Wallet to your Bank
              Account
            </h3>
            <ol className="flex gap-2 flex-col">
              <li>
                ✓ Tap <strong>Wallet </strong>on the side navigation menu of the
                home page.
              </li>
              <li>
                ✓ Tap the “Main Wallet” dashboard and swipe left to move to the
                “Gift Wallet” interface.
              </li>
              <li>
                ✓ Tap <strong>Transfer Funds</strong> to move your “Gift Wallet”
                current balance to your Main Wallet.
              </li>
              <li>
                ✓ Tap the “Gift Wallet” dashboard and swipe right to move back
                to the “Main Wallet” interface.
              </li>
              <li>
                ✓ Tap <strong>Withdraw</strong> on the Main Wallet interface.
              </li>
              <li>✓ Enter the “Amount” you want to “Withdraw”.</li>
              <li>
                ✓ Enter your “Account Number”. <strong>Note:</strong> Account
                details must correspond with your profile name.
              </li>
              <li>✓ Enter your login password</li>
              <li>
                ✓ Tap on <strong>Withdraw</strong>
              </li>
              <li>
                ✓ Baddhia will review your “Withdrawal Request” and credit your
                bank account
              </li>
              <li>
                ✓ If you encounter any challenge, kindly reach out to us via
                support@baddhia.ng or chat +234 706 207 2194.
              </li>
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
            <p className="font-semibold">
              Where to Find and How to Use the Display Emojis
            </p>
            <br />
            <ol className="gap-2 flex flex-col">
              <li>
                {" "}
                ✓ Tap <strong>Chat</strong> at the button navigation menu on the
                home page
              </li>
              <li>
                {" "}
                ✓ Tap <strong>Chat</strong> > Choose the user you want to send
                the emojis to.
              </li>
              <li>
                {" "}
                ✓ On the messaging interface, tap the{" "}
                <strong>Love Envelop Icon</strong> >{" "}
                <strong>Display Emoji</strong>.
              </li>
              <li> ✓ Search or scroll through the display emojis provided.</li>{" "}
              <li> ✓ Select your preferred display emoji.</li>{" "}
              <li>
                {" "}
                ✓ Tap <strong>Pay Now</strong> to purchase the emoji. The
                algorithm will check if you have sufficient balance in your{" "}
                <strong>“Baddhia Main Wallet”</strong>
              </li>{" "}
              <li>
                {" "}
                ✓ fter purchase, tap the <strong>
                  Love Envelop Icon
                </strong> > <strong>Display Emoji </strong>to see the emoji in
                the purchase section of the display emoji.
              </li>{" "}
              <li>
                {" "}
                ✓ Tap and edit the emoji to suit your style before sending.
              </li>{" "}
              <li>
                {" "}
                ✓ Tap <strong>Send</strong>.
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
            <p className="py-2 font-semibold">
              Where to Find and How to Use the Gift Emojis
            </p>
            <br />
            <ol className="gap-2 flex flex-col">
              <li>
                {" "}
                ✓ Tap <strong>Chat</strong> at the button navigation menu on the
                home page.
              </li>
              <li>
                {" "}
                ✓ Tap <strong>Chat</strong> > Choose the user you want to send
                the gift item(s) to.
              </li>
              <li>
                {" "}
                ✓ On the messaging interface, tap the{" "}
                <strong>Love Envelop Icon</strong> > <strong>Gift Emoji</strong>
                .
              </li>
              <li>
                {" "}
                ✓ Search or scroll through the gift items displayed in the
                library.
              </li>{" "}
              <li> ✓ Select your preferred gift item.</li>{" "}
              <li>
                {" "}
                ✓ Tap <strong>Send </strong>to purchase and send the gift. The
                algorithm will check if you have sufficient balance in your{" "}
                <strong>“Baddhia Main Wallet”</strong> to pay for the item.
              </li>{" "}
              <li>
                {" "}
                ✓ The “Gift Emoji” will be delivered to the recipient inside a
                gift box.
              </li>{" "}
              <li>
                {" "}
                ✓ The recipient will tap the gift box to view its content.
              </li>{" "}
              <li>
                {" "}
                ✓ The recipient will tap <strong>Accept </strong>or{" "}
                <strong>Reject</strong>.
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
              To upload Photo, Video or Text on Moments, follow the procedure
              outlined below:
            </p>
            <br />
            <p className="font-semibold pb-2">To upload Photo on Moments:</p>
            <ol className="gap-2 flex flex-col">
              <li>
                {" "}
                ✓ Tap <strong>Moments</strong> at the button navigation on the
                home page.
              </li>
              <li>
                {" "}
                ✓ Tap <strong>Upload</strong> > <strong>Photo</strong>.
              </li>
              <li className="leading-[22px]">
                {" "}
                ✓ Tap the <strong>Gallery Icon</strong> to choose a Photo from
                your phone’s gallery <strong>OR</strong> tap the{" "}
                <strong>Shutter Button</strong> to take a picture real-time. Tap
                the <strong>Camera</strong> Icon to switch your camera to front-
                facing or rear-facing.
              </li>
              <li> ✓ Crop the photo into your preferred size.</li>{" "}
              <li> ✓ Add your preferred caption to the Photo.</li>{" "}
              <li>
                {" "}
                ✓ Tap the <strong>Paper Plane Icon</strong> to post on Moments.
              </li>{" "}
            </ol>
            <p className="font-semibold py-2">To upload Video on Moments:</p>
            <ol className="flex gap-2 flex-col">
              <li>✓ Tap <strong>Moments</strong> at the button navigation on the home page.</li>
              <li>✓ Tap <strong>Upload</strong> > <strong>Text</strong>.</li>
              <li>✓ Type in the empty space on your screen.</li>
              <li>✓ Tap <strong>Text Style</strong> to change the Text font.</li>
              <li>✓ Tap the <strong>Paint Brush Icon</strong> to change the background colour.</li>
              <li>Tap the <strong>Paper Plane Icon</strong> to post on Moments.</li>
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
            Yes! Here is how to go about it.
            </p>
            <br />
            <p className="font-semibold mb-2">1. How to Invite an Exclusive Partner</p>
            <ol className="gap-2 flex flex-col">
              <li>
                {" "}
                ✓ Tap Exclusive Partner on the side navigation menu of the home page.
              </li>
              <li> ✓ Enter the “Username” of the User that you want to invite.</li>
              <li>
                {" "}
                ✓ <strong>Tap Search</strong>; The User Profile will be displayed.
              </li>{" "}
              <li>
                {" "}
                ✓ <strong>Tap Send Invite</strong>; The “Invitee” will receive a notification from you.
              </li>{" "}
            </ol>
          </div>
        </div>
        <div className="flex flex-col bg-[#e9e9e9] rounded-xl p-5 md:w-[60vw] w-[80vw] group mb-2">
          <div
            className="flex items-center gap-4 mb-4 cursor-pointer"
            onClick={() => handleToggleActive(12)}
          >
            <div
              className={`text-xl text-baddhia-orange cursor-pointer ${
                items[11].active ? "rotate-90" : ""
              }`}
            >
              {">"}
            </div>
            <div
              className={`font-semibold ${
                items[11].active ? "group-[.is-active]:font-bold" : ""
              }`}
            >
              <h3>How Do I Change My Account Password?</h3>
            </div>
          </div>
          <div
            className={`overflow-hidden ${
              !items[11].active ? "max-h-0" : "max-h-fit"
            } text-gray-500`}
          >
            <p>
              Yes, you can. Love is a beautiful thing, and we are all out just
              for you. Kindly do these things to increase your chances of
              finding love on the app.
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
            onClick={() => handleToggleActive(13)}
          >
            <div
              className={`text-xl text-baddhia-orange cursor-pointer ${
                items[12].active ? "rotate-90" : ""
              }`}
            >
              {">"}
            </div>
            <div
              className={`font-semibold ${
                items[12].active ? "group-[.is-active]:font-bold" : ""
              }`}
            >
              <h3>How do I Delete my Baddhia account?</h3>
            </div>
          </div>
          <div
            className={`overflow-hidden ${
              !items[12].active ? "max-h-0" : "max-h-fit"
            } text-gray-500`}
          >
            <p>
              Yes, you can. Love is a beautiful thing, and we are all out just
              for you. Kindly do these things to increase your chances of
              finding love on the app.
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
