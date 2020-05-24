import React from "react";
import {Col, Container} from "react-bootstrap";
import {teachers} from "../../teachers";
import Banner from "../../components/Banner/Banner";
import VizSensor from "react-visibility-sensor";
import {motion} from "framer-motion";
import {students} from "../../students";

import "./Home.scss";
import StudentCard from "./StudentCard";
import TeacherCard from "./TeacherCard";
import {Link} from "react-router-dom";

export default function Home() {
    const [teachersVisible, setTeachersVisible] = React.useState<boolean>(false);
    const [studentsVisible, setStudentsVisible] = React.useState<boolean>(false);

    return (
        <div className="home">
            <Container fluid="md">
                <Banner text="Die Im17A ist mit der Schule fertig!">
                    <motion.h3 variants={{
                        hidden: {
                            x: 50,
                            transition: {
                                x: {stiffness: 1000, velocity: -100}
                            }
                        },
                        visible: {
                            x: 0
                        }
                    }}>
                        Nun ist es doch genug damit.
                    </motion.h3>
                </Banner>
                <br/>
                <VizSensor partialVisibility onChange={isVisible => {
                    if (isVisible && !studentsVisible)
                        setStudentsVisible(true);
                }}>
                    <motion.div className="row" initial="hidden" animate={studentsVisible ? "visible" : "hidden"}
                                variants={{
                                    hidden: {
                                        opacity: 0
                                    },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.05
                                        }
                                    }
                                }} transition={{duration: 1}}>
                        {students.map((s, i) => <Col key={i} md={4} sm={6}>
                            <StudentCard student={s}/>
                        </Col>)}
                    </motion.div>
                </VizSensor>
                <Banner text="Für die Lehrer haben wir etwas Spezielles vorbereitet">
                    <motion.h3 variants={{
                        hidden: {
                            x: 50,
                            transition: {
                                x: {stiffness: 1000, velocity: -100}
                            }
                        },
                        visible: {
                            x: 0
                        }
                    }}>
                        Als Dankeschön für die anstrengenden Jahre und den interessanten Unterricht...
                    </motion.h3>
                </Banner>
                <VizSensor partialVisibility onChange={isVisible => {
                    if (isVisible && !teachersVisible)
                        setTeachersVisible(true);
                }}>
                    <motion.div className="row" initial="hidden" animate={teachersVisible ? "visible" : "hidden"}
                                variants={{
                                    hidden: {
                                        opacity: 0
                                    },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.05
                                        }
                                    }
                                }} transition={{duration: 1}}>
                        {teachers.map((t, i) => <Col
                            key={i} md={3} sm={6}>
                            <TeacherCard teacher={t}/>
                        </Col>)}
                    </motion.div>
                </VizSensor>
            </Container>
            <footer>
                <span>© RaviAnand M & Dominik B, 2020</span>
                <Link to="/imprint">Impressum</Link>
            </footer>
        </div>
    );
}