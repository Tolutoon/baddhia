import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import assets
import Logo from "/images/baddhiaLogo.svg";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
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
              <a href="/about">About us</a>
            </li>
            <li className="text-baddhia-orange text-base">
              <a href="/support">Support</a>
            </li>
            <li className="text-baddhia-orange text-base">
              <a
                href="https://play.google.com/store/apps/details?id=com.baddhia.app"
                target="_blank"
              >
                Download App
              </a>
            </li>
          </ul>
          <div className="flex relative">
            {toggleMenu ? (
              <AiOutlineClose
                fontSize={28}
                className="text-baddhia-orange cursor-pointer md:hidden"
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                fontSize={28}
                className="md:hidden text-baddhia-orange cursor-pointer"
                onClick={() => setToggleMenu(true)}
              />
            )}
            {toggleMenu && (
              <ul className="flex flex-col uppercase transition list-none rounded-xl fixed md:hidden top-2 w-full h-fit p-3 pt-0 justify-start bg-white shadow-2xl">
                <AiOutlineClose
                  fontSize={28}
                  onClick={() => setToggleMenu(false)}
                  className="cursor-pointer text-baddhia-orange justify-end w-full ml-[65px]"
                />{" "}
                <li className="text-baddhia-orange text-base w-full my-2 mt-10 flex items-end">
                  <a href="/about">About us</a>
                </li>
                <li className="text-baddhia-orange text-base w-full my-2 flex items-end">
                  <a href="/support">Support</a>
                </li>
                <li className="text-baddhia-orange text-base w-full my-2 flex items-end">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.baddhia.app"
                    target="_blank"
                  >
                    Download App
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

export default Header;
