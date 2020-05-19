import * as React from "react";
import ProcessWindow, {ProcessWindowProps} from "../ProcessWindow";

import "./JOptionPane.scss";

interface JOptionPaneProps extends ProcessWindowProps{
    img: string;
    text: string;
    onOk?: () => void;
}

export default function JOptionPane(props: JOptionPaneProps) {
    const {img, text, onOk} = props;

    return (
        <ProcessWindow {...props} className="j-option-pane">
            <div className="main">
                <div>
                    <img src={img}
                         alt="j-option-pane" height="75" width="auto"/>
                </div>
                <div className="text">
                    {text}
                </div>
            </div>
            <div className="bottom">
                <button onClick={onOk}>
                    OK
                </button>
            </div>
        </ProcessWindow>
    )
}