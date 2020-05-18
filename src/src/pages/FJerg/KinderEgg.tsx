import * as React from "react";
import {Image, Layer} from "react-konva";
import Konva from 'konva';
import useImage from "use-image";
import {Spring, animated} from 'react-spring/renderprops-konva';

interface KinderEggProps {
    setComponent: (component: React.ReactNode | null) => void;
    surprise: string;
}

export default function KinderEgg(props: KinderEggProps) {
    const {setComponent, surprise} = props;

    const [eggTop] = useImage(process.env.PUBLIC_URL + "/res/img/fjerg/kinder-ueberraschungsei_top.png");
    const eggTopWidth = 300;
    const eggTopHeight = eggTop ? eggTop.height / eggTop.width * eggTopWidth : eggTopWidth;

    const [eggBottom] = useImage(process.env.PUBLIC_URL + "/res/img/fjerg/kinder-ueberraschungsei_bottom.png");
    const eggBottomWidth = eggTop && eggBottom ? eggBottom.width / eggTop.width * eggTopWidth : eggTopWidth;
    const eggBottomHeight = eggBottom ? eggBottom.height / eggBottom.width * eggBottomWidth : eggBottomWidth;

    const eggTopRef = React.useRef<Konva.Image>(null);

    const [surpriseImg] = useImage(surprise);
    const surpriseImgWidth = 100;
    const surpriseImgHeight = surpriseImg ? surpriseImg.height / surpriseImg.width * surpriseImgWidth : surpriseImgWidth;

    const [open, setOpen] = React.useState<boolean>(false);

    const openEgg = () => {
        setOpen(true);
        setTimeout(() => {
            setComponent(null);
        }, 1000);
    };

    return (
        <React.Fragment>
            <Layer>
                <Spring native
                        to={{
                            x: open ? 280 : 125,
                            y: open ? 90 : 375,
                            opacity: open ? 1 : 0
                        }}>
                    {props => (
                        <animated.Image {...props}
                                        height={surpriseImgHeight}
                                        width={surpriseImgWidth}
                                        image={surpriseImg}/>
                    )}
                </Spring>
            </Layer>
            <Layer>
                <Spring native
                        to={{
                            x: open ? -20 : 100,
                            y: open ? 190 : 150,
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
                <Image x={97}
                       y={243}
                       image={eggBottom}
                       height={eggBottomHeight}
                       width={eggBottomWidth}
                       onClick={openEgg}
                       onTouchStart={openEgg}/>
            </Layer>
        </React.Fragment>
    )
}