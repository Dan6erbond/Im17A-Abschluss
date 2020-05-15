import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {teachers} from "../../teachers";
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <React.Fragment>
            <Container fluid="md" style={{padding: '15px'}}>
                <h2 style={{textAlign: 'center'}}>Die Im17A ist fertig mit der Schule!</h2>
                <br/>
                <Row>
                    {teachers.map((t, i) => <Col style={{textAlign: 'center', padding: '15px'}} key={i} md={3} sm={6}>
                        <Link className="btn btn-outline-dark" to={t.path}>{t.name}</Link>
                    </Col>)}
                </Row>
            </Container>
        </React.Fragment>
    );
}