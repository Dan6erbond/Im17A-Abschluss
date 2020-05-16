import * as React from "react";
import {faEgg} from "@fortawesome/free-solid-svg-icons";
import Banner from "../../components/Banner/Banner";
import KinderEgg from "./KinderEgg";
import ScrollButton from "../../components/ScrollButton/ScrollButton";

import "./FJerg.scss";

export default function FJerg() {
    const kinderEggRef = React.createRef<HTMLDivElement>();

    return (
        <div className="f-jerg">
            <Banner text="Vielen Dank für die tolle Zeit mit Ihnen!">
                <ScrollButton scrollRef={kinderEggRef}
                              icon={faEgg}/>
            </Banner>
            <KinderEgg kinderEggRef={kinderEggRef}/>
        </div>
    )
}