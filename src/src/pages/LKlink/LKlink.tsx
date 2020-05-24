import * as React from "react";
import FrankfurtSlideshow from "../../components/Slideshow/Frankfurt/FrankfurtSlideshow";
import {Parallax, ParallaxLayer} from "react-spring/renderprops-addons";
import {Container, Table} from "react-bootstrap";

import "./LKlink.scss";

export default function LKlink() {
    const parallaxRef = React.createRef<Parallax>();

    return (
        <div className="l-klink">
            <Parallax ref={parallaxRef} pages={4}>
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
                <ParallaxLayer offset={2.4} speed={1}>
                    <h2 onClick={() => parallaxRef.current?.scrollTo(3)}>
                        <span>Unsere </span>
                        <span style={{textDecoration: 'line-through'}}>Buchhaltungs-Tabellen-Ding </span>
                        <span>Erfolgsrechnung</span>
                    </h2>
                </ParallaxLayer>
                <ParallaxLayer offset={3} speed={0.3}>
                    <div className="container-md" onClick={() => parallaxRef.current?.scrollTo(0)} style={{
                        paddingTop: '35px'
                    }}>
                        <h3>Finanzbericht Im17A 2019/2020</h3>
                        <br/>
                        <h4>Erfolgsrechnung</h4>
                        <Table striped bordered hover responsive="lg">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Aufwand</th>
                                <th>Erfolg</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td/>
                                <td>Klassengeist</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td/>
                                <td>FRW Themen</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>15 Schüler</td>
                                <td/>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td/>
                                <td>Planungsgeschick / Organisation</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td/>
                                <td>Korrespondenz</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td/>
                                <td>Wissenschaftliche Dokumente schreiben</td>
                            </tr>
                            </tbody>
                        </Table>
                        <br/>
                        <h4>Bilanz</h4>
                        <Table striped bordered hover responsive="lg">
                            <thead>
                            <tr>
                                <th>Soll</th>
                                <th>Haben</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Ausbildung</td>
                                <td>Nerven</td>
                            </tr>
                            </tbody>
                        </Table>
                        <br/>
                        <span>Daten vom 22. Mai, 2020</span>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
}