import React from "react";
import deliverooLogo from "./logo.png";

function Header() {
  return (
    <div className="Header">
      <div className="logoIMG">
        <img src={deliverooLogo} alt="logo du site deliveroo" />
      </div>
    </div>
  );
}

export default Header;
