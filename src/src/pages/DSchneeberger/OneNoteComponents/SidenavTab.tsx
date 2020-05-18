import * as React from "react";
import {Tab, Row, Col, Nav} from "react-bootstrap";
import Burger from "./svg/burgermenu.svg";
import Magnifying from "./svg/magnifying.svg";

function SideNavTab() {
  const [red, setRed] = React.useState(0);
  const [green, setGreen] = React.useState(0);
  const [blue, setBlue] = React.useState(0);
  React.useEffect(() => {
    setRed(GenerateRandomColour());
    setGreen(GenerateRandomColour());
    setBlue(GenerateRandomColour());
  }, [])

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
              <Nav.Link className="tab-link green" eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="tab-link red" eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <p>Content of Tab 1</p>
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

function GenerateRandomColour(){
  let colour = Math.floor(Math.random() * 255);
  return colour;
}

export default SideNavTab;
