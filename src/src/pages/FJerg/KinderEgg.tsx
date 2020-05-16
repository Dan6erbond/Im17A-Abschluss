import * as React from "react";
import {Image, Layer, Stage} from "react-konva";
import Konva from 'konva';
import useImage from "use-image";
import {Spring, animated} from 'react-spring/renderprops-konva';
import VizSensor from "react-visibility-sensor";

const students = [
    {
        name: "Ravi",
        img: "./res/img/students/ravi.png"
    },
    {
        name: "Alain",
        img: "./res/img/students/alain.png"
    },
    {
        name: "Albion",
        img: "./res/img/students/albion.jpeg"
    },
    {
        name: "Aron",
        img: "./res/img/students/aron.jpg"
    },
    {
        name: "Felix",
        img: "./res/img/students/felix.jpg"
    },
    {
        name: "Simon",
        img: "./res/img/students/simon_2.png"
    },
    {
        name: "Tim",
        img: "./res/img/students/tim.jpeg"
    }
];

interface KinderEggProps {
    kinderEggRef: React.RefObject<HTMLDivElement>;
}

export default function KinderEgg(props: KinderEggProps) {
    const {kinderEggRef} = props;

    const [visible, setVisible] = React.useState<boolean>(false);

    const [eggTop] = useImage(process.env.PUBLIC_URL + "/res/img/fjerg/kinder-ueberraschungsei_top.png");
    const eggTopWidth = 300;
    const eggTopHeight = eggTop ? eggTop.height / eggTop.width * eggTopWidth : eggTopWidth;

    const [eggBottom] = useImage(process.env.PUBLIC_URL + "/res/img/fjerg/kinder-ueberraschungsei_bottom.png");
    const eggBottomWidth = eggTop && eggBottom ? eggBottom.width / eggTop.width * eggTopWidth : eggTopWidth;
    const eggBottomHeight = eggBottom ? eggBottom.height / eggBottom.width * eggBottomWidth : eggBottomWidth;

    const eggTopRef = React.useRef<Konva.Image>(null);

    const [student, setStudent] = React.useState<typeof students[0]>(students[Math.floor(Math.random() * students.length)]);
    const [studentImg] = useImage(student.img);
    const studentImgWidth = 100;
    const studentImgHeight = studentImg ? studentImg.height / studentImg.width * studentImgWidth : studentImgWidth;

    const [open, setOpen] = React.useState<boolean>(false);
    const [closing, setClosing] = React.useState<boolean>(false);

    const openEgg = () => {
        if (closing) return;

        setOpen(true);

        setTimeout(() => {
            setOpen(false);
            setClosing(true);
            setTimeout(() => {
                setStudent(students[Math.floor(Math.random() * students.length)]);
                setClosing(false);
            }, 500);
        }, 1000);
    };

    return (
        <div className="kinder-egg" ref={kinderEggRef}>
            <VizSensor partialVisibility onChange={isVisible => {
                if (isVisible && !visible) {
                    setVisible(true);
                }
            }}>
                <Stage height={550} width={400}>
                    <Layer>
                        <Spring native
                                to={{
                                    x: open ? 230 : 75,
                                    y: open ? 40 : 325,
                                    opacity: open ? 1 : 0
                                }}>
                            {props => (
                                <animated.Image {...props}
                                                height={studentImgHeight}
                                                width={studentImgWidth}
                                                image={studentImg}/>
                            )}
                        </Spring>
                    </Layer>
                    <Layer>
                        <Spring native
                                to={{
                                    x: open ? -70 : 50,
                                    y: open ? 140 : 100,
                                    rotation: open ? -40 : 0
                                }}>
                            {props => (
                                <animated.Image {...props}
                                                image={eggTop}
                                                height={eggTopHeight}
                                                width={eggTopWidth}
                                                ref={eggTopRef}
                                                onClick={openEgg}
                                                onTouchStart={openEgg}/>
                            )}
                        </Spring>
                        <Image x={47}
                               y={193}
                               image={eggBottom}
                               height={eggBottomHeight}
                               width={eggBottomWidth}
                               onClick={openEgg}
                               onTouchStart={openEgg}/>
                    </Layer>
                </Stage>
            </VizSensor>
        </div>
    )
}