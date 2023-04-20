import React from "react";
import { Link } from "react-router-dom";

function Header2() {
  return (
    <div className='className="flex font-semibold items-center bg-black flex-grow justify-between'>
      <div className="flex items-center text-xs space-x-4 mx-3 whitespace-nowrap ">
        <Link
          className="btn"
          to={""}
        >
          <p>Home</p>
        </Link>

        <Link
          className="btn"
          to={""}
        >
          <p>Live</p>
        </Link>

        <Link
          className="btn"
          to={""}
        >
          <p>NBA</p>
        </Link>

        <Link
          className="btn"
          to={""}
        >
          <p>MLB</p>
        </Link>

        <Link
          className="btn"
          to={""}
        >
          <p>NHL</p>
        </Link>

        <Link
          className="btn"
          to={""}
        >
          <p>Soccer</p>
        </Link>

        <Link
          className="btn"
          to={""}
        >
          <p>Tennis</p>
        </Link>

        <Link
          className="btn"
          to={""}
        >
          <p>PGA TOUR</p>
        </Link>

        <Link
          className="btn"
          to={""}
        >
          <p>NFL</p>
        </Link>

        <Link
          className="btn"
          to={""}
        >
          <p>Easy Parley</p>
        </Link>

        <Link
          className="btn"
          to={""}
        >
          <p>A-Z Sports</p>
        </Link>

        <Link
          className="btn"
          to={""}
        >
          <p>Favourites</p>
        </Link>

        <Link
          className="btn"
          to={""}
        >
          <p>Promotions</p>
        </Link>

        <Link
          className="btn"
          to={""}
        >
          <p>My Bets</p>
        </Link>
      </div>
    </div>
  );
}

export default Header2;
