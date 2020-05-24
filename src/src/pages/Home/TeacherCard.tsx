import {Teacher} from "../../teachers";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";
import {motion} from "framer-motion";

interface TeacherCardProps{
    teacher: Teacher;
}

export default function TeacherCard(props: TeacherCardProps) {
    const {teacher} = props;

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
                <div className="teacher-image"
                     style={teacher.img ? {background: `url(${teacher.img})`} : undefined}/>
            </div>
            <Card.Body>
                <Card.Title>{teacher.name}</Card.Title>
                <Link className="card-link" to={teacher.path}>Zur Seite</Link>
            </Card.Body>
        </motion.div>
    );
}