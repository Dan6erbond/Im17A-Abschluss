import * as React from "react";
import Banner from "../../components/Banner/Banner";
import KinderEgg from "./KinderEgg";

import "./FJerg.scss";

export default function FJerg() {
    const kinderEggRef = React.createRef<HTMLDivElement>();

    return (
        <div className="f-jerg">
            <Banner text="Vielen Dank für das tolle Jahr mit Ihnen!"/>
            <KinderEgg kinderEggRef={kinderEggRef}/>
        </div>
    )
}