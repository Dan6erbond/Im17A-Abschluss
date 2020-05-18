import * as React from "react";

import "./Banner.scss";

import VizSensor from "react-visibility-sensor";
import {motion} from "framer-motion";

interface BannerProps {
    children?: React.ReactNode;
    text?: string;
}

export default function Banner(props: BannerProps) {
    const {children, text} = props;

    const [visible, setVisible] = React.useState<boolean>(false);

    return (
        <div className="banner">
            <VizSensor partialVisibility onChange={isVisible => {
                if (isVisible && !visible)
                    setVisible(true);
            }}>
                <div className="banner-content">
                    <motion.div className="container-md" initial="hidden" animate={visible ? "visible" : "hidden"}
                                variants={{
                                    hidden: {
                                        opacity: 0
                                    },
                                    visible: {
                                        opacity: 1
                                    }
                                }} transition={{duration: 1}}>
                        {text ? <motion.h2 variants={{
                                hidden: {
                                    translateY: '-40%'
                                },
                                visible: {
                                    translateY: 0
                                }
                            }} transition={{duration: 1}}>
                                {text}
                        </motion.h2>
                            : null}
                        {children}
                    </motion.div>
                </div>
            </VizSensor>
        </div>
    );
}