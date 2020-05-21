import {MGuignardPageProps} from "./MGuignard";
import * as React from "react";

interface PodiumProps extends MGuignardPageProps {
    reset: () => void;
}

export default function Podium(props: PodiumProps) {
    const {reset, points} = props;

    return (
        <div className="podium">
            <div className="medal">
                <div>hoo</div>
            </div>
            <div>
                <p>1<sup>st</sup> place</p>
                <p style={{
                    fontSize: '40px'
                }}>You are an award-winning teacher!</p>
                <button onClick={reset}>Restart</button>
                <p style={{
                    paddingTop: '15px',
                    fontSize: '34px'
                }}>Points: {points}</p>
            </div>
        </div>
    );
}