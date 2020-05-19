import * as React from "react";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import {teachers} from "../../teachers";

export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>
                <Link
                    to={`/${teachers.filter(t => t.name === "Alexander Flick")[0].path}`}>
                    Alexander Flick
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink activeClassName="active" className="nav-link"
                             to={`/${teachers.filter(t => t.name === "Alexander Flick")[0].path}/distance-learning`}>
                        Distance Learning
                    </NavLink>
                    <NavLink activeClassName="active" className="nav-link"
                             to={`/${teachers.filter(t => t.name === "Alexander Flick")[0].path}/web-dev`}>
                        Web-Dev
                    </NavLink>
                    <NavLink activeClassName="active" className="nav-link"
                             to={`/${teachers.filter(t => t.name === "Alexander Flick")[0].path}/java`}>
                        Java
                    </NavLink>
                    <NavDropdown title="Lehrer" id="collasible-nav-dropdown">
                        <NavDropdown.Item>
                            <Link
                                to={teachers.filter(t => t.name === "Réne Weidmann")[0].path}>
                                Réne Weidmann
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link
                                to={`/${teachers.filter(t => t.name === "Sascha Fiechter")[0].path}`}>
                                Sascha Fiechter
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link
                                to={`/${teachers.filter(t => t.name === "Fabian Jerg")[0].path}`}>
                                Fabian Jerg
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link
                                to={`/${teachers.filter(t => t.name === "Lars Meyer")[0].path}`}>
                                Lars Meyer
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item>
                            <Link
                                to={`/${teachers.filter(t => t.name === "Alexander Flick")[0].path}`}>
                                Alexander Flick
                            </Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <NavLink activeClassName="active" className="nav-link"
                             to={`/${teachers.filter(t => t.name === "Alexander Flick")[0].path}/dank-memes`}>
                        Dank Memes
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}