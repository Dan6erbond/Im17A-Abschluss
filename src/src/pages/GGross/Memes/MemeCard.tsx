import React from "react";
import { Meme } from "./meme";

import CloseButton from "../../../components/CloseButton/CloseButton";


interface MemeCardProps {
  meme: Meme;
}

export default function MemeCard(props: MemeCardProps) {
  const { meme } = props;

  return (
    <div className="fullscreenPicture">
      <div className="closeButton">
        <CloseButton />
      </div>
      <img src={meme.src} />
    </div>
  );
}
