import * as React from "react";
import {faEgg} from "@fortawesome/free-solid-svg-icons";
import Banner from "../../components/Banner/Banner";
import ScrollButton from "../../components/ScrollButton/ScrollButton";

import "./FJerg.scss";
import Selecta from "./Selecta";
import CodeEditor from "../../components/CodeEditor/CodeEditor";
import {Col, Container, Row} from "react-bootstrap";
import {students} from "../../students";

const jopMessage = "Vielen Dank für alles!";
const jOptionPaneCode = `public static void main(String[] args) {
    string message = "${jopMessage}"; 

    JergOptionPane.showMessageDialog(
        null,
        message,
        title,
        JOptionPane.INFORMATION_MESSAGE,
        icon
    );
}`;

export default function FJerg() {
    const selectaRef = React.createRef<HTMLDivElement>();

    const [running, setRunning] = React.useState(false);
    const [runText, setRunText] = React.useState<string | undefined>(undefined);
    const [code, setCode] = React.useState(jOptionPaneCode);
    const [student, setStudent] = React.useState(students[Math.floor(Math.random() * students.length)]);
    const [message, setMessage] = React.useState(jopMessage);

    const run = () => {
        setRunText("Compiling...");
        setTimeout(() => {
            let escaped = jOptionPaneCode.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            let regexp = new RegExp(escaped.replace(jopMessage, "(.*)"));
            let match = code.match(regexp);

            if (match) {
                setRunText(undefined);
                setRunning(true);
                setStudent(students[Math.floor(Math.random() * students.length)]);
                setMessage(match[1]);
            } else {
                setRunText(`Compiler errors: couldn't run 'JergOptionPane.java'`);
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
        <div className="f-jerg">
            <Banner text="Vielen Dank für die tolle Zeit mit Ihnen!">
                <ScrollButton scrollRef={selectaRef}
                              icon={faEgg}/>
            </Banner>
            <Selecta selectaRef={selectaRef}/>
            <Container fluid="md">
                <Row>
                    <Col md={6} sm={12}>
                        <CodeEditor language="java" content={code} editable
                                    style={{width: '100%', height: '30vh', minHeight: '400px'}}
                                    running={running} onEdit={c => setCode(c)} onClickReload={reload}
                                    onClickStart={run} onClickStop={stop} runText={runText} onRequestRun={reload}/>
                    </Col>
                    <Col md={6} sm={12}>
                        {running ? <div style={{
                            width: '100%',
                            maxWidth: '300px',
                            height: '100%',
                            maxHeight: '175px',
                            display: 'flex',
                            flexDirection: 'column',
                            border: 'solid 1px #0c0f16'
                        }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                background: '#0c0f16',
                                color: 'white',
                                padding: '5px 10px'
                            }}>
                                <div>JergOptionPane</div>
                                <div onClick={() => setRunning(false)}>X</div>
                            </div>
                            <div style={{flex: '100', padding: '10px 10px', display: 'flex', flexDirection: 'column'}}>
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    <div>
                                        <img src={student.img}
                                             alt="jerg-option-pane" height="75" width="auto"/>
                                    </div>
                                    <div style={{padding: '0 20px'}}>
                                        {message}
                                    </div>
                                </div>
                                <div style={{padding: '5px 10px', textAlign: 'center'}}>
                                    <button style={{padding: '0 10px'}} onClick={() => setRunning(false)}>
                                        OK
                                    </button>
                                </div>
                            </div>
                        </div> : null}
                    </Col>
                </Row>
            </Container>
            <br/>
        </div>
    );
}