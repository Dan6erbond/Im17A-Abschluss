import * as React from "react";
import {Commandlet} from "../../components/CommandLineInterface/CommandLineInterface";
import Bash from "../../components/CommandLineInterface/Bash/Bash";
import LinuxWindow from "../../components/Window/LinuxWindow/LinuxWindow";

const modules = [
    {
        nr: 117,
        name: "Informatik- und Netzwerkinfrastruktur für ein kleines Unternehmen realisieren"
    },
    {
        nr: 214,
        name: "Benutzerinnen im Umgang mit Informatikmitteln instruieren"
    },
    {
        nr: 302,
        name: "Fortgeschrittene Funktionen von Office Werkzeugen nutzen"
    },
    {
        nr: 304,
        name: "Einzelplatz-Computer in Betrieb nehmen"
    },
    {
        nr: 305,
        name: "Betriebsysteme installieren, konfigurieren und administrieren"
    },
    {
        nr: 431,
        name: "Aufträge im IT-Umfeld selbstständig durchführen"
    }
];

interface Feedback {
    student: string;
    feedback: string;
    force?: string;
}

const feedback: Feedback[] = [
    {
        student: "Simon Kunze",
        feedback: "Durch den Unterricht habe ich gelernt, wie die ganze Informatik-Infrastruktur um mich herum eigentlich funktioniert und konnte mich mit einer anderen Umgebung als Windows vertraut machen.",
        force: "Durch den Unterricht habe ich gelernt, wie die ganze Informatik-Infrastruktur um mich herum eigentlich funktioniert und konnte mich mit einer anderen Umgebung als Windows vertraut machen.\n" +
            "Visio möchte ich jedoch nie mehr in meinem Leben öffnen."
    },
    {
        student: "Albion Spahija",
        feedback: "Im Unterricht habe ich sehr viel technisches gelernt, das mir vorher noch unbekannt waren. Zudem konnte ich durch die vielen Präsentationen ein paar Tipps und Tricks lernen, die noch sehr hilfreich sein könnten."
    },
    {
        student: "Aron Eggenberger",
        feedback: "Viele wichtige Erkenntnisse, leider auch einige unwichtige. Die technischen Grundlagen wurden meist sehr gut erklärt und auf Feedback eingegangen."
    }
];

let commandlets: Commandlet[] = [
    {
        command: /help/,
        onRun: [
            {
                strings: [{value: "modules [module]"}]
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
        command: /modules(?: (?:m)?(?<module>\d{3}))?/,
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
        }
    },
    {
        command: /feedback(?:(?: )(?<student>\w*(?:(?: ){1}\w+)?))?(?: )?(?: )?(?<force>-f|--force)?/,
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
        value: "Im17A Bash",
        color: "white"
    }]
}, {
    strings: [{
        value: "Copyright (C) RaviAnand Mohabir. Alle Rechte vorbehalten.",
        color: "white"
    }]
}, {
    strings: [{
        value: "For the full experience make sure you're on a desktop.",
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

export default function LMeyer() {
    const [showTree, setShowTree] = React.useState(false);

    commandlets.push({
        command: /tree/,
        onRun: (result) => {
            setShowTree(true);
            return [];
        }
    });

    return (
        <div className="l-meyer">
            <LinuxWindow title="Wertebaum" style={{
                display: showTree ? 'block' : 'none',
                position: 'absolute',
                height: '90vh',
                width: '90vw',
                top: '50%',
                left: '50%',
                transform: 'translateY(-50%) translateX(-50%)',
                msTransform: 'translateY(-50%) translateX(-50%)'
            }} onClose={() => setShowTree(false)}/>
            <Bash username="lmeyer" pcName="ribahom" commandlets={commandlets} lines={lines}/>
        </div>
    );
}