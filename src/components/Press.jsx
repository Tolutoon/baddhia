import React from "react";

const pressData = [
    {
        id: 1,
        logoUrl: '/images/techCabalLogo.svg' ,
        backgroundUrl: 'https://imgbox.com/qEhu4Zou',
        url: 'https://techcabal.com/2022/10/27/baddhia-launches-app-aims-to-inspire-bliss-in-every-romantic-relationship-across-africa/',
    },
    {
        id: 2,
        logoUrl: '/images/pulseLogo.svg' ,
        backgroundUrl: '/https://imgbox.com/Psz9IvdN',
        url: 'https://www.pulse.ng/lifestyle/relationships-weddings/fight-breakfast-syndrome-find-love-and-build-long-lasting-relationships-on-baddhia/v1fr9s0',
    },
    {
        id: 3,
        logoUrl: '/images/guardianLogo.svg',
        backgroundUrl: 'https://imgbox.com/F8V9DDo6',
        url: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjZ7_Dfk-yBAxXClFwKHaWEBXIQFnoECAsQAQ&url=https%3A%2F%2Fguardian.ng%2Flife%2Fhow-baddhia-is-helping-africans-find-compatible-partners-and-rekindle-intimacy-in-romantic-relationships%2F&usg=AOvVaw0iCxRm1mAe7KL06hyADwFX&opi=89978449',
    }

]

function Press() {
  return (
    <section className="px-10 md:px-20">
      <h2 className="xl:text-3xl text-2xl font-semibold mx-auto xl:mb-20 mb-10 text-center">
        Baddhia in the <span className="text-baddhia-orange">press</span>
      </h2>
      <div className="flex md:flex-row flex-col justify-center items-center gap-10">
            <div className="md:h-[350px] bg-[url('/images/techCabal.png')] md:w-[323px] h-[280px] w-[263px] bg-cover bg-no-repeat relative shadow-md rounded-2xl">
              <div className="flex absolute bg-[#FFF6F2] md:w-[323px] h-[40%] w-[263px] bottom-0 flex-col gap-[16px] rounded-2xl justify-center items-center">
                <img className="w-[130px] h-[20px]" src='/images/techCabalLogo.svg' alt="" />
                <a href='https://techcabal.com/2022/10/27/baddhia-launches-app-aims-to-inspire-bliss-in-every-romantic-relationship-across-africa/' target="_blank" rel="noopener noreferrer"> {/* Added target="_blank" for opening links in a new tab */}
                  <button
                    type="submit"
                    className="bg-baddhia-orange p-4 px-8 rounded-[16px] font-semibold md:text-base text-[12px] text-white transition-all duration-300 hover:scale-105"
                  >
                    Read More
                  </button>
                </a>
              </div>
            </div>
      </div>
    </section>
  );
}

export default Press;

