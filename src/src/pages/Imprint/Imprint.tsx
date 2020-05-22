import * as React from "react";
import {Container} from "react-bootstrap";

import "./Imprint.scss";
import {Link} from "react-router-dom";

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
            <br/>
            <Link style={{float: 'right'}} to="/">« Zurück</Link>
        </Container>
    );
}