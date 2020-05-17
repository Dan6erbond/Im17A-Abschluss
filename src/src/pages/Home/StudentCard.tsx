import {Card} from "react-bootstrap";
import React from "react";
import {student} from "../../students";
import {motion} from "framer-motion";

interface StudentCardProps {
    student: student;
}

export default function StudentCard(props: StudentCardProps) {
    const {student} = props;

    return (
        <motion.div className="student-card" variants={{
            hidden: {
                y: -50,
                transition: {
                    y: { stiffness: 1000, velocity: -100 }
                }
            },
            visible: {
                y: 0
            }
        }}>
            <div>
                <div className="student-image" style={{background: `url(${student.img})`}}/>
            </div>
            <Card.Body>
                <Card.Title>{student.name}</Card.Title>
                <Card.Text>
                    {student.plans}
                </Card.Text>
                {student.href ? <Card.Link target="_blank" href={student.href}>
                    Webseite
                </Card.Link> : null}
            </Card.Body>
        </motion.div>
    );
}