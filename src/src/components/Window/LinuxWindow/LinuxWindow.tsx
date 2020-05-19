import * as React from "react";
import ProcessWindow, {ProcessWindowProps} from "../ProcessWindow";

import "./LinuxWindow.scss";

export default function LinuxWindow(props: ProcessWindowProps) {
    return (
        <ProcessWindow className="linux-window" {...props} />
    )
}