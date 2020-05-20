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

const commandlets: Commandlet[] = [{
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
}, {
    command: /GET-MODULES(?: (?:M)?(?<module>\d{3}))?/,
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