import * as React from "react";
import FrankfurtSlideshow from "../../components/Slideshow/Frankfurt/FrankfurtSlideshow";
import {Parallax, ParallaxLayer} from "react-spring/renderprops-addons";
import {Table} from "react-bootstrap";

import "./LKlink.scss";

const incomeStatement = [
    {
        income: "Klassengeist"
    },
    {
        income: "FRW Themen"
    },
    {
        expense: "15 Schüler"
    },
    {
        income: "Planungsgeschick / Organisation"
    },
    {
        expense: "Konflikt mit Schulleitung"
    },
    {
        income: "Korrespondenz"
    },
    {
        expense: "Kopierkosten"
    },
    {
        income: "Wissenschaftliche Dokumente schreiben"
    },
    {
        expense: "Hanteln zuhause lassen"
    }
];

const balance = [
    {
        asset: "Ausbildung",
        liability: "Nerven"
    },
    {
        asset: "Praktikum"
    }
];

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
                            {incomeStatement.map((is, i) => <tr key={i}>
                                <td>{i+1}</td>
                                <td>{is.expense}</td>
                                <td>{is.income}</td>
                            </tr>)}
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
                            {balance.map((b, i) => <tr>
                                <td>{b.asset}</td>
                                <td>{b.liability}</td>
                            </tr>)}
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