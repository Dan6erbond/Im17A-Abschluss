import * as React from "react";
import Slideshow from "../Slideshow";

const images = [
    {
        filename: "20180924_131103.jpg",
        title: "Ankunft in Frankfurt",
        titleEnglish: "Arrival in Frankfurt",
        sub: "2018 / 09 / 24"
    },
    {
        filename: "20180924_155002.jpg",
        title: "Ankunft in Frankfurt",
        titleEnglish: "Arrival in Frankfurt",
        sub: "2018 / 09 / 24"
    },
    {
        filename: "IMG_20180924_131629.jpg",
        title: "Ankunft in Frankfurt",
        titleEnglish: "Arrival in Frankfurt",
        sub: "2018 / 09 / 24"
    },
    {
        filename: "IMG_20180927_094955.jpg",
        title: "Ankunft in Frankfurt",
        titleEnglish: "Arrival in Frankfurt",
        sub: "2018 / 09 / 24"
    },
    {
        filename: "IMG_2257.jpeg",
        title: "Goethehaus",
        sub: "2018 / 09 / 24"
    },
    {
        filename: "20180925_095942.jpg",
        title: "Stadtralley",
        sub: "2018 / 09 / 25"
    },
    {
        filename: "20180925_102641.jpg",
        title: "Stadtralley",
        sub: "2018 / 09 / 25"
    },
    {
        filename: "IMG_2194.jpeg",
        title: "Geldmuseum",
        titleEnglish: "Money Museum",
        sub: "2018 / 09 / 25"
    },
    {
        filename: "20180926_221012.jpg",
        title: "The Lion In The Winter",
        sub: "2018 / 09 / 26"
    },
    {
        filename: "20180926_221215.jpg",
        title: "The Lion In The Winter",
        sub: "2018 / 09 / 26"
    },
    {
        filename: "IMG_20180926_184642.jpg",
        title: "The Lion In The Winter",
        sub: "2018 / 09 / 26"
    },
    {
        filename: "IMG_2166.jpeg",
        title: "EZB",
        sub: "2018 / 09 / 27"
    },
    {
        filename: "IMG_2176.jpeg",
        title: "EZB",
        sub: "2018 / 09 / 27"
    },
    {
        filename: "20180928_120908.jpg",
        title: "Kelterei Possman",
        sub: "2018 / 09 / 28"
    }
];

interface FrankfurtSlideshowProps {
    english?: boolean;
}

export default function FrankfurtSlideshow(props: FrankfurtSlideshowProps) {
    const {english} = props;

    return (
        <Slideshow images={images.map(i => ({path: "./res/img/frankfurt/" + i.filename, title: english ? i.titleEnglish || i.title : i.title, sub: i.sub}))}/>
    );
}