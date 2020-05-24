import * as React from "react";
import NavBar from "./NavBar";
import {Parallax, ParallaxLayer} from "react-spring/renderprops-addons";

import "./AFlick.scss";

export default function AFlick() {
    const parallaxRef = React.createRef<Parallax>();

    return (
        <div className="a-flick">
            <NavBar/>
            <Parallax ref={parallaxRef} pages={3.5}>
                <ParallaxLayer offset={0} speed={1}>
                    <div style={{
                        height: '100%',
                        width: '100%',
                        backgroundImage: `url('/res/img/aflick/html-code.jpg')`,
                        backgroundSize: 'cover'
                    }} onClick={() => parallaxRef.current?.scrollTo(0.8)}/>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={-0.5}>
                    <div className="title" onClick={() => parallaxRef.current?.scrollTo(0.8)}>
                        <h2>Web-Dev</h2>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1.3} speed={0.1}>
                    <div className="container-md" style={{height: '100%'}}
                         onClick={() => parallaxRef.current?.scrollTo(1.6)}>
                        <blockquote className="blockquote">
                            <p className="mb-0">
                                Dank Ihrer Einführung in Web-Design habe ich mein Portfolio als Webseite erstellt und
                                damit mich bei Firmen für das Praktikum beworben.
                            </p>
                            <footer className="blockquote-footer">
                                RaviAnand Mohabir
                            </footer>
                        </blockquote>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1.9} speed={0.3}>
                    <div className="title">
                        <h2>App</h2>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={0.1}>
                    <div className="container-md" style={{height: '100%'}}
                         onClick={() => parallaxRef.current?.scrollTo(2.99)}>
                        <blockquote className="blockquote">
                            [Insert Quote]
                        </blockquote>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={2.99} speed={0.4}>
                    <div className="container-md" style={{height: '100%'}}
                         onClick={() => parallaxRef.current?.scrollTo(0)}>
                        <h3 style={{textAlign: 'center'}}>Vielen Dank für den spannenden Unterricht mit Ihnen!</h3>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
}