import * as React from "react";
import {Container} from "react-bootstrap";

import "./AFlick.scss";
import {Parallax, ParallaxLayer} from "react-spring/renderprops-addons";
import NavBar from "./NavBar";

export default function AFlick() {
    return (
        <div className="a-flick">
            <NavBar/>
            <Parallax pages={3.5}>
                <ParallaxLayer offset={0} speed={1}>
                    <div style={{
                        height: '100%',
                        width: '100%',
                        backgroundImage: `url('/res/img/aflick/html-code.jpg')`,
                        backgroundSize: 'cover'
                    }}/>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={-0.5}>
                    <div className="title">
                        <h2>Web-Dev</h2>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1.3} speed={0.1}>
                    <Container fluid="md">
                        <blockquote className="blockquote">
                            <p className="mb-0">
                                Dank Ihrer Einführung in Web-Design habe ich mein Portfolio als Webseite erstellt und
                                damit mich bei Firmen für das Praktikum beworben.
                            </p>
                            <footer className="blockquote-footer">
                                RaviAnand Mohabir
                            </footer>
                        </blockquote>
                    </Container>
                </ParallaxLayer>
                <ParallaxLayer offset={1.9} speed={0.3}>
                    <div className="title">
                        <h2>App</h2>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={0.1}>
                    <Container fluid="md">
                        <blockquote className="blockquote">
                            [Insert Quote]
                        </blockquote>
                    </Container>
                </ParallaxLayer>
                <ParallaxLayer offset={2.99} speed={0.4}>
                    <Container fluid="md">
                        <h3 style={{textAlign: 'center'}}>Vielen Dank für den spannenden Unterricht mit Ihnen!</h3>
                    </Container>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
}