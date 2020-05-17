export interface student {
    name: string;
    surname: string;
    img: string;
    plans?: string;
    href?: string;
}

export const students: student[] = [
    {
        name: "Alain",
        surname: "Siegrist",
        img: "./res/img/students/alain.png"
    },
    {
        name: "Albion",
        surname: "Spahija",
        img: "./res/img/students/albion.png"
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
        name: "Felix",
        surname: "Fasler",
        img: "./res/img/students/felix.png",
        plans: "Praktikum finden."
    },
    {
        name: "RaviAnand",
        surname: "Mohabir",
        img: "./res/img/students/ravi.png",
        plans: "Nach dem Praktikum an die Fachhochschule gehen und den Bachelor of Mechanical Engineering machen.",
        href: "https://ravianand.me"
    },
    {
        name: "Simon",
        surname: "Kunze",
        img: "./res/img/students/simon.png"
    },
    {
        name: "Tim",
        surname: "Mosbacher",
        img: "./res/img/students/tim.png",
        plans: "Nach dem Praktikum möchte ich meine Militärpflicht leisten, um nachher irgendwo, wahrscheinlich als Informatiker, zu arbeiten um eine eigene Wohnung zu leisten."
    }
];