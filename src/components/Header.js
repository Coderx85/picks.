import React from "react";
import logo5 from "../assets/logo5.png";

const Header = () => {
  return (
    <header>
      {/* desktop */}

      <div className="bg-black fixed shadow-md w-full h-14 px-2 md:px-4">
        <div className="h-10">
          <img src={logo5} className="h-full" />
        </div>
      </div>
      {/* mobile */}
    </header>
  );
};

export default Header;
