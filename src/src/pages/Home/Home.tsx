import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import {teachers} from "../../teachers";
import {Link} from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import VizSensor from "react-visibility-sensor";
import {motion} from "framer-motion";

import "./Home.scss";

const students = [
    {
        name: "Alain",
        surname: "Siegrist",
        image: "./res/img/students/alain.png",
        plans: "I suck."
    },
    {
        name: "Albion",
        surname: "Spahija",
        image: "./res/img/students/albion.png",
        plans: "I suck."
    },
    {
        name: "Alexander",
        surname: "Greuter",
        image: "./res/img/students/alex.png",
        plans: "I suck."
    },
    {
        name: "Aron",
        surname: "Eggenberger",
        image: "./res/img/students/aron.png",
        plans: "Praktikum abschliessen und nach Möglichkeit noch ein weiteres Jahr arbeiten, dann evtl. FHS."
    },
    {
        name: "Felix",
        surname: "Fasler",
        image: "./res/img/students/felix.png",
        plans: "Praktikum finden."
    },
    {
        name: "RaviAnand",
        surname: "Mohabir",
        image: "./res/img/students/ravi.png",
        plans: "Nach dem Praktikum an die Fachhochschule gehen und den Bachelor of Mechanical Engineering machen.",
        href: "https://ravianand.me"
    },
    {
        name: "Simon",
        surname: "Kunze",
        image: "./res/img/students/simon.png",
        plans: "I suck."
    },
    {
        name: "Tim",
        surname: "Mosbacher",
        image: "./res/img/students/tim.png",
        plans: "I suck."
    }
];

export default function Home() {
    return (
        <Container fluid="md" className="home">
            <Banner text="Die Im17A ist mit der Schule fertig!">
                <motion.h3 variants={{
                    hidden: {
                        translateX: '50%'
                    },
                    visible: {
                        translateX: 0
                    }
                }} transition={{duration: 1}}>
                    Nun ist es doch genug damit.
                </motion.h3>
            </Banner>
            <br/>
            <Row>
                {students.map((s, i) => <Col key={i} md={4} sm={6}>
                    <Card className="student-card" style={{height: '100%'}}>
                        <div>
                            <div className="student-image" style={{background: `url(${s.image})`}}/>
                        </div>
                        <Card.Body>
                            <Card.Title>{s.name}</Card.Title>
                            <Card.Text>
                                {s.plans}
                            </Card.Text>
                            {s.href ? <Card.Link target="_blank" href={s.href}>
                                Webseite
                            </Card.Link> : null}
                        </Card.Body>
                    </Card>
                </Col>)}
            </Row>
            <Banner text="Für die Lehrer haben wir etwas Spezielles vorbereitet">
                <motion.h3 variants={{
                    hidden: {
                        translateX: '50%'
                    },
                    visible: {
                        translateX: 0
                    }
                }} transition={{duration: 1}}>
                    Als Dankeschön für die anstrengenden Jahre und den interessanten Unterricht...
                </motion.h3>
            </Banner>
            <Row>
                {teachers.map((t, i) => <Col key={i} md={3} sm={6}>
                    <Card className="teacher-card" style={{height: '100%'}}>
                        <div>
                            <div className="teacher-image"
                                 style={t.img ? {background: `url(${t.img})`} : undefined}/>
                        </div>
                        <Card.Body>
                            <Card.Title>{t.name}</Card.Title>
                            <Link className="card-link" to={t.path}>Zur Seite</Link>
                        </Card.Body>
                    </Card>
                </Col>)}
            </Row>
        </Container>
    );
}