import * as React from "react";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {cb} from "react-syntax-highlighter/dist/esm/styles/prism";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faSquare, faUndo} from "@fortawesome/free-solid-svg-icons";
import {CSSProperties} from "react";

import "./CodeEditor.scss";

interface CodeEditorProps {
    language: string;
    content: string;
    editable?: boolean;
    running: boolean;
    style?: CSSProperties;
    onEdit?: (code: string) => void;
    runText?: string;
    onClickStart?: () => void;
    onClickReload?: () => void;
    onClickStop?: () => void;
    onRequestRun?: () => void;
}

export default function CodeEditor(props: CodeEditorProps) {
    const {language, editable, style, running, onEdit, runText, content, onClickStart, onClickReload, onClickStop, onRequestRun} = props;

    const [controlDown, setControlDown] = React.useState(false);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        let value = content,
            selStartPos = event.currentTarget.selectionStart!!;

        if (event.key === "Control") {
            setControlDown(true);
        }

        if (controlDown && event.key === "r") {
            setControlDown(false);
            if (onRequestRun) onRequestRun();
            event.preventDefault();
        }

        if (event.key === "Tab") {
            value =
                value.substring(0, selStartPos) +
                " " +
                value.substring(selStartPos, value.length);
            event.currentTarget.selectionStart = selStartPos + 3;
            event.currentTarget.selectionEnd = selStartPos + 4;

            if (onEdit) onEdit(value);

            event.preventDefault();
        }
    };

    const onTextChange = (txt: string) => {
        if (onEdit) onEdit(txt);
    };

    return (
        <div className="code-editor" style={style}>
            <div className="toolbar">
                <div className="title">
                    <span>JergOptionPane.java</span>
                </div>
                <div className="buttons">
                    {running ? <div onClick={onClickReload}>
                        <FontAwesomeIcon icon={faUndo}/>
                    </div> : <div onClick={onClickStart}>
                        <FontAwesomeIcon icon={faPlay}/>
                    </div>}
                    <div onClick={onClickStop} className={running ? "enabled" : "disabled"}>
                        <FontAwesomeIcon icon={faSquare}/>
                    </div>
                </div>
            </div>
            <div className="editor">
                <textarea
                    disabled={!editable}
                    className="input"
                    value={content}
                    onChange={evt => onTextChange(evt.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <SyntaxHighlighter className="output" language={language} style={cb}>
                    {content}
                </SyntaxHighlighter>
            </div>
            {runText ? <div className="run">
                {runText}
            </div> : null}
        </div>
    );
}