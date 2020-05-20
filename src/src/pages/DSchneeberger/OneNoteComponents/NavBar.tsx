import * as React from "react";
import MenuButton from "./svg/menubutton.svg";
import Bell from "./svg/bell.svg";

function NavBar() {
  return (
    <div className="topnav">
      <div className="brand">
        <span><img src={MenuButton}/> OneNote</span>
      </div>
      <div className="topnav-content">
        <img src={Bell} />
        <div className="topnav-name">
          <span>Daniel Schneeberger</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
