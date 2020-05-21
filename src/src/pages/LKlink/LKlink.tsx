import * as React from "react";

import "./LKlink.scss";
import FrankfurtSlideshow from "../../components/Slideshow/Frankfurt/FrankfurtSlideshow";
import Banner from "../../components/Banner/Banner";

export default function LKlink() {
    return (
        <div className="l-klink">
            <Banner text=""/>
            <FrankfurtSlideshow/>
        </div>
    );
}