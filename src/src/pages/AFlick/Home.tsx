import {Button, Jumbotron} from "react-bootstrap";
import {Link, Route} from "react-router-dom";
import {teachers} from "../../teachers";
import Carousel from "react-bootstrap/esm/Carousel";
import * as React from "react";

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

export default function Home() {
    return (
        <div className="a-flick-home">
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
            <h2> Carousel </h2>
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