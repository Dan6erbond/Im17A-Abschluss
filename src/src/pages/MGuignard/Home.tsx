import Banner from "../../components/Banner/Banner";
import {motion} from "framer-motion";
import * as React from "react";
import Limericks from "./Limericks";
import {MGuignardPageProps} from "./MGuignard";

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
};

export default function Home(props: MGuignardPageProps) {
    const {setComponent} = props;

    const [lateEvent] = React.useState<typeof lateEvents[0]>(lateEvents[Math.floor(Math.random() * lateEvents.length)]);

    return (
        <Banner text="Thank you for the wonderful three years, Ms Guignard!">
            <br/>
            <br/>
            <motion.div variants={{
                hidden: {
                    translateX: '100%'
                },
                visible: {
                    translateX: 0
                }
            }} transition={{duration: 0.5}} className="late-text">
                PS: You are {getDuration(lateEvent.date, Date.now()).toString()} too late
                to {lateEvent.name}.
            </motion.div>
            <br/>
            <br/>
            <button onClick={() => setComponent("PageSelection")}>
                Continue
            </button>
        </Banner>
    );
}