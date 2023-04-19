import React from "react";
import { Link } from "react-router-dom";
import { RiCustomerService2Fill } from "react-icons/ri";

function Header2() {
  return (
    <div className='className="flex font-semibold items-center bg-black flex-grow justify-between'>
      <div className="flex items-center text-xs space-x-4 mx-3 whitespace-nowrap ">
        <Link
          className="cursor-pointer flex items-center px-4 py-1 text-sm rounded-full border bg-transparent hover:bg-white hover:bg-opacity-25"
          to={""}
        >
          <p>Home</p>
        </Link>

        <Link
          className="cursor-pointer px-4 py-1 text-sm rounded-full border bg-transparent hover:bg-white hover:bg-opacity-25 "
          to={""}
        >
          <p>Live</p>
        </Link>

        <Link
          className="cursor-pointer px-4 py-1 text-sm rounded-full border bg-transparent hover:bg-white hover:bg-opacity-25"
          to={""}
        >
          <p>NBA</p>
        </Link>

        <Link
          className="cursor-pointer px-4 py-1 text-sm rounded-full border bg-transparent hover:bg-white hover:bg-opacity-25"
          to={""}
        >
          <p>MLB</p>
        </Link>

        <Link
          className="cursor-pointer px-4 py-1 text-sm rounded-full border bg-transparent hover:bg-white hover:bg-opacity-25"
          to={""}
        >
          <p>NHL</p>
        </Link>

        <Link
          className="cursor-pointer px-4 py-1 text-sm rounded-full border bg-transparent hover:bg-white hover:bg-opacity-25"
          to={""}
        >
          <p>Soccer</p>
        </Link>

        <Link
          className="cursor-pointer px-4 py-1 text-sm rounded-full border bg-transparent hover:bg-white hover:bg-opacity-25"
          to={""}
        >
          <p>Tennis</p>
        </Link>

        <Link
          className="cursor-pointer px-4 py-1 text-sm rounded-full border bg-transparent hover:bg-white hover:bg-opacity-25"
          to={""}
        >
          <p>PGA TOUR</p>
        </Link>

        <Link
          className="cursor-pointer px-4 py-1 text-sm rounded-full border bg-transparent hover:bg-white hover:bg-opacity-25"
          to={""}
        >
          <p>NFL</p>
        </Link>

        <Link
          className="cursor-pointer px-4 py-1 text-sm rounded-full border bg-transparent hover:bg-white hover:bg-opacity-25"
          to={""}
        >
          <p>Easy Parley</p>
        </Link>

        <Link
          className="cursor-pointer px-4 py-1 text-sm rounded-full border bg-transparent hover:bg-white hover:bg-opacity-25"
          to={""}
        >
          <p>A-Z Sports</p>
        </Link>

        <Link
          className="cursor-pointer px-4 py-1 text-sm rounded-full border bg-transparent hover:bg-white hover:bg-opacity-25"
          to={""}
        >
          <p>Favourites</p>
        </Link>

        <Link
          className="cursor-pointer px-4 py-1 text-sm rounded-full border bg-transparent hover:bg-white hover:bg-opacity-25"
          to={""}
        >
          <p>Promotions</p>
        </Link>

        <Link
          className="cursor-pointer px-4 py-1 text-sm rounded-full border bg-transparent hover:bg-white hover:bg-opacity-25"
          to={""}
        >
          <p>My Bets</p>
        </Link>
      </div>
    </div>
  );
}

export default Header2;
