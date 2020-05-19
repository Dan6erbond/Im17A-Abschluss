import * as React from "react";
import CommandLineInterface, {CLIString, CommandLineInterfaceProps} from "../CommandLineInterface";

import "./Bash.scss";

interface BashProps extends CommandLineInterfaceProps {
    username: string;
    pcName: string;
}

export default function Bash(props: Partial<BashProps>) {
    const {username, pcName} = props;

    return (
        <div className="bash">
            <CommandLineInterface commandlets={props.commandlets || []} {...props} pathColor="#89e032" path={[{
                value: `${username}@${pcName}`
            }, {
                value: ":",
                color: "white"
            }, {
                value: "~",
                color: "#719ecd"
            }, {
                value: "$ ",
                color: "white"
            }]}/>
        </div>
    )
}