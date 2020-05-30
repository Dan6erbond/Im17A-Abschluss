import React from "react";
import {Meme} from "./meme";

interface MemeCardProps {
    meme: Meme;
}

export default function MemeCard(props: MemeCardProps) {
    const {meme} = props;

    return (
            <div className="fullscreenPicture">
              <img src={meme.src}/>
            </div>
    );
}
