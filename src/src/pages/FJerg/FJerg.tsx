import * as React from "react";
import Banner from "../../components/Banner/Banner";
import KinderEgg from "./KinderEgg";

import "./FJerg.scss";
import VizSensor from "react-visibility-sensor";
import {motion} from "framer-motion";
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEgg} from "@fortawesome/free-solid-svg-icons";
import {RefObject} from "react";

export default function FJerg() {
    const scrollToRef = (ref: RefObject<HTMLDivElement>) => window.scrollTo(0, ref.current!!.offsetTop);

    const [bannerVisible, setBannerVisible] = React.useState<boolean>(false);

    const kinderEggRef = React.createRef<HTMLDivElement>();

    return (
        <div className="f-jerg">
            <Banner>
                <VizSensor partialVisibility onChange={isVisible => {
                    if (isVisible && !bannerVisible)
                        setBannerVisible(true);
                }}>
                    <motion.div initial="hidden" animate={bannerVisible ? "visible" : "hidden"} variants={{
                        hidden: {
                            opacity: 0
                        },
                        visible: {
                            opacity: 1
                        }
                    }} transition={{duration: 1}}>
                        <motion.h2 variants={{
                            hidden: {
                                translateY: '-40%'
                            },
                            visible: {
                                translateY: 0
                            }
                        }} transition={{duration: 1}}>
                            Vielen Dank für die tolle Zeit mit Ihnen!
                        </motion.h2>
                        <Button onClick={() => scrollToRef(kinderEggRef)} variant="outline-dark">
                            <FontAwesomeIcon icon={faEgg} style={{height: '55px', width: '55px'}}/>
                            <br/>
                            <span style={{fontSize: '24px'}}>Scroll Down</span>
                        </Button>
                    </motion.div>
                </VizSensor>
            </Banner>
            <KinderEgg kinderEggRef={kinderEggRef}/>
        </div>
    )
}