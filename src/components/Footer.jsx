import React from "react";
import Logo from "/images/logoWhite.svg";
import { Link } from "react-router-dom";
import { FiInstagram } from "react-icons/fi";
import { FaSquareXTwitter, FaFacebook, FaLinkedin } from "react-icons/fa6";

function Blogfooter() {

  const scrollToTop = () => {
    document.getElementById("body").scroll(0,0)
  }

  return (
    <footer className="footer">
      <div className="flex max-sm:flex-col-reverse sm:flex pl-10 sm:justify-between text-white pt-16 sm:px-12 md:px-40 pb-10">
        <div className="text-sm">
          <img className="w-14 mb-3" src={Logo} alt="" />
          <p>Copyright © 2023 All Right Reeserved</p>
          <p>Baddhia</p>
        </div>

        <div className="sm:text-right">
          <div className="flex sm:justify-end text-xl mb-4">
           <a href="https://www.instagram.com/baddhia/?hl=en"><FiInstagram /></a> 
            <a href="https://twitter.com/baddhia"><FaSquareXTwitter className="ml-4" /></a>
            <a href="https://www.facebook.com/Baddhiia/"><FaFacebook className="ml-4" /></a>
            <a href="https://www.linkedin.com/company/baddhia/"><FaLinkedin className="ml-4" /></a>
          </div>
          <div className="text-sm flex flex-col md:items-end">
            <Link to={'/terms&condition'} onClick={scrollToTop} className="mb-1">Terms of Use</Link>
            <Link to={'/privacy'} onClick={scrollToTop} className="mb-1">Privacy Policy</Link>
            <Link to={'/blog'} onClick={scrollToTop} className="mb-1">Blog</Link>
            <Link to={'/support'} onClick={scrollToTop} className="mb-1">Frequently Asked Questions</Link>

            <a href="https://play.google.com/store/apps/details?id=com.baddhia.app" target="_blank" rel="noreferrer">
              <button
                type="submit"
                className="bg-white py-2 px-9 text-baddhia-orange rounded-full mt-6 mb-9 w-fit "
              >
                Download
              </button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Blogfooter;
