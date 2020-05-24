export interface student {
    name: string;
    surname: string;
    img: string;
    plans?: string;
    href?: string;
}

export const s: student[] = [
    {
        name: "Alain",
        surname: "Siegrist",
        img: "./res/img/students/alain.png"
    },
    {
        name: "Albion",
        surname: "Spahija",
        img: "./res/img/students/albion.png",
        plans: "Nachdem ich zuerst ein Praktikum gefunden habe und dieses dann auch erfolgreich abgeschlossen habe, will ich im Web-Bereich tätig sein und evtl. weiter studieren."
    },
    {
        name: "Alexander",
        surname: "Greuter",
        img: "./res/img/students/alex.png"
    },
    {
        name: "Aron",
        surname: "Eggenberger",
        img: "./res/img/students/aron.png",
        plans: "Praktikum abschliessen und nach Möglichkeit noch ein weiteres Jahr arbeiten, dann evtl. FHS."
    },
    {
        name: "Dominik",
        surname: "Berger",
        img: "./res/img/students/dominik.png",
        href: "https://doemuu.live/",
        plans: "Das Praktium, bei der Enhanzz AG in Alpnach (OW), beginne ich anfangs Schuljahr 20/21. Nach dem Praktikum will ich Teilzeit im Betrieb bleiben und an der Fachhochschule Wirtschaft studieren."
    },
    {
        name: "Felix",
        surname: "Fasler",
        img: "./res/img/students/felix.png",
        plans: "Priorität hat, ein Praktikum zu finden (wenn möglich noch für dieses Jahr). Nach dem Praktikum möchte ich an die Fachhochschule studieren gehen (womöglich berufsbegleitend)."
    },
    {
        name: "RaviAnand",
        surname: "Mohabir",
        img: "./res/img/students/ravi.png",
        plans: "Nach dem Praktikum bei der BlueMouse GmbH in Baden (AG), möchte ich zur Fachhochschule gehen und den Bachelor of Mechanical Engineering machen.",
        href: "https://ravianand.me"
    },
    {
        name: "Simon",
        surname: "Kunze",
        img: "./res/img/students/simon.png",
        plans: "Erst einmal ein Praktikum finden, hoffentlich noch dieses Jahr. Danach schaue ich, was auf mich zukommt..."
    },
    {
        name: "Tim",
        surname: "Mosbacher",
        img: "./res/img/students/tim.png",
        plans: "Nach dem Praktikum möchte ich meine Militärpflicht leisten, um nachher irgendwo, wahrscheinlich als Informatiker, zu arbeiten um eine eigene Wohnung zu leisten."
    }
];

export const students = s.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);