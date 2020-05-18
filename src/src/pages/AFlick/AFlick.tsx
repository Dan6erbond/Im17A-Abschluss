import * as React from "react";
import {Button, Jumbotron, Nav, Navbar, NavDropdown} from "react-bootstrap";
import Carousel from "react-bootstrap/esm/Carousel";

import "./AFlick.scss";
import {Link} from "react-router-dom";
import {teachers} from "../../teachers";

const carouselItems = [
    {
        title: "Bootstrap",
        description: "Mit Bootstrap Grids können schnell Layouts aufgebaut werden."
    },
    {
        title: "Java",
        description: "Java ist einfach gay."
    },
    {
        title: "jQuery",
        description: "jQuery vereinfacht das verändern von HTML DOM-Elementen."
    },
    {
        title: "API",
        description: "Eine API erlaubt die Kommunikation mit Web-Diensten."
    }
];

export default function AFlick() {
    return (
        <div className="a-flick">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>
                    <Link to="/">React-Bootstrap</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>
                            Features
                        </Nav.Link>
                        <Nav.Link>
                            Pricing
                        </Nav.Link>
                        <NavDropdown title="Lehrer" id="collasible-nav-dropdown">
                            <NavDropdown.Item>
                                <Link
                                    to={teachers.filter(t => t.name === "Réne Weidmann")[0].path}>
                                    Réne Weidmann
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link
                                    to={teachers.filter(t => t.name === "Sascha Fiechter")[0].path}>
                                    Sascha Fiechter
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link
                                    to={teachers.filter(t => t.name === "Fabian Jerg")[0].path}>
                                    Fabian Jerg
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link
                                    to={teachers.filter(t => t.name === "Lars Meyer")[0].path}>
                                    Lars Meyer
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item>
                                <Link
                                    to={teachers.filter(t => t.name === "Alexander Flick")[0].path}>
                                    Alexander Flick
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            More deets
                        </Nav.Link>
                        <Nav.Link eventKey={2}>
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                    Rekursion ist wenn man wieder auf die gleiche Seite, wie zuvor kommt.
                </p>
                <p>
                    <Button variant="primary">
                        <Link
                            to={teachers.filter(t => t.name === "Alexander Flick")[0].path}>
                            Learn More
                        </Link>
                    </Button>
                </p>
            </Jumbotron>
            <h2>Carousel</h2>
            <br/>
            <Carousel>
                {carouselItems.shuffle().map((c, i) => <Carousel.Item key={i}>
                    <div className="carousel-item-inner">
                        <div>
                            <h3>{c.title}</h3>
                            <p>{c.description}</p>
                        </div>
                    </div>
                </Carousel.Item>)}
            </Carousel>
        </div>
    );
}