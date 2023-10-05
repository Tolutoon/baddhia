import React from "react";
import Logo from "/images/baddhia-logo.svg";

function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md font-semibold">
      <div className="flex justify-between items-center px-40 py-6">
        <div className="">
          <img src={Logo} alt="" />
        </div>

        <ul className="flex gap-x-5 uppercase">
          <li className="text-baddhia-orange">
            <a href="/">About us</a>
          </li>
          <li className="text-baddhia-orange">
            <a href="/">Support</a>
          </li>
          <li className="text-baddhia-orange">
            <a href="/">Download App</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
