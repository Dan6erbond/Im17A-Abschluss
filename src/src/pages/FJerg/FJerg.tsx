import * as React from "react";
import {faEgg} from "@fortawesome/free-solid-svg-icons";
import Banner from "../../components/Banner/Banner";
import ScrollButton from "../../components/ScrollButton/ScrollButton";

import "./FJerg.scss";
import Selecta from "./Selecta";

export default function FJerg() {
    const selectaRef = React.createRef<HTMLDivElement>();

    return (
        <div className="f-jerg">
            <Banner text="Vielen Dank für die tolle Zeit mit Ihnen!">
                <ScrollButton scrollRef={selectaRef}
                              icon={faEgg}/>
            </Banner>
            <Selecta selectaRef={selectaRef}/>
        </div>
    )
}