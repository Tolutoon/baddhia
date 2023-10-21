import React, { useState } from "react";
import { Link } from "react-router-dom";

// import assets
import Logo from "/images/baddhia-Logo.png";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from 'react-icons/gi';

function BlogHeader() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="w-full bg-white shadow-md font-semibold fixed z-10 transition-all duration-300">
      <div
        className={`flex ${
          toggleMenu ? "" : "justify-between"
        } items-center md:py-4 xl:px-40 px-10 py-2`}
      >
        <Link to={"/"} className="cursor-pointer">
          <img src={Logo} alt="" style={{ width: 51, height: 50 }} />
        </Link>

        <nav>
          <ul className="md:flex gap-x-7 uppercase hidden transition list-none">
            <li className="text-baddhia-orange text-base">
              <a href="">Dating advice</a>
            </li>
            <li className="text-baddhia-orange text-base">
              <a href="">Baddhia tips</a>
            </li>
            <li className="text-baddhia-orange text-base">
              <a
                href="/about"
              >
                About us
              </a>
            </li>
            <li className="text-baddhia-orange text-base">
              <a
                href=""
              >
                sign up
              </a>
            </li>
          </ul>
          <div className="flex relative">
            {toggleMenu ? (
              <AiOutlineClose
                fontSize={28}
                className="text-baddhia-orange md:hidden max-md:hidden cursor-pointer"
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <GiHamburgerMenu
                fontSize={28}
                className="md:hidden text-baddhia-orange cursor-pointer"
                onClick={() => setToggleMenu(true)}
              />
            )}
            {toggleMenu && (
              <ul className="z-30 fixed -top-0 -right-2 p-3 w-[70vw] h-full shadow-2xl md:hidden list-none uppercase bg-white
              flex flex-col justify-start items-end rounded-md text-baddhia-orange animate-slide-in">
                <AiOutlineClose
                  fontSize={28}
                  onClick={() => setToggleMenu(false)}
                  className="cursor-pointer text-baddhia-orange mr-6 mt-2"
                />{" "}
                <li className="text-baddhia-orange text-base w-full my-2 mt-4 flex items-end">
                  <a href="">Dating advice</a>
                </li>
                <li className="text-baddhia-orange text-base w-full my-2 flex items-end">
                  <a href="">baddhia tips</a>
                </li>
                <li className="text-baddhia-orange text-base w-full my-2 flex items-end">
                  <a
                    href="/about"
                  >
                    about us
                  </a>
                </li>
                <li className="text-baddhia-orange text-base w-full my-2 flex items-end">
                  <a
                    href=""
                  >
                    Sign up
                  </a>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default BlogHeader;