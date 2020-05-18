import * as React from "react";
import {Commandlet} from "../../components/CommandLineInterface/CommandLineInterface";
import Bash from "../../components/CommandLineInterface/Bash/Bash";

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

const commandlets: Commandlet[] = [{
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
}, {
    command: /modules(?: (?:m)?(?<module>\d{3}))?/,
    onRun: (result) => {
        if (result?.groups?.module) {
            for (let i = 0; i < modules.length; i++) {
                let module = modules[i];

                if (module.nr == result?.groups?.module) {
                    return [
                        {strings: [{value: `M${module.nr}`}]},
                        {strings: [{value: "\u00A0\u00A0\u00A0\u00A0"}, {value: `${module.name}`}]},
                    ];
                }
            }
        }

        let lines = [];
        for (let i = 0; i < modules.length; i++) {
            let module = modules[i];
            lines.push({strings: [{value: `M${module.nr}`}]});
            lines.push({strings: [{value: "\u00A0\u00A0\u00A0\u00A0"}, {value: `${module.name}`}]});
        }
        return lines;
    }
}];

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

export default function LMeyer () {
    return (
        <div className="l-meyer">
            <Bash username="lmeyer" pcName="ribahom" commandlets={commandlets} lines={lines}/>
        </div>
    );
}