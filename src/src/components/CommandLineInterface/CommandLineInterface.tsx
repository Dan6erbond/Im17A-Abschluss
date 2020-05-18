import * as React from "react";

import "./CommandLineInterface.scss";

interface Commandlet {
    name: string;
    output?: CLILine[];
    pushLine?: boolean;
    callback?: (commandlet: Commandlet) => void;
    commandlets?: Commandlet[];
}

interface CLIString {
    value: string;
    readonly?: boolean;
    color?: string;
}

interface CLILine {
    strings: CLIString[];
    color?: string;
    fontSize?: number;
    includePath?: boolean;
}

export interface CommandLineInterfaceProps {
    lines?: CLILine[];
    path: CLIString[];
    pathColor?: string;
    commandlets: Commandlet[];
    defaultFontSize?: number;
}

interface CommandLineInterfaceState {
    lines: CLILine[];
    controlDown: boolean;
    shiftDown: boolean;
    commandlets: Commandlet[];
}

export default class CommandLineInterface extends React.Component<CommandLineInterfaceProps, CommandLineInterfaceState> {
    private readonly cliRef: React.RefObject<HTMLDivElement>;
    private readonly emptyLine = {strings: [{value: ""}], includePath: true};

    constructor(props: CommandLineInterfaceProps) {
        super(props);

        this.cliRef = React.createRef<HTMLDivElement>();

        this.state = {
            lines: props.lines ? props.lines.concat([{strings: this.getPath()}]) : [{strings: this.getPath()}],
            controlDown: false,
            shiftDown: false,
            commandlets: this.props.commandlets
        };

        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
        this.writeLine = this.writeLine.bind(this);
        this.getPath = this.getPath.bind(this);
        this.getPathString = this.getPathString.bind(this);
    }

    public getPathString() {
        return this.props.path.map(p => p.value).join("");
    }

    public getPath() {
        return this.props.path.map(p => ({
            value: p.value,
            color: p.color || this.props.pathColor || "inherit",
            readonly: true
        }));
    }

    public writeLine(...lines: CLILine[]) {
        let newLines: CLILine[] = Object.assign([], this.state.lines);
        let lastLine = newLines[newLines.length - 1];

        if (lines.length === 0) {
            let newLine = {
                strings: this.getPath()
            };
            newLines.push(newLine);
        }

        for (let i = 0; i < lines.length; i++) {
            let line = lines[i];

            let newLine = i == 0 ? {
                strings: lastLine.strings.concat(line.strings as any),
                color: lastLine.color,
                fontSize: lastLine.fontSize
            } : {
                strings: line.includePath ? this.getPath().concat(line.strings as any) : line.strings,
                color: line?.color,
                fontSize: line?.fontSize
            };

            if (i == 0) newLines.pop();
            newLines.push(newLine);
        }

        this.setState({lines: newLines});
        if (this.cliRef.current) this.cliRef.current.scrollTop = this.cliRef.current.scrollHeight;
    }

    public handleEnter() {
        const {commandlets, lines} = this.state;

        let commandletFound = false;
        let lastLine = lines[lines.length - 1].strings.map(s => s.value).join("");
        let input = lastLine.replace(this.getPathString(), "");

        for (let i = 0; i < commandlets.length; i++) {
            if (input === commandlets[i].name) {
                let commandlet = commandlets[i];

                commandletFound = true;

                if (commandlet.output) {
                    if (commandlet.pushLine === false) this.writeLine(...commandlet.output);
                    else this.writeLine(this.emptyLine, ...commandlet.output, this.emptyLine);
                    this.setState({commandlets: commandlet.commandlets || this.props.commandlets});
                } else {
                    this.writeLine();
                }

                if (commandlet.callback) commandlet.callback(commandlet);

                break;
            }
        }

        if (!commandletFound) {
            this.writeLine();
        }
    }

    public handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
        let newLines: CLILine[] = Object.assign([], this.state.lines);

        if (this.state.controlDown && event.key === "c") {
            this.writeLine({strings: [{value: " ^C"}]}, this.emptyLine);
        } else if (this.state.shiftDown && event.key === "Insert") {
            navigator.clipboard.readText()
                .then(text => {
                    this.writeLine({strings: [{value: text}]});
                });
        } else {
            if (event.key.match(/^(.)?$/)) {
                this.writeLine({strings: [{value: event.key}]});
            } else {
                switch (event.key) {
                    case "Enter":
                        this.handleEnter();
                        break;
                    case "Backspace":
                        let strings = newLines[newLines.length - 1].strings;
                        let lastString = strings[strings.length - 1];

                        if (!lastString.readonly) {
                            lastString.value = lastString.value.substring(0, lastString.value.length - 1);
                            if (lastString.value.length === 0) strings.pop();
                            newLines[newLines.length - 1].strings = strings;
                            this.setState({lines: newLines});
                        }
                        break;
                    case "Control":
                        this.setState({controlDown: true});
                        break;
                    case "Shift":
                        this.setState({shiftDown: true});
                        break;
                    default:
                        console.log(event.key);
                }
            }
        }
    };

    public handleKeyUp(event: React.KeyboardEvent<HTMLDivElement>) {
        if (event.key === "Control") {
            this.setState({controlDown: false});
        } else if (event.key === "Shift") {
            this.setState({shiftDown: false});
        }
    };

    render() {
        return (
            <div className="cli" tabIndex={0} onKeyDown={this.handleKeyDown}
                 onKeyUp={this.handleKeyUp} ref={this.cliRef}>
                {this.state.lines.map((l, i) =>
                    <span key={i}
                          style={{
                              color: l.color || "white",
                              fontSize: `${l.fontSize || this.props.defaultFontSize || 14}px`
                          }}>
                        {l.strings.map((s, i) => <span key={i} style={{
                            color: s.color || "inherit"
                        }}>{s.value}</span>)}
                        <br/>
                </span>)}
            </div>
        );
    }
}