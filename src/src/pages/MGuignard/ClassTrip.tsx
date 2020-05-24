import {Col, Container, Row} from "react-bootstrap";
import * as React from "react";
import FrankfurtSlideshow from "../../components/Slideshow/Frankfurt/FrankfurtSlideshow";
import CorrectScreen from "./CorrectScreen";
import {MGuignardPageProps} from "./MGuignard";

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

export default function ClassTrip(props: MGuignardPageProps) {
    const classTripRef = React.createRef<HTMLDivElement>();

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
            <CorrectScreen {...props} scrollRef={classTripRef}/>

            <div ref={classTripRef}>
                <FrankfurtSlideshow english/>
            </div>
        </div>
    );
}