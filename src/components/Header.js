import React from "react";
import logo5 from "../assets/logo5.png";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <header className="bg-black fixed shadow-md w-full h-14 px-2 md:px-4">
      {/* desktop */}

      <div className="flex items-center h-12 justify-between">
        <Link to={""}>
          <div className="h-12 ">
            <img src={logo5} className=" h-full " />
          </div>
        </Link>
        <div className="">
          <CiSearch />
        </div>

        <div className="">
          <nav>
            <Link
              className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              to={""}
            >
              Help {"&"} Contact
            </Link>
            <Link
              className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              to={""}
            >
              Log In
            </Link>
            <Link
              className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              to={""}
            >
              Register
            </Link>
          </nav>
        </div>
      </div>
      {/* mobile */}
    </header>
  );
};

export default Header;
