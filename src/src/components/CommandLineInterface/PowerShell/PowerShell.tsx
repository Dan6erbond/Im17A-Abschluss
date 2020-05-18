import * as React from "react";
import CommandLineInterface, {CommandLineInterfaceProps} from "../CommandLineInterface";

import "./PowerShell.scss";

export default function PowerShell(props: CommandLineInterfaceProps){
    return (
        <div className="powershell">
            <CommandLineInterface {...props} inputColor="yellow"/>
        </div>
    )
}