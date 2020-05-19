import * as React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

import "./ProcessWindow.scss";

export interface ProcessWindowProps {
    style?: React.CSSProperties;
    children?: React.ReactNode;
    title: string;
    showClose?: boolean;
    onClose?: () => void;
    className?: string;

}

export default function ProcessWindow(props: ProcessWindowProps) {
    const {style, children, title, showClose, onClose, className} = props;

    return (
        <div className={`window ${className}`} style={style}>
            <div className="toolbar">
                <div className="title">{title}</div>
                {showClose !== false ? <div className="close" onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes}/>
                </div> : null}
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    );
}