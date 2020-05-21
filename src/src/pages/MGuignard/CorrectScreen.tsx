import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretRight, faCheck} from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import {MGuignardPageProps} from "./MGuignard";

export default function CorrectScreen(props: MGuignardPageProps) {
    const {setComponent, points, pages} = props;

    return (
        <div className="correct-screen">
            <div>
                <p>Points: {points}</p>
                <button onClick={() => setComponent(pages.length > 0 ? "PageSelection" : "Podium")}>
                    Next <FontAwesomeIcon icon={faCaretRight}/>
                </button>
            </div>
            <div>
                <FontAwesomeIcon icon={faCheck} style={{height: '75px', width: '75px'}}/>
                <br/>
                <br/>
                <h3>Scroll Down</h3>
            </div>
        </div>
    );
}