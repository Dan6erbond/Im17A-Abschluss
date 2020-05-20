import * as React from "react";
import {Button, Jumbotron, Nav, Navbar, NavDropdown} from "react-bootstrap";
import Carousel from "react-bootstrap/esm/Carousel";

import "./AFlick.scss";
import {Link, Route} from "react-router-dom";
import {teachers} from "../../teachers";
import NavBar from "./NavBar";
import Home from "./Home";
import WebDev from "./WebDev";
import Java from "./Java";
import DistanceLearning from "./DistanceLearning";
import DankMemes from "./DankMemes";

export default function AFlick() {
    return (
        <div className="a-flick">
            <NavBar/>
            <Route path={`/${teachers.filter(t => t.name === "Alexander Flick")[0].path}`} exact>
                <Home/>
            </Route>
            <Route path={`/${teachers.filter(t => t.name === "Alexander Flick")[0].path}/distance-learning`}>
                <DistanceLearning/>
            </Route>
            <Route path={`/${teachers.filter(t => t.name === "Alexander Flick")[0].path}/web-dev`}>
                <WebDev/>
            </Route>
            <Route path={`/${teachers.filter(t => t.name === "Alexander Flick")[0].path}/java`}>
                <Java/>
            </Route>
            <Route path={`/${teachers.filter(t => t.name === "Alexander Flick")[0].path}/dank-memes`}>
                <DankMemes/>
            </Route>
        </div>
    );
}