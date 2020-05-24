import * as React from "react";

import "./LKlink.scss";
import FrankfurtSlideshow from "../../components/Slideshow/Frankfurt/FrankfurtSlideshow";
import Banner from "../../components/Banner/Banner";
import NavBar from "../AFlick/NavBar";
import {Parallax, ParallaxLayer} from "react-spring/renderprops-addons";

export default function LKlink() {
    const parallaxRef = React.createRef<Parallax>();

    return (
        <div className="l-klink">
            <Parallax ref={parallaxRef} pages={2}>
                <ParallaxLayer offset={0.4} speed={1}>
                    <h2 onClick={() => parallaxRef.current?.scrollTo(1)}>
                        <span style={{textDecoration: 'line-through'}}>Klassenlehrerin</span>
                        <br/>
                        <span>Vertrauensperson</span>
                    </h2>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.3}>
                    <FrankfurtSlideshow/>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
}