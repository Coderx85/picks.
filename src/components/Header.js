import React from "react";
import logo5 from "../assets/logo5.png";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { RiCustomerService2Fill } from "react-icons/ri";

const Header = () => {
  return (
    <header>
      {/* Top Nav */}

      <div className="flex font-semibold items-center bg-black flex-grow justify-between">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Link to={""}>
            <div className="h-12 mx-2">
              <img src={logo5} className=" h-10 object-contain " />
            </div>
          </Link>

          {/* Search Bar */}

          <div className="">
            <CiSearch className="" />
          </div>
        </div>

        {/* Right Nav */}

        <div className="flex items-center text-xs space-x-4 mx-3 whitespace-nowrap ">
          <Link
            className="cursor-pointer flex items-center px-4 py-1 text-sm rounded-full border bg-transparent hover:bg-white hover:bg-opacity-25"
            to={""}
          >
            <p>Help {"&"} Contact .</p>
            <RiCustomerService2Fill className="h-5" />
          </Link>

          <Link
            className="cursor-pointer px-4 py-1 text-sm rounded-full border bg-transparent hover:bg-white hover:bg-opacity-25 "
            to={""}
          >
            <p>Log In</p>
          </Link>

          <Link
            className="cursor-pointer px-4 py-1 text-sm rounded-full border bg-[#d4b962] text-black hover:bg-white hover:bg-opacity-25 border-transparent bg-transparent hover:bg-[#dfcb89;]"
            to={""}
          >
            <p>Register</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
