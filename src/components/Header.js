import React from "react";
import logo5 from "../assets/logo5.png";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <header>
        {/* Top Nav */}

      <div className="flex items-center bg-black flex-grow justify-between">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Link to={""}>
            <div className="h-12 ">
              <img src={logo5} className=" h-10 object-contain " />
            </div>
          </Link>

          {/* Search Bar */}

          <div className="">
            <CiSearch className="h-12 p-4 color:white"/>
          </div>
        </div>

        {/* Right Nav */}

        <div className="">
          <Link
            className="px-4 py-1 text-sm rounded-full border bg-transparent hover:bg-white hover:bg-opacity-25"
            to={""}
          >
            Help {"&"} Contact
          </Link>
          <Link
            className="px-4 py-1 text-sm rounded-full border bg-transparent hover:bg-white hover:bg-opacity-25"
            to={""}
          >
            Log In
          </Link>
          <Link
            className="px-4 py-1 text-sm rounded-full border bg-[#d4b962] text-black hover:bg-white hover:bg-opacity-25 border-transparent bg-transparent hover:bg-[#dfcb89;]"
            to={""}
          >
            Register
          </Link>
        </div>
      </div>

    </header>
  );
};

export default Header;
