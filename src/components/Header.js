import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div
        className="max-w-[1440px] flex flex-grow justify-between items-centre p-2 bg-neutral-400	
      "
      >
        {/* Left Nav */}

        <div className="font-face-gm flex items-center text-black text-3xl cursor-pointer px-[24px] py-[8px] font-extrabold">
          picks <span className=" text-green-700">.</span>
        </div>

        {/* Right Nav */}

        <div className="text-black flex items-center space-x-4 mx-3 whitespace-nowrap ">
          <Link className="px-2" to={""}>
            <p>Become a Seller</p>
          </Link>

          <Link className="px-2" to={""}>
            <p className="">Help {"&"} Contact</p>
          </Link>

          <Link className="px-2" to={""}>
            <p>Sign In</p>
          </Link>

          <Link className="border border-black px-4 p-1 rounded " to={""}>
            <p className="text-green-700	">Join</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
