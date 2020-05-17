import React from "react";
import MGuignard from "./pages/MGuignard/MGuignard";
import FJerg from "./pages/FJerg/FJerg";

export interface teacher {
    name: string;
    path: string;
    component?: React.ReactNode;
    img?: string;
}

export const teachers: teacher[] = [
    {
        name: "Matthias Graf",
        path: "bLUb5kH",
    },
    {
        name: "Marielle Guignard",
        path: "N6bmxqI",
        component: <MGuignard/>,
    },
    {
        name: "Lil Klink",
        path: "5rM6ams",
    },
    {
        name: "Loredana Arleo",
        path: "SWH6Yjq",
    },
    {
        name: "Daniel Schneeberger",
        path: "EkmjaQB",
    },
    {
        name: "Genevieve Gross",
        path: "dshb4LF",
    },
    {
        name: "Andreas Neeser",
        path: "hJAQqe4",
    },
    {
        name: "Sascha Fiechter",
        path: "eccFgkV",
        img: "./res/img/teachers/fiechter_sascha.jpg"
    },
    {
        name: "Fabian Jerg",
        path: "DSraT8n",
        component: <FJerg/>,
        img: "./res/img/teachers/jerg_fabian.jpg"
    },
    {
        name: "Alexander Flick",
        path: "arJqAVL",
        img: "./res/img/teachers/flick_alexander.jpg"
    },
    {
        name: "Lars Meyer",
        path: "cii6Kwf",
        img: "./res/img/teachers/meyer_lars.jpg"
    },
    {
        name: "Réne Weidmann",
        path: "iy4e0Rr",
        img: "./res/img/teachers/weidmann_rene.jpg"
    }
];