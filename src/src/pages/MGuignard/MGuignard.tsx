import * as React from "react";
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlassCheers, faPenFancy} from "@fortawesome/free-solid-svg-icons";
import VizSensor from "react-visibility-sensor";
import {motion} from "framer-motion";
import Banner from "../../components/Banner/Banner";
import Limericks from "./Limericks";

import "./MGuignard.scss";

export default function MGuignard() {
    const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => window.scrollTo(0, ref.current!!.offsetTop);

    const [bannerVisible, setBannerVisible] = React.useState<boolean>(false);

    const limericksTitleRef = React.createRef<HTMLDivElement>();

    return (
        <div className="m-guignard">
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
                        }} transition={{duration: 1}}>Thank you for the wonderful three years, Ms Guignard!
                        </motion.h2>
                        <Button onClick={() => scrollToRef(limericksTitleRef)} variant="outline-dark">
                            <FontAwesomeIcon icon={faGlassCheers} style={{height: '55px', width: '55px'}}/>
                            <br/>
                            <span style={{fontSize: '24px'}}>Scroll Down</span>
                        </Button>
                    </motion.div>
                </VizSensor>
            </Banner>

            <Limericks limericksTitleRef={limericksTitleRef}/>
        </div>
    );
}