import * as React from "react";

import "./CommandLineInterface.scss";
import {ChangeEvent} from "react";

export interface Commandlet {
    command: RegExp;
    onRun?: CLILine[] | ((result: any) => CLILine[]);
    pushLine?: boolean;
    commandlets?: Commandlet[];
}

export interface CLIString {
    value: string;
    readonly?: boolean;
    color?: string;
}

export interface CLILine {
    strings: CLIString[];
    color?: string;
    fontSize?: number;
    includePath?: boolean;
}

export interface CommandLineInterfaceProps {
    lines?: CLILine[];
    path: CLIString[];
    pathColor?: string;
    inputColor?: string;
    commandlets: Commandlet[];
    defaultFontSize?: number;
}

interface CommandLineInterfaceState {
    lines: CLILine[];
    controlDown: boolean;
    shiftDown: boolean;
    commandlets: Commandlet[];
    inputs: string[];
    inputIndex?: number;
    content: string;
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
            commandlets: this.props.commandlets,
            inputs: [],
            content: ""
        };

        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
        this.writeLine = this.writeLine.bind(this);
        this.getPath = this.getPath.bind(this);
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

            let newLine = i === 0 ? {
                strings: lastLine.strings.concat(line.strings as any),
                color: lastLine.color,
                fontSize: lastLine.fontSize
            } : {
                strings: line.includePath ? this.getPath().concat(line.strings as any) : line.strings,
                color: line?.color,
                fontSize: line?.fontSize
            };

            if (i === 0) newLines.pop();
            newLines.push(newLine);
        }

        this.setState({lines: newLines}, () => {
            if (this.cliRef.current) {
                // let start = this.cliRef.current.selectionStart;
                // this.cliRef.current.selectionStart = this.cliRef.current.selectionEnd = start + 1;
                this.cliRef.current.scrollTop = this.cliRef.current.scrollHeight;
            }
        });
    }

    public handleEnter() {
        const {commandlets, lines} = this.state;

        let commandletFound = false;

        let lastLine = lines[lines.length - 1].strings.map(s => s.value).join("");
        let input = lastLine.replace(this.getPathString(), "");

        let newInputs = Object.assign([], this.state.inputs);
        newInputs.push(input);
        this.setState({inputs: newInputs, inputIndex: undefined});

        for (let i = 0; i < commandlets.length; i++) {
            let result = commandlets[i].command.exec(input);

            if (result) {
                let commandlet = commandlets[i];

                commandletFound = true;

                if (commandlet.onRun) {
                    if (typeof commandlet.onRun !== "function") {
                        if (commandlet.pushLine === false) this.writeLine(...commandlet.onRun);
                        else this.writeLine(this.emptyLine, ...commandlet.onRun, this.emptyLine);
                    } else {
                        let lines = commandlet.onRun(result);
                        if (commandlet.pushLine === false) this.writeLine(...lines);
                        else this.writeLine(this.emptyLine, ...lines, this.emptyLine);
                    }
                    this.setState({commandlets: commandlet.commandlets || this.props.commandlets});
                } else {
                    this.writeLine();
                }

                break;
            }
        }

        if (!commandletFound) {
            this.writeLine();
            this.setState({commandlets: this.props.commandlets});
        }
    }

    public handleKeyDown(event: React.KeyboardEvent<HTMLDivElement | HTMLTextAreaElement>) {
        event.preventDefault();

        switch (event.key) {
            case "Enter":
                this.handleEnter();
                break;
            case "Control":
                this.setState({controlDown: true});
                break;
            case "Shift":
                this.setState({shiftDown: true});
                break;
            case "ArrowUp":
                if (this.state.inputs.length > 0) {
                    let newInputIndex = this.state.inputIndex ? Math.max(0, this.state.inputIndex - 1) : this.state.inputs.length - 1;
                    let newLines: CLILine[] = Object.assign([], this.state.lines);
                    let strings = newLines[newLines.length - 1].strings;
                    if (this.state.inputIndex !== undefined) {
                        strings[strings.length - 1].value = this.state.inputs[newInputIndex];
                    } else {
                        strings.push({
                            value: this.state.inputs[newInputIndex],
                            color: this.props.inputColor || "inherit"
                        });
                    }
                    newLines[newLines.length - 1].strings = strings;
                    this.setState({lines: newLines, inputIndex: newInputIndex});
                }
                break;
            case "ArrowDown":
                if (this.state.inputs.length > 0) {
                    let newInputIndex = this.state.inputIndex !== undefined && this.state.inputIndex < this.state.inputs.length - 1 ? Math.min(this.state.inputs.length - 1, this.state.inputIndex + 1) : 0;
                    let newLines: CLILine[] = Object.assign([], this.state.lines);
                    let strings = newLines[newLines.length - 1].strings;
                    if (this.state.inputIndex !== undefined) {
                        strings[strings.length - 1].value = this.state.inputs[newInputIndex];
                    } else {
                        strings.push({
                            value: this.state.inputs[newInputIndex],
                            color: this.props.inputColor || "inherit"
                        });
                    }
                    newLines[newLines.length - 1].strings = strings;
                    this.setState({lines: newLines, inputIndex: newInputIndex});
                }
                break;
            case "c":
                if (this.state.controlDown) {
                    this.writeLine({strings: [{value: " ^C"}]}, this.emptyLine);
                }
                break;
            case "Insert":
                if (this.state.shiftDown) {
                    navigator.clipboard.readText()
                        .then(text => {
                            this.writeLine({strings: [{value: text}]});
                        });
                }
                break;
            case "Backspace":
                let newLines: CLILine[] = Object.assign([], this.state.lines);
                let strings = newLines[newLines.length - 1].strings;
                let lastString = strings[strings.length - 1];

                if (!lastString.readonly) {
                    lastString.value = lastString.value.substring(0, lastString.value.length - 1);
                    if (lastString.value.length === 0) strings.pop();
                    newLines[newLines.length - 1].strings = strings;
                    this.setState({lines: newLines});
                }
                break;
            default:
                if (event.key.match(/^(.)?$/)) {
                    this.writeLine({strings: [{value: event.key, color: this.props.inputColor || "inherit"}]});
                } else {
                    console.log(event.key);
                }
        }
    };

    public handleKeyUp(event: React.KeyboardEvent<HTMLDivElement | HTMLTextAreaElement>) {
        if (event.key === "Control") {
            this.setState({controlDown: false});
        } else if (event.key === "Shift") {
            this.setState({shiftDown: false});
        }
    };

    render() {
        return (
            <div className="cli" ref={this.cliRef}
                 contentEditable suppressContentEditableWarning
                 onKeyDown={this.handleKeyDown}
                 onKeyUp={this.handleKeyUp}>
                {this.state.lines.map((l, i) =>
                    <span key={i}
                          style={{
                              color: l.color || "white",
                              fontSize: `${l.fontSize || this.props.defaultFontSize || 14}px`
                          }}>
                        {l.strings.map((s, i) => <span key={i}
                                                       style={s.color ? {color: s.color} : undefined}>{s.value}</span>)}
                        <br/></span>
                )}
            </div>
        );
    }
}