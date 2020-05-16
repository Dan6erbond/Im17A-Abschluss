import VizSensor from "react-visibility-sensor";
import {motion} from "framer-motion";
import {Carousel, Col, Container, Row} from "react-bootstrap";
import {faBuilding} from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import ScrollButton from "../../components/ScrollButton/ScrollButton";

const images = [
    "20180924_131103.jpg",
    "20180924_155002.jpg",
    "20180925_095942.jpg",
    "20180925_102641.jpg",
    "20180926_221012.jpg",
    "20180926_221215.jpg",
    "20180928_120908.jpg",
    "IMG_2166.jpeg",
    "IMG_2176.jpeg",
    "IMG_2194.jpeg",
    "IMG_2257.jpeg",
    "IMG_20180924_131629.jpg",
    "IMG_20180926_184642.jpg",
    "IMG_20180927_094955.jpg"
];

export default function ClassTrip() {
    const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => window.scrollTo(0, ref.current!!.offsetTop);

    const [classTripTitleVisible, setClassTripTitleVisible] = React.useState<boolean>(false);

    const classTripTitleRef = React.createRef<HTMLDivElement>();
    const classTripRef = React.createRef<HTMLDivElement>();

    const generateSlideshow = () => {
        return (
            <Carousel>
                {images.shuffle().map((img, i) =>
                    <Carousel.Item key={i}>
                        <div>
                            <img
                                className="d-block w-100"
                                src={`./res/img/mguignard/frankfurt/${img}`}
                                alt={img}
                            />
                        </div>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>)}
            </Carousel>
        );
    };

    const generatePictureGrid = () => {
        return (
            <Container fluid="md">
                <Row>
                    {images.shuffle().map((img, i) => <Col sm={12} md={i % 4 ? 3 : i % 8 ? 6 : 12}>
                        <img
                            className="d-block w-100"
                            height="auto"
                            src={`/res/img/mguignard/frankfurt/${img}`}
                            alt={img}
                        />
                    </Col>)}
                </Row>
            </Container>
        );
    };

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
                        <ScrollButton scrollRef={classTripRef}
                                      icon={faBuilding} text="Scroll Down"/>
                    </motion.div>
                </VizSensor>
            </div>

            <div ref={classTripRef}>
                {generateSlideshow()}
            </div>
        </div>
    );
}