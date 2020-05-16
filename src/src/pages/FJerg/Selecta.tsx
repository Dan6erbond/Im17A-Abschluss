import {Layer, Line, Rect, Stage} from "react-konva";
import * as React from "react";
import useImage from "use-image";
import {Spring, animated} from 'react-spring/renderprops-konva';
import KinderEgg from "./KinderEgg";

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

interface SelectaItemProps {
    image: CanvasImageSource | undefined;
    x: number;
    y: number;
    height: number;
    width: number;
    selectedX: number;
    selectedY: number;
    largeHeight: number;
    largeWidth: number;
    largeX: number;
    largeY: number;
    children?: React.ReactNode;
    displayComponent: (component: React.ReactNode | null) => void;
}

function SelectaItem(props: SelectaItemProps) {
    const {x, y, selectedX, selectedY, image, height, width, largeHeight, largeWidth, largeX, largeY, displayComponent, children} = props;

    const [selected, setSelected] = React.useState<boolean>(false);
    const [centered, setCentered] = React.useState<boolean>(false);
    const [large, setLarge] = React.useState<boolean>(false);
    const [display, setDisplay] = React.useState<boolean>(true);

    const onClick = () => {
        if (selected) return;

        setSelected(true);
        setTimeout(() => {
            setCentered(true);
            setTimeout(() => {
                setLarge(true);
                setTimeout(() => {
                    displayComponent(children);
                    setDisplay(false);
                }, 550);
            });
        }, 500);
    };

    return (
        <React.Fragment>
            {display ? <Spring
                native
                to={{
                    x: large ? largeX : centered ? selectedX : x,
                    y: large ? largeY : selected ? selectedY : y
                }}>
                {p => (
                    <animated.Image {...p}
                                    image={image}
                                    height={large ? largeHeight : height}
                                    width={large ? largeWidth : width}
                                    onClick={onClick}
                                    onTouchStart={onClick}/>
                )}
            </Spring> : null}
        </React.Fragment>
    );
}

interface SelectaProps {
    selectaRef: React.RefObject<HTMLDivElement>;
}

export default function Selecta(props: SelectaProps) {
    const {selectaRef} = props;

    const [egg] = useImage(process.env.PUBLIC_URL + "/res/img/fjerg/kinder-ueberraschungsei.png");

    const eggWidth = 50;
    const eggHeight = egg ? egg.height / egg.width * eggWidth : eggWidth;

    const largeEggWidth = 300;
    const largeEggHeight = egg ? egg.height / egg.width * largeEggWidth : largeEggWidth;

    const [eggComponent, setEggComponent] = React.useState<React.ReactNode | null>(null);

    const shuffledStudents = students.shuffle();

    return (
        <div className="selecta-machine" ref={selectaRef}>
            <div>
                <h2>Selecta</h2>
                <h3>Wählen Sie ein Überraschungsei aus!</h3>
                <br/>
                <Stage height={800} width={500}>
                    <Layer>
                        <Rect
                            x={0}
                            y={0}
                            width={500}
                            height={800}
                            fill="#f3f3f3"/>
                        {Array.from(Array(3).keys()).map((i) => <React.Fragment key={i}>
                            <Line x={50}
                                  y={(i + 1) * 150}
                                  points={[0, 0, 400, 0]}
                                  strokeWidth={2}
                                  stroke="black"/>
                        </React.Fragment>)}
                        <Line
                            x={50}
                            y={300}
                            points={[0, 300, 400, 300]}
                            strokeWidth={5}
                            stroke="black"/>
                    </Layer>
                    <Layer>
                        {Array.from(Array(3).keys()).map((i) => <React.Fragment key={i}>
                            {Array.from(Array(3).keys()).map((j) =>
                                <SelectaItem x={75 + j * 150}
                                             y={(i + 1) * 150 - 75}
                                             image={egg}
                                             height={eggHeight} width={eggWidth}
                                             selectedX={225} selectedY={655}
                                             largeHeight={largeEggHeight} largeWidth={largeEggWidth}
                                             largeX={100} largeY={150}
                                             displayComponent={setEggComponent}
                                             key={j + i * 3}>
                                    <KinderEgg setComponent={setEggComponent}
                                               student={shuffledStudents[Math.min(j + i * 3, shuffledStudents.length - 1)]}/>
                                </SelectaItem>)}
                        </React.Fragment>)}
                    </Layer>
                    {eggComponent}
                </Stage>
            </div>
        </div>
    );
}