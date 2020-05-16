import * as React from "react";
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlassCheers} from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";
import Banner from "../../components/Banner/Banner";
import Limericks from "./Limericks";
import ClassTrip from "./ClassTrip";

import "./MGuignard.scss";

const lateEvents = [
    {
        name: "Christmas 2019",
        date: Date.parse("25 Dec 2019 00:00:00 GMT")
    },
    {
        name: "stop the man from eating a bat",
        date: Date.parse("17 Dec 2019 00:00:00 GMT")
    }
];

const getDuration = function (d1: any, d2: any) {
    return {
        toString: function () {
            let diffTime = Math.abs(d2 - d1);

            const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30 * 365));
            diffTime -= diffYears * 1000 * 60 * 60 * 24 * 30 * 365;

            const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30));
            diffTime -= diffMonths * 1000 * 60 * 60 * 24 * 30;

            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
            diffTime -= diffDays * 1000 * 60 * 60 * 24;

            const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
            diffTime -= diffHours * 1000 * 60 * 60;

            const diffMinutes = Math.floor(diffTime / (1000 * 60));
            diffTime -= diffMinutes * 1000 * 60;

            const diffSeconds = Math.floor(diffTime / (1000));

            return `${diffYears} years, ${diffMonths} months, ${diffDays} days, ${diffHours} hours, ${diffMinutes} minutes and ${diffSeconds} seconds`;
        }
    };
}

export default function MGuignard() {
    const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => window.scrollTo(0, ref.current!!.offsetTop);

    const [lateEvent] = React.useState<typeof lateEvents[0]>(lateEvents[Math.floor(Math.random() * lateEvents.length)]);

    const limericksTitleRef = React.createRef<HTMLDivElement>();

    return (
        <div className="m-guignard">
            <Banner text="Thank you for the wonderful three years, Ms Guignard!">
                <motion.p variants={{
                    hidden: {
                        translateX: '100%'
                    },
                    visible: {
                        translateX: 0
                    }
                }} transition={{duration: 0.5}} className="late-text">
                    PS: You are {getDuration(lateEvent.date, Date.now()).toString()} too late
                    to {lateEvent.name}.
                </motion.p>
                <Button onClick={() => scrollToRef(limericksTitleRef)} variant="outline-dark">
                    <FontAwesomeIcon icon={faGlassCheers} style={{height: '55px', width: '55px'}}/>
                    <br/>
                    <span style={{fontSize: '24px'}}>Scroll Down</span>
                </Button>
            </Banner>

            <Limericks limericksTitleRef={limericksTitleRef}/>

            <ClassTrip/>
        </div>
    );
}