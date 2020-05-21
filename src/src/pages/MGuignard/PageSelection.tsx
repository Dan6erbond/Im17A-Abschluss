import {MGuignardPageProps} from "./MGuignard";
import * as React from "react";
import {Col, Container, Row} from "react-bootstrap";

export default function PageSelection(props: MGuignardPageProps) {
    const {setComponent, addPoints, pages} = props;

    return (
        <div className="page-selection">
            <h1>Which page would you like to visit?</h1>
            <Container>
                <Row>
                    <Col md={6}>
                        {pages.includes("ClassTrip") && <button className="red" onClick={() => {
                            setComponent("ClassTrip");
                            addPoints(60);
                        }}>
                            Class Trip
                        </button>}
                    </Col>

                    <Col md={6}>
                        {pages.includes("Limericks") && <button className="blue" onClick={() => {
                            setComponent("Limericks");
                            addPoints(60);
                        }}>
                            Limericks
                        </button>}
                    </Col>
                </Row>
                <br/>
                <Row>
                </Row>
            </Container>
        </div>
    );
}