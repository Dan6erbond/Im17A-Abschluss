import * as React from "react";


import Tab from "./OneNoteComponents/Sidenav";

import "./DSchneeberger.scss";

function DSchneeberger() {
  return(
    <div className="d-schneeberger">
        <Tab/>
        Bell made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        <div>Burgermenu made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        Magnifying glass made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
    </div>
  );
}

export default DSchneeberger;
