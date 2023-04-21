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
        <div className="mt-2 w-1/2 flex items-center flex-grow sm:flex-grow-0">
          <Link to={""}>
            <div className="h-12 mx-2">
              <img
                src={logo5}
                alt="beiskylogo"
                className=" h-10 object-contain "
              />
            </div>
          </Link>

          {/* Search Bar */}

          <div className="flex h-10 mx-10 w-6/12 mt-1">
            <CiSearch className="object-fill h-7 w-7 cursor-pointer" />
            <input
              className="h-7 w-full rounded-full placeholder:text-slate-600 placeholder:opacity-60 hover:placeholder-opacity-100 placeholder:text-sm"
              type="text"
              placeholder="  Search for Teams, Players or Events"
            />
          </div>
        </div>

        {/* Right Nav */}

        <div className="flex items-center text-xs space-x-4 mx-3 whitespace-nowrap ">
          <Link className="btn" to={""}>
            <RiCustomerService2Fill className="h-5" />
            <p className="mx-2">Help {"&"} Contact</p>
          </Link>

          <Link className="btn " to={""}>
            <p>Log In</p>
          </Link>

          <Link className="btn_gold" to={""}>
            <p>Register</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
