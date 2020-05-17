import {Carousel} from "react-bootstrap";
import * as React from "react";

interface SlideshowProps {
    images: { path: string, title?: string, sub?: string }[];
    shuffle?: boolean;
}

export default function Slideshow(props: SlideshowProps) {
    const {images, shuffle} = props;

    return (
        <Carousel className="slideshow">
            {(shuffle ? images.shuffle() : images).map((img, i) =>
                <Carousel.Item key={i}>
                    <div>
                        <img
                            className="d-block w-100"
                            src={img.path}
                            alt={img.sub}
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>{img.title}</h3>
                        <p>{img.sub}</p>
                    </Carousel.Caption>
                </Carousel.Item>)}
        </Carousel>
    );
}