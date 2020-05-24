import * as React from "react";
import SideTab from "./SidenavTab";
import Nav from "./NavBar";

function Navigation() {
  return (
    <div className="onenote">
      <Nav/>
      <div className="sidenav">
        <SideTab/>
      </div>
    </div>
  );
}

export default Navigation;
