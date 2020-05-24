import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown, faCaretRight, faCheck} from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import {MGuignardPageProps} from "./MGuignard";

interface CorrectScreenProps extends MGuignardPageProps {
    scrollRef: React.RefObject<any>;
}

export default function CorrectScreen(props: CorrectScreenProps) {
    const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => window.scrollTo(0, ref.current!!.offsetTop);

    const {setComponent, points, pages, scrollRef} = props;

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
                <br/>
                <button onClick={() => scrollToRef(scrollRef)}>
                    <FontAwesomeIcon icon={faCaretDown} style={{height: '35px', width: '35px'}}/>
                </button>
            </div>
        </div>
    );
}