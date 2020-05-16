import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleDown} from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import {motion} from "framer-motion";

import "./ScrollButton.scss";

interface ScrollButtonProps {
    scrollRef: React.RefObject<any>;
    icon?: React.ReactNode;
    children?: React.ReactNode;
}

export default function ScrollButton(props: ScrollButtonProps) {
    const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => window.scrollTo(0, ref.current!!.offsetTop);

    const {scrollRef, icon, children} = props;

    return (
        <div style={{padding: '2px'}}>
            <motion.button onClick={() => scrollToRef(scrollRef)} className="scroll-button" whileHover={{scale: 1.1}}
                           whileTap={{scale: 0.9}}>
                {icon || <FontAwesomeIcon icon={faArrowCircleDown} style={{height: '55px', width: '55px'}}/>}
            </motion.button>
            <div style={{fontSize: '24px', padding: '2px'}}>{children || "Runterscrollen"}</div>
        </div>
    );
}