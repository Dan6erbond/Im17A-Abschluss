import {Carousel} from "react-bootstrap";
import * as React from "react";
import '../../extensions';
import {MGuignardPageProps} from "./MGuignard";
import CorrectScreen from "./CorrectScreen";

const limericks = [
    {
        author: "Dominik Berger",
        text: "The name is Ravi\nHe's probbaly related to Ghandi\nA little man indeed\nAlways down to a feat\nNow, have you met his boyfriend Randy?"
    },
    {
        author: "Simon Kunze",
        text: "There lived a young man in a village near Zürich\nWhose task it was to compose a limerick\n'Twas a while 'til he followed through\nAnd uncreative he was to boot\nNo wonder then that it came out a little shit"
    },
    {
        author: "Alexander Greuter",
        text: "There once was a doctor called crane\nHe spent most of his life in vain\nHe even showed up in a movie once or twice\nThe one starring that rat guy which might not come as a surprise\nDespite all that he couldn’t even think of a fitting name"
    },
    {
        author: "Alain Siegrist",
        text: "There once was a German man\nHe had a \"great\" plan\nHe promised to make the country strong\nFor some reason nobody thought he was wrong\nThen he committed genocide better than the ku klux klan"
    },
    {
        author: "Felix Fasler",
        text: "There once was a man who lay in the grass\nHe wasn't able to play a nice pass\nSome said he should be ignored\nAnd told us about Rashford\nBut most still thought he was pure class"
    },
    {
        author: "Albion Spahija",
        text: "There once was a man in seventh heaven,\nDriving peacefully in his Porsche 911,\nUntil one day,\nA foreign masked man came,\nAnd shot the driver with a AK-47."
    },
    {
        author: "Tim Mosbacher",
        text: "There was once a man riding a bear\nHe was the american nightmare\nPutin was the name\noff the person playing the war game\nBut nobody knows, that he sells selfmade knightwear."
    },
    {
        author: "Aron Eggenberger",
        text: "The lovely wife who awaits inevitable doom\nSwiftly she cleans the floor with a broom\nVery early, her husband comes home\nThankfully, he sees his wife alone\nWhat he won't see is the man in the storage room"
    },
    {
        author: "RaviAnand Mohabir",
        text: "There was a country of Azerbaijan,\nwhere Dominik had gone.\nHe was met by some Arabs,\nthat put him on some camels.\nNow he is the new Khan."
    }
];

export default function Limericks (props: MGuignardPageProps) {
    const limericksRef = React.createRef<HTMLDivElement>();

    return (
        <div className="limericks">
            <CorrectScreen {...props} scrollRef={limericksRef}/>

            <div ref={limericksRef}>
                <Carousel fade>
                    {limericks.shuffle().map((l, i) => <Carousel.Item key={i}>
                        <div>
                            <div>
                                <p>
                                    {l.text.split("\n").map((t: string, j: number) => <span
                                        key={j}>{t}<br/></span>)}
                                </p>

                                <p> - {l.author}</p>
                            </div>
                        </div>
                    </Carousel.Item>)}
                </Carousel>
            </div>
        </div>
    );
}