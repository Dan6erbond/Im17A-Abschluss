import * as React from "react";
import CommandLineInterface, {CommandLineInterfaceProps} from "../CommandLineInterface";

import "./Bash.scss";

export default function Bash(props: CommandLineInterfaceProps){
    return (
        <div className="bash">
            <CommandLineInterface {...props} pathColor="#89e032"/>
        </div>
    )
}