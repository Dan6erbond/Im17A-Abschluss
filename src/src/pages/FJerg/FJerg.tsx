import * as React from "react";
import {faEgg, faMicrochip} from "@fortawesome/free-solid-svg-icons";
import Banner from "../../components/Banner/Banner";
import ScrollButton from "../../components/ScrollButton/ScrollButton";
import Selecta from "./Selecta";
import JOPCode from "./JOPCode";

import "./FJerg.scss";

export default function FJerg() {
    const selectaRef = React.createRef<HTMLDivElement>();
    const jopCodeRef = React.createRef<HTMLDivElement>();

    return (
        <div className="f-jerg">
            <Banner text="Vielen Dank für die tolle Zeit mit Ihnen!">
                <ScrollButton scrollRef={selectaRef}
                              icon={faEgg}/>
            </Banner>
            <Selecta selectaRef={selectaRef}/>
            <Banner text="Bereiten Sie sich nun auf schreklichen Code vor.">
                <ScrollButton scrollRef={jopCodeRef}
                              icon={faMicrochip}/>
            </Banner>
            <JOPCode jopCodeRef={jopCodeRef}/>
            <br/>
        </div>
    );
}