import React from "react";
import logo5 from "../assets/logo5.png";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <header className="bg-black max-w-1920px w-full h-12 px-2 md:px-4">
      {/* desktop */}

      <div className="flex items-center h-12 justify-between">
        <div className="flex">
          <Link to={""}>
            <div className="h-12 ">
              <img src={logo5} className=" h-full " />
            </div>
          </Link>
          <div className="w-100%">
            <CiSearch />
          </div>
        </div>

        <div className="flex-wrap gap-y-2">
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
      {/* mobile */}
    </header>
  );
};

export default Header;
