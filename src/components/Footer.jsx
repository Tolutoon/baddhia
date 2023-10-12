import React from "react";
import Logo from "/images/logoWhite.svg";
import { FiInstagram } from "react-icons/fi";
import { FaSquareXTwitter, FaFacebook, FaLinkedin } from "react-icons/fa6";

function Blogfooter() {
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
            <FiInstagram />
            <FaSquareXTwitter className="ml-4" />
            <FaFacebook className="ml-4" />
            <FaLinkedin className="ml-4" />
          </div>
          <div className="text-sm">
            <p className="mb-1">Terms of Use</p>
            <p className="mb-1">Privacy Policy</p>
            <p className="mb-1">Blog</p>
            <p className="mb-1">Frequently Asked Questions</p>
            <button className="bg-white py-2 px-9 text-baddhia-orange rounded-full mt-6 mb-9">
              <a href="">Download</a>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Blogfooter;
