import React from "react";
import { Link } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";

function Header2() {
  return (
    <div className='className="flex font-semibold items-center bg-black flex-grow justify-between'>
      <div className="flex justify-center items-center text-xs space-x-4 mx-4 py-2 whitespace-nowrap ">
        <Link className="btn_white" to={""}>
          <GrHomeRounded className="flex stroke-black h-5 " />
          <p className="mx-1">Home</p>
        </Link>

        <Link className="btn" to={""}>
          <p>Live</p>
        </Link>

        <Link className="btn" to={""}>
          <p>NBA</p>
        </Link>

        <Link className="btn" to={""}>
          <p>MLB</p>
        </Link>

        <Link className="btn" to={""}>
          <p>NHL</p>
        </Link>

        <Link className="btn" to={""}>
          <p>Soccer</p>
        </Link>

        <Link className="btn" to={""}>
          <p>Tennis</p>
        </Link>

        <Link className="btn" to={""}>
          <p>PGA TOUR</p>
        </Link>

        <Link className="btn" to={""}>
          <p>NFL</p>
        </Link>

        <Link className="btn" to={""}>
          <p>A-Z Sports</p>
        </Link>

        <Link className="btn" to={""}>
          <p>Favourites</p>
        </Link>

        <Link className="btn" to={""}>
          <p>My Bets</p>
        </Link>
      </div>
    </div>
  );
}

export default Header2;
