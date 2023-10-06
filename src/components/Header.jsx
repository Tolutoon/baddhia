import React from "react";

// import assets
import Logo from "/images/baddhia-logo.svg";

function Header() {
  return (
    <header className="w-full bg-white shadow-md font-semibold fixed z-10 transition-all duration-300">
      <div className="flex justify-between items-center px-40 py-4">
        <div className="cursor-pointer">
          <img src={Logo} alt="" />
        </div>

        <nav>
          <ul className="flex gap-x-7 uppercase">
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
        </nav>
      </div>
    </header>
  );
}

export default Header;
