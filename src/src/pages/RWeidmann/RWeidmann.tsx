import * as React from "react";

import "./RWeidmann.scss";
import PowerShell from "../../components/CommandLineInterface/PowerShell/PowerShell";
import {Commandlet} from "../../components/CommandLineInterface/CommandLineInterface";

const modules = [
    {
        nr: 104,
        name: "Datenmodell implementieren"
    },
    {
        nr: 121,
        name: "Steuerungsaufgaben bearbeiten"
    },
    {
        nr: 122,
        name: "Abläufe mit Scripts und Makros automatisieren"
    },
    {
        nr: 123,
        name: "Serverdienste in Betrieb nehmen"
    },
    {
        nr: 242,
        name: "Mikroprozessoranwedungen realisieren"
    }
];

const feedback = [
    {
        student: "Simon Kunze",
        feedback: "Es war sehr interessant, mit dem Arduino-Projekt einen Abstecher in die Embedded-Welt zu machen und mit PowerShell habe ich ein wichtiges Werkzeug für den Informatiker-Alltag erlernt."
    },
    {
        student: "Albion Spahija",
        feedback: "Das Arduino-Projekt war das grösste Highlight im Unterricht, ich konnte wertvolle Erfahrungen damit sammeln. Auch die anderen Module, zum Beispiel das Powershell-Modul hat mir sehr viel Freude bereitet. Das Server-Modul war doch ein bisschen anstrengend, doch es war trotzdem wichtig, dass wir dies ebenfalls angeschaut haben."
    },
    {
        student: "Aron Eggenberger",
        feedback: "Die Hilfestellungen waren oft sehr hilfreich und die Vorgaben meist klar, wenn nicht zu klar. Wir wurden oft unterstützt und die Modul-Themen wurden interessant als möglich präsentiert."
    }
];

const commandlets: Commandlet[] = [
    {
        command: /GET-HELP/,
        onRun: [
            {
                strings: [{value: "THEMA"}]
            },
            {
                strings: [
                    {value: "\u00A0\u00A0\u00A0\u00A0"},
                    {value: "Hilfesystem zu Im17A PowerShell"}
                ]
            },
            {
                strings: [{value: "KURZBESCHREIBUNG"}]
            },
            {
                strings: [
                    {value: "\u00A0\u00A0\u00A0\u00A0"},
                    {value: "Zeigt verfügbare Commandlets an."}
                ]
            },
            {
                strings: [{value: "GET-MODULES [MODULE]"}]
            },
            {
                strings: [
                    {value: "\u00A0\u00A0\u00A0\u00A0"},
                    {value: "Zeigt alle im Unterricht behandelten Module an."}
                ]
            }
        ]
    },
    {
        command: /GET-MODULES(?: (?:M)?(?<module>\d{3}))?/,
        onRun: (result) => {
            if (result?.groups?.module) {
                for (let i = 0; i < modules.length; i++) {
                    let module = modules[i];

                    if (module.nr == result.groups.module) {
                        return [
                            {strings: [{value: `M${module.nr}`}]},
                            {strings: [{value: "\u00A0\u00A0\u00A0\u00A0"}, {value: `${module.name}`}]},
                        ];
                    }
                }

                return [{strings: [{value: `Modul M${result.groups.module} konnte nicht gefunden werden`}]}];
            }

            let lines = [];
            for (let i = 0; i < modules.length; i++) {
                let module = modules[i];
                lines.push({strings: [{value: `M${module.nr}`}]});
                lines.push({strings: [{value: "\u00A0\u00A0\u00A0\u00A0"}, {value: `${module.name}`}]});
            }
            return lines;
        },
    },
    {
        command: /GET-FEEDBACK( )?(?<student>\w*(( ){1}\w+)?)( )?( )?(?<force>--f|-FORCE)?/,
        onRun: (result) => {
            if (result?.groups?.student) {
                for (let i = 0; i < feedback.length; i++) {
                    let fb = feedback[i];

                    if (fb.student.toLowerCase().includes(result.groups.student.toLowerCase())) {
                        return [
                            {strings: [{value: `Feedback von ${fb.student}`}]},
                            {strings: [{value: "\u00A0\u00A0\u00A0\u00A0"}, {value: `${result.groups.force ? fb.force || fb.feedback : fb.feedback}`}]},
                        ];
                    }
                }

                return [{strings: [{value: `Feedback von ${result.groups.student} konnte nicht gefunden werden`}]}];
            }

            return [{strings: [{value: `Bitte geben Sie einen Schülernamen für das Feedback mit`}]}];
        }
    }
];

const lines = [{
    strings: [{
        value: "Im17A PowerShell",
        color: "white"
    }]
}, {
    strings: [{
        value: "Copyright (C) RaviAnand Mohabir. Alle Rechte vorbehalten.",
        color: "white"
    }]
}, {
    strings: []
}, {
    strings: [{
        value: "Lernen Sie das neue plattformübergreifende PowerShell kennen - https://aka.ms/pscore6",
        color: "white"
    }]
}, {
    strings: []
}, {
    strings: [{
        value: "Vielen Dank für den interessanten Unterricht!",
        color: "white"
    }],
    fontSize: 20
}, {
    strings: []
}];

export default function RWeidmann() {
    return (
        <div className="r-weidmann">
            <PowerShell pathColor="white" path={[{
                value: "PS C:\\Users\\RWeidmann> "
            }]} commandlets={commandlets} lines={lines}/>
        </div>
    );
}