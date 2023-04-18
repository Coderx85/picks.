import React from "react";
import logo2 from "../assets/logo2.png";

const Header = () => {
  return (
    <header>
      {/* desktop */}

      <div className="fixed shadow-md w-full h-18 px-2 md:px-4">
        <div className="h-16">
          <img src={logo2} className="h-full" />
        </div>
      </div>
      {/* mobile */}
    </header>
  );
};

export default Header;
