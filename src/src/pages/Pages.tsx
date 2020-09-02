import * as React from "react";
import {Teacher} from "../teachers";
import {History} from "history";

import MGuignard from "./MGuignard/MGuignard";
import FJerg from "./FJerg/FJerg";
import DSchneeberger from "./DSchneeberger/DSchneeberger";
import RWeidmann from "./RWeidmann/RWeidmann";
import LMeyer from "./LMeyer/LMeyer";
import AFlick from "./AFlick/AFlick";
import LKlink from "./LKlink/LKlink";
import LArleo from "./LArleo/LArleo";
import Banner from "../components/Banner/Banner";

type Page = {
    [key: string]: any;
}

const Pages: Page = {
    MGuignard: MGuignard,
    FJerg: FJerg,
    DSchneeberger: DSchneeberger,
    RWeidmann: RWeidmann,
    LMeyer: LMeyer,
    AFlick: AFlick,
    LKlink: LKlink,
    LArleo: LArleo,
};

export default (teacher: Teacher, history: History) => {
    if (teacher.page && typeof Pages[teacher.page] !== "undefined") {
        return React.createElement(Pages[teacher.page], {
            teacher: teacher,
            history: history
        });
    }

    return React.createElement(() => (
      <Banner
        text={`👷🏽‍♂️🚧 The component for ${teacher.name} is under construction. 🚧`}
      />
    ));
}
