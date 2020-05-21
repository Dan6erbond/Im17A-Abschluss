import * as React from "react";
import Home from "./Home";
import {CSSTransition, TransitionGroup} from "react-transition-group";

import "./MGuignard.scss";
import Limericks from "./Limericks";
import PageSelection from "./PageSelection";
import ClassTrip from "./ClassTrip";
import Podium from "./Podium";

export type MGuignardPage = "Home" | "Limericks" | "ClassTrip" | "PageSelection" | "Podium";

export interface MGuignardPageProps {
    setComponent: (component: MGuignardPage) => void;
    points: number;
    addPoints: (points: number) => void;
    pages: MGuignardPage[];
}

export default function MGuignard() {
    const [components, setComponents] = React.useState<MGuignardPage[]>([]);
    const [pages, setPages] = React.useState<MGuignardPage[]>(["Limericks", "ClassTrip"]);
    const [points, setPoints] = React.useState(0);

    const addComponent = (component: MGuignardPage) => {
        setComponents(components.concat(component));
        setPages(pages.filter(p => p !== component));
    };

    React.useEffect(() => addComponent("Home"), []);

    const addPoints = (p: number) => {
        setPoints(points + p);
    };

    const props = {
        setComponent: addComponent,
        points: points,
        addPoints: addPoints,
        pages: pages
    };

    const reset = () => {
        setComponents(["Home"]);
        setPages(["Limericks", "ClassTrip"]);
        setPoints(0);
    };

    return (
        <div className="m-guignard">
            <TransitionGroup component={null}>
                {components.map((c, i) => i === components.length - 1 &&
                    <CSSTransition key={i} timeout={300} classNames="page">
                        <div>
                            {c === "Home" ? <Home {...props}/> : c === "PageSelection" ?
                                <PageSelection {...props}/> : c === "ClassTrip" ?
                                    <ClassTrip {...props}/> : c === "Limericks" ?
                                    <Limericks {...props}/> : <Podium {...props} reset={reset}/>}
                        </div>
                    </CSSTransition>)}
            </TransitionGroup>
        </div>
    );
}