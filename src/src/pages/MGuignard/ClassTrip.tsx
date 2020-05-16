import VizSensor from "react-visibility-sensor";
import {motion} from "framer-motion";
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBuilding} from "@fortawesome/free-solid-svg-icons";
import * as React from "react";

export default function ClassTrip() {
    const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => window.scrollTo(0, ref.current!!.offsetTop);

    const [classTripTitleVisible, setClassTripTitleVisible] = React.useState<boolean>(false);

    const classTripTitleRef = React.createRef<HTMLDivElement>();
    const classTripRef = React.createRef<HTMLDivElement>();

    return (
        <div className="class-trip">
            <div ref={classTripTitleRef} className="class-trip-title">
                <VizSensor partialVisibility onChange={isVisible => {
                    if (isVisible && !classTripTitleVisible)
                        setClassTripTitleVisible(true);
                }}>
                    <motion.div initial="hidden" animate={classTripTitleVisible ? "visible" : "hidden"} variants={{
                        hidden: {
                            opacity: 0
                        },
                        visible: {
                            opacity: 1
                        }
                    }} transition={{duration: 1}}>
                        <motion.h4 variants={{
                            hidden: {
                                translateY: '-40%'
                            },
                            visible: {
                                translateY: 0
                            }
                        }} transition={{duration: 1}}>
                            Remember Frankfurt?
                        </motion.h4>
                        <Button onClick={() => scrollToRef(classTripRef)} variant="outline-dark">
                            <FontAwesomeIcon icon={faBuilding} style={{height: '55px', width: '55px'}}/>
                            <br/>
                            <span style={{fontSize: '24px'}}>Scroll Down</span>
                        </Button>
                    </motion.div>
                </VizSensor>
            </div>

            <div ref={classTripRef}>

            </div>
        </div>
    );
}