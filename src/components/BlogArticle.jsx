import React from 'react'
import Article1 from "/images/Article 1.jpg"
import Frameblog1 from "/images/perfect Match 1.jpg"
import Frameblog3 from "/images/Frameblog4.png"


function BlogArticle() {
  return (
    <div>
      <div className='sm:flex text-sm lg:px-36 lg:pt-16 md:px-10 sm:mt-11 px-8 md:justify-between mb-48'>
        <div className='sm:w-1/2 sm:mr-6 lg:mr-10 mb-16'>
        <h1 className='font-bold text-[18px] md:text-2xl text-justify mb-2 mt-7 md:mt-0 w-full'>Mastering Baddhia: A Comprehensive Guide to Navigating the App</h1>
        <div className='flex gap-8 mb-5 mt-4'>
          <div className='text-center text-xs'>
            <p className='font-bold'>Post Author</p>
          <p>Elegbeleye Paul</p>
          </div>
          <div className='text-center text-xs'>
            <p className='font-bold'>Date</p>
          <p>October 28, 2023</p>
          </div>
          <div className='text-center text-xs'>
            <p className='font-bold'>Category</p>
          <p>Baddhia Tips</p>
          </div>
        </div>
          <img className='h-96 w-full object-cover sm:h-80 mb-10' src={Article1} alt=""/>
          <p className='mb-7 text-justify'><p className='mb-1'>Have you ever experienced disappointment in relationships that made you decide not to go into one again?</p>
          <p className='mb-2'>Or have you worked so hard in a relationship that later brought you heartbreak and sadness?</p>
          <p className='mb-2'>Perhaps you have used many dating sites and apps to find a perfect match and build a lasting relationship, but in the short run, it didn't work out. Or, you think using dating sites is not reliable and in every case, not advisable due to ghosting, catfishing, dating scams, and so on. Never worry again because something good is here.</p>
          <p className='mb-2'>You may have decided not to use dating apps so as not to appear desperate and unchaste, and you may have become hopeless about finding a compatible partner due to awful experiences and prejudices from past failed relationships. But you don't have to worry anymore.</p>
          The narrative is changing because we have you covered with Baddhia Matchmaking, Online Dating, and Intimacy-building App.</p> 

          <p className='mb-3 text-justify text-[16px] font-semibold'>
          Even if any of these are your experiences:</p>
          <ul className='mb-4'>
            <li>(I) Difficulties in finding a reliable compatible romantic partner.</li>
            <li>(II) Lack of boldness to approach the opposite sex.</li>
            <li>(III) Difficulties in finding a platonic relationship.</li>
          </ul>
      
          <p className='text-justify mb-6'>
          You can now smile because the <span className='font-semibold'>BADDHIA MATCHMAKING AND ONLINE DATING</span> app will help you find the perfect person for you.
          </p>
          <p className='mb-2 text-justify'>Baddhia is a <span className='font-semibold'>Matchmaking, Online Dating, Intimacy-building, and Social Commerce</span> platform that helps individuals find compatible partners, exchange gifts, and build healthy, lifelong romantic relationships.</p>

          <p className='mb-2 text-justify'>Your compatible partner may not be around you, but we offer you a platform that brings them close to you and gets you connected to them.</p>
          <p className='mb-8 text-justify'>Many have given up their search for compatibility because of the difficulties in finding a compatible partner, but by using the Baddhia app, you have a platform that enables you to get the match of your dreams because there is always a match.</p>

          <p className='mb-3 text-justify'>With <span className='font-bold'>BADDHIA MATCHMAKING APP FEATURES,</span> you get to:</p>
          <ul className='text-justify mb-6'>
            <li>(i) Meet, connect, and vibe with someone who complements your uniqueness.</li>
            <li>(ii) Find your perfect match, anywhere in the world.</li>
            <li>(iii) Shop and exchange gifts from the comfort of anywhere you are.</li>
            <li>(iv) Express your emotions wholeheartedly with customized emojis.</li>
          </ul>

          <h1 className='font-bold mb-2'>HOW TO FIND YOUR COMPATIBLE PARTNER USING THE BADDHIA APP</h1>
          <ol className='text-justify mb-6'>
            <li>1. Download the app from <a className='text-blue-500 underline' href="https://play.google.com/store/apps/details?id=com.baddhia.app" target="_blank">Google PlayStore here</a></li>
            <li>2. Sign up with your valid e-mail address and a confirmation mail will be sent to the email address you provided. Check the mail and get confirmed. Set your password and get onboard.</li>
            <li>3. State your purpose on the Baddhia App; the purpose to which you are joining, that is, either you are searching for a perfect match or you want to build a platonic relationship</li>
            <li>4. Then, complete your profile and personality evaluation screening.</li>
            <li>5. Now, you can start meeting awesome people on the App. And you know, you can also invite your loved one or crush.</li>
          </ol>
          <h1 className='font-bold mb-3'>BENEFITS OF USING THE BADDHIA APP FEATURES</h1>
          <p className='mb-1'><span className='font-semibold'>Baddhia app usage</span> gets you the opportunity to:</p>
          <ul><li>
          (i) Get profile suggestions of genuine singles living near you.
            </li></ul>
        </div>
        <div className='sm:w-1/2 sm:ml-6 lg:ml-20'>
          <div className='relative mb-16'>
            <img className='h-96 w-full object-cover sm:h-80' src={Frameblog1} alt="" />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
              <p className='text-2xl w-60 mb-10 font-bold'>Find a Compatible
                Partner on Baddhia Today!
              </p>
              <a href="https://play.google.com/store/apps/details?id=com.baddhia.app" target='_blank'>
                
              <button
               className='bg-baddhia-orange py-3 px-10 rounded-full'>Download Now
               </button>
               </a>
            </div>
          </div>
          <div className='mb-16'>
            <div className='bg-B-writeup py-20 w-full'> 
              <div className='text-center text-black'>
              <p className='mb-4 font-bold text-lg'>
              Subscribe to our newsletter
              </p>
              <p className='px-10'>Join our exclusive mailing list to receive updates and other information firsthand.</p>
              <div>
        
                <div className='md:px-11 px-5'>
                <input className='mt-6 pl-4 mb-8  py-3 w-full rounded-full outline-none' placeholder='EMAIL' type="email" name="Email Address" id="emailAddress" required/>

                <div>
                  <button className='bg-baddhia-orange py-3 px-12 sm:py-3 sm:px-16 rounded-full text-white'>Submit</button>
                </div>
                </div>
            </div>
            
                
              </div>
              
              
            </div>
          </div>

          
          <div className='mb-7'>
            <p className='text-baddhia-orange font-semibold mb-5 text-lg'>Related Article</p>
            <div className='w-full rounded-2xl overflow-hidden shadow-lg'>
              <img className='h-60 w-full object-cover' src={Frameblog3} alt="" />
              <div className='sm:px-10 text-sm px-3 py-5 lg:h-64 bg-orange-100 w-auto md:h-80 sm:h-64'>
              <h3 className='font-bold text-[17px] mb-3 sm:mb-5'>More Than Romance: Building Lasting Friendships on Baddhia</h3>
              <p className='text-sm text-justify mb-3 sm:mb-6'>Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
              </p>
              <div className='flex justify-between items-center'>
                <div>
                  <h4 className='font-bold mb-1 text-[13px] sm:text-sm sm:mb-2'>
                    Fletcher James
                  </h4>
                  <p className='sm:text-sm text-[12px]'>June 28, 2018</p>
                </div>
                <div>
                  <button className='text-white bg-baddhia-orange px-[12px] py-[9px] text-[13px] sm:text-sm sm:py-1 sm:px-2 rounded-full'>Read More</button>
                </div>
              </div>
              </div>
            </div>
          </div>

          <div>
          <div className='w-full rounded-2xl overflow-hidden shadow-lg'>
              <img className='h-60 w-full object-cover' src={Frameblog3} alt="" />
              <div className='sm:px-10 text-sm px-3 py-5 lg:h-64 bg-orange-100 w-auto md:h-80 sm:h-64'>
              <h3 className='font-bold text-[17px] mb-3 sm:mb-5'>More Than Romance: Building Lasting Friendships on Baddhia</h3>
              <p className='text-sm mb-3 text-justify sm:mb-6'>Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
              </p>
              <div className='flex justify-between items-center'>
                <div>
                  <h4 className='font-bold mb-1 text-[13px] sm:text-sm sm:mb-2'>
                    Fletcher James
                  </h4>
                  <p className='sm:text-sm text-[12px]'>June 28, 2018</p>
                </div>
                <div>
                  <button className='text-white bg-baddhia-orange px-[12px] py-[9px] text-[13px] sm:text-sm sm:py-1 sm:px-2 rounded-full'>Read More</button>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogArticle

