import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {teachers} from "../../teachers";
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <React.Fragment>
            <Container fluid="md">
                <Row>
                    {teachers.map((t, i) => <Col key={i} md={3} sm={6}>
                        <Link to={t.path}>{t.name}</Link>
                    </Col>)}
                </Row>
            </Container>
        </React.Fragment>
    );
}