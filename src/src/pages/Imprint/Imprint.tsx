import * as React from "react";
import {Col, Container, Row} from "react-bootstrap";

import "./Imprint.scss";
import {Link} from "react-router-dom";
import {teachers} from "../../teachers";

export default function Imprint() {
    return (
        <Container fluid="md" className="imprint">
            <br/>
            <h2>About</h2>
            <p>
                Diese Seite wurde als Abschiedsgeschenk für die Lehrer der IMS-Klasse I3A erstellt.
            </p>
            <h2>Impressum</h2>
            <p>
                Diese Website wurde erstellt von:
            </p>
            <p>
                RaviAnand Mohabir
                <br/>
                Miescherweg 3,
                <br/>
                4812 Mühlethal
                <br/>
                Schweiz
                <br/>
            </p>
            <p>
                Dominik Berger
            </p>
            <h3>Credits</h3>
            <p>
                <b>Layout:</b> React-Bootstrap wurde für das allgemeine Layout eingesetzt.
            </p>
            <p>
                <b>Icons:</b> Die meisten Icons stammen aus dem Fontawesome Icon-Repository.
            </p>
            <p>
                <b>Fonts:</b> Alle eingesetzten Fonts, sind auf Google Fonts zu finden.
            </p>
            <h4>Pages</h4>
            <Container>
                <Row>
                    <Col md={6} sm={12}>
                        <b>Dominik Berger</b>
                        <ul>
                            {["Daniel Schneeberger", "Geneviève Gross", "Sascha Fiechter", "Loredana Arleo", "Matthias Graf", "Andreas Neeser"].sort().map((teacher, index) =>
                                <li key={index}>
                                    <Link
                                        to={`/${teachers.filter(t => t.name === teacher)[0]?.path}`}>
                                        {teacher}
                                    </Link>
                                </li>)}
                        </ul>
                    </Col>
                    <Col md={6} sm={12}>
                        <b>RaviAnand Mohabir</b>
                        <ul>
                            {["Lil Klink", "Alexander Flick", "Réne Weidmann", "Lars Meyer", "Marielle Guignard", "Fabian Jerg"].sort().map((teacher, index) =>
                                <li key={index}>
                                    <Link
                                        to={`/${teachers.filter(t => t.name === teacher)[0]?.path}`}>
                                        {teacher}
                                    </Link>
                                </li>)}
                        </ul>
                    </Col>
                </Row>
            </Container>
            <br/>
            <Link style={{float: 'right'}} to="/">« Zurück</Link>
        </Container>
    );
}