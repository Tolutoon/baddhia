import React, { useState } from "react";

// import assets
import Logo from "/images/baddhia-logo.png";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="w-full bg-white shadow-md font-semibold fixed z-10 transition-all duration-300">
      <div className="flex justify-between items-center py-4 xl:px-40 px-10">
        <div className="cursor-pointer">
          <img src={Logo} alt="" style={{ width: 51, height: 50 }} />
        </div>

        <nav>
          <ul className="md:flex gap-x-7 uppercase hidden transition">
            <li className="text-baddhia-orange text-base">
              <a href="/about">About us</a>
            </li>
            <li className="text-baddhia-orange text-base">
              <a href="/support">Support</a>
            </li>
            <li className="text-baddhia-orange text-base">
              <a href="/">Download App</a>
            </li>
          </ul>
          <div className="flex relative">
            {toggleMenu ? <AiOutlineClose fontSize={28}/> : <BiMenuAltRight fontSize={28} className="md:hidden text-baddhia-orange cursor-pointer"/>}
            {toggleMenu && (
              <ul className="flex flex-col gap-x-7 uppercase transition">
                <li className="text-baddhia-orange text-base">
                  <a href="/about">About us</a>
                </li>
                <li className="text-baddhia-orange text-base">
                  <a href="/support">Support</a>
                </li>
                <li className="text-baddhia-orange text-base">
                  <a href="/">Download App</a>
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
