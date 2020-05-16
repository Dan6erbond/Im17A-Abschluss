import * as React from "react";
import {Image, Layer, Stage} from "react-konva";
import Konva from 'konva';
import useImage from "use-image";
import {Spring, animated} from 'react-spring/renderprops-konva';
import VizSensor from "react-visibility-sensor";

interface KinderEggProps {
    kinderEggRef: React.RefObject<HTMLDivElement>;
}

export default function KinderEgg(props: KinderEggProps) {
    const {kinderEggRef} = props;

    const students = [
        {
            name: "Ravi",
            img: process.env.PUBLIC_URL + "/res/img/students/ravi.png"
        }
    ];

    const [visible, setVisible] = React.useState<boolean>(false);

    const [eggTop] = useImage(process.env.PUBLIC_URL + "/res/img/fjerg/kinder-ueberraschungsei_top.png");
    const eggTopWidth = 300;
    const eggTopHeight = eggTop ? eggTop.height / eggTop.width * eggTopWidth : eggTopWidth;

    const [eggBottom] = useImage(process.env.PUBLIC_URL + "/res/img/fjerg/kinder-ueberraschungsei_bottom.png");
    const eggBottomWidth = eggTop && eggBottom ? eggBottom.width / eggTop.width * eggTopWidth : eggTopWidth;
    const eggBottomHeight = eggBottom ? eggBottom.height / eggBottom.width * eggBottomWidth : eggBottomWidth;

    const eggTopRef = React.useRef<Konva.Image>(null);

    const [student] = React.useState<typeof students[0]>(students[Math.floor(Math.random() * students.length)]);
    const [studentImg] = useImage(student.img);
    const studentImgWidth = 100;
    const studentImgHeight = studentImg ? studentImg.height / studentImg.width * studentImgWidth : studentImgWidth;

    const [open, setOpen] = React.useState<boolean>(false);

    return (
        <div className="kinder-egg" ref={kinderEggRef}>
            <VizSensor partialVisibility onChange={isVisible => {
                if (isVisible && !visible) {
                    setVisible(true);
                    setOpen(true);
                }
            }}>
                <Stage height={550} width={400}>
                    <Layer>
                        <Spring native
                                to={{
                                    x: open ? 230 : 75,
                                    y: open ? 40 : 325
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
                                                ref={eggTopRef}/>
                            )}
                        </Spring>
                        <Image x={47}
                               y={193}
                               image={eggBottom}
                               height={eggBottomHeight}
                               width={eggBottomWidth}/>
                    </Layer>
                </Stage>
            </VizSensor>
        </div>
    )
}