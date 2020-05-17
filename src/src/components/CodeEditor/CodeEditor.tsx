import * as React from "react";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {cb} from "react-syntax-highlighter/dist/esm/styles/prism";

import "./CodeEditor.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faSquare, faUndo} from "@fortawesome/free-solid-svg-icons";
import {CSSProperties} from "react";

interface CodeEditorProps {
    language: string;
    content?: string;
    editable?: boolean;
    run?: () => void;
    style?: CSSProperties;
}

export default function CodeEditor(props: CodeEditorProps) {
    const {language, editable, style} = props;

    const [content, setContent] = React.useState(props.content || "");
    const [running, setRunning] = React.useState(false);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        let value = content,
            selStartPos = event.currentTarget.selectionStart!!;

        if (event.key === "Tab") {
            value =
                value.substring(0, selStartPos) +
                " " +
                value.substring(selStartPos, value.length);
            event.currentTarget.selectionStart = selStartPos + 3;
            event.currentTarget.selectionEnd = selStartPos + 4;

            event.preventDefault();

            setContent(value);
        }
    };

    return (
        <div className="code-editor" style={style}>
            <div className="toolbar">
                <div className="title">
                    <span>JergOptionPane.java</span>
                </div>
                <div className="buttons">
                    {running ? <div>
                        <FontAwesomeIcon icon={faUndo}/>
                    </div> : <div onClick={() => setRunning(true)}>
                        <FontAwesomeIcon icon={faPlay}/>
                    </div>}
                    <div onClick={() => setRunning(false)} className={running ? "enabled" : "disabled"}>
                        <FontAwesomeIcon icon={faSquare}/>
                    </div>
                </div>
            </div>
            <div className="editor">
                <textarea
                    disabled={!editable}
                    className="input"
                    value={content}
                    onChange={evt => setContent(evt.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <SyntaxHighlighter className="output" language={language} style={cb}>
                    {content}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}