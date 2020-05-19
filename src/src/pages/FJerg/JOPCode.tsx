import * as React from "react";
import {Col, Row} from "react-bootstrap";
import CodeEditor from "../../components/CodeEditor/CodeEditor";
import JOptionPane from "../../components/JOptionPane/JOptionPane";
import {students} from "../../students";

const jopMessage = "Vielen Dank für alles!";
const jOptionPaneCode = `/*
 * Copyright © 2020 RaviAnand Mohabir 
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at 
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software 
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and 
 * limitations under the License.
 */
public static void main(String[] args) {
    string message = "${jopMessage}";
    
    JergOptionPane.showMessageDialog(
        null,
        message,
        title,
        JOptionPane.INFORMATION_MESSAGE,
        icon
    );
}`;

interface JOPCodeProps {
    jopCodeRef: React.RefObject<HTMLDivElement>;
}

export default function JOPCode(props: JOPCodeProps) {
    const {jopCodeRef} = props;

    const [running, setRunning] = React.useState(false);
    const [runText, setRunText] = React.useState<string | undefined>(undefined);
    const [code, setCode] = React.useState(jOptionPaneCode);
    const [student, setStudent] = React.useState(students[Math.floor(Math.random() * students.length)]);
    const [message, setMessage] = React.useState(jopMessage);

    const run = () => {
        setRunText("Compiling...");
        setTimeout(() => {
            let commentsReplaced = jOptionPaneCode.replace(/(\/\*(?:[\s\S]*)\*\/)|(\/\/(?:.)*)/g, "");
            let escaped = commentsReplaced.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            let messageReplaced = escaped.replace(jopMessage, "(.*)");
            let whitespacesReplaced = messageReplaced.replace(/(\s{2,})/g, "(?:\\s+)");
            let regexp = new RegExp("^" + whitespacesReplaced + "$");

            let match = code.replace(/(\/\*(?:[\s\S]*)\*\/)|(\/\/(?:.)*)/g, "").match(regexp);

            if (match) {
                setRunText(undefined);
                setRunning(true);
                setStudent(students[Math.floor(Math.random() * students.length)]);
                setMessage(match[1]);
            } else {
                setRunText(`Compiler errors: stop messing with perfect code - KISS`);
            }
        }, 500);
    };

    const stop = () => {
        setRunning(false);
        setRunText(undefined);
    };

    const reload = () => {
        stop();
        run();
    };

    return (
        <div className="container-md jop-code" ref={jopCodeRef}>
            <Row>
                <Col md={8} sm={12}>
                    <h3>Probieren Sie doch, etwas zu verändern...</h3>
                    <br/>
                    <CodeEditor language="java" content={code} editable
                                style={{width: '100%', height: '30vh', minHeight: '600px'}}
                                running={running} onEdit={c => setCode(c)} onClickReload={reload}
                                onClickStart={run} onClickStop={stop} runText={runText} onRequestRun={reload}/>
                </Col>
                <Col md={4} sm={12}>
                    <div className="code-result">
                        {running ? <JOptionPane img={student.img} onClose={stop} onOk={stop} text={message}
                                                title="JergOptionPane"/> : null}
                    </div>
                </Col>
            </Row>
        </div>
    );
}