import * as React from "react";
import {Tab, Row, Col, Nav} from "react-bootstrap";
import DistanceLearning from "../DistanceLearning/DistanceLearning";

import Burger from "./svg/burgermenu.svg";
import Magnifying from "./svg/magnifying.svg";

function SideNavTab() {

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3} className="tab">
          <div className="sidenav-header">
            <img src={Burger}/>
            <p>I17-20A Swir</p>
            <img src={Magnifying}/>
          </div>
          <Nav variant="tabs" className="flex-column">
            <Nav.Item>
              <Nav.Link className="tab-link green" eventKey="first">Distance Learning</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="tab-link red" eventKey="second">Anwesenheitskontrolle</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <DistanceLearning/>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <p>Content of Tab 2</p>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default SideNavTab;
