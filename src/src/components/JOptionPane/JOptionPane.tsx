import * as React from "react";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import "./JOptionPane.scss";

interface JOptionPaneProps {
    title: string;
    img: string;
    text: string;
    onClose: () => void;
    onOk: () => void;
}

export default function JOptionPane(props: JOptionPaneProps) {
    const {title, img, text, onClose, onOk} = props;

    return (
        <div className="j-option-pane">
            <div className="toolbar">
                <div className="title">{title}</div>
                <div className="close" onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes}/>
                </div>
            </div>
            <div className="content">
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
            </div>
        </div>
    )
}