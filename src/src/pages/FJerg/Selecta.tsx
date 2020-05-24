import {Image, Layer, Line, Rect, Stage} from "react-konva";
import * as React from "react";
import useImage from "use-image";
import {Spring, animated} from 'react-spring/renderprops-konva';
import KinderEgg from "./KinderEgg";
import {students} from "../../students";

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
            }, 550);
        }, 550);
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

    const [selecta] = useImage(process.env.PUBLIC_URL + "/res/img/fjerg/selecta.png");
    const selectaWidth = 800;
    const selectaHeight = selecta ? selecta.height / selecta.width * selectaWidth : selectaWidth;

    const [egg] = useImage(process.env.PUBLIC_URL + "/res/img/fjerg/kinder-ueberraschungsei.png");

    const eggWidth = 50;
    const eggHeight = egg ? egg.height / egg.width * eggWidth : eggWidth;

    const largeEggWidth = 300;
    const largeEggHeight = egg ? egg.height / egg.width * largeEggWidth : largeEggWidth;

    const [eggComponent, setEggComponent] = React.useState<React.ReactNode | null>(null);

    const [shuffledStudents] = React.useState(students.shuffle());

    let surprises = ["./res/img/fjerg/capri_sun.png", "./res/img/fjerg/kinder_riegel.png", "./res/img/fjerg/projector.png", "./res/img/fjerg/joptionpane.png"];
    surprises = surprises.concat(shuffledStudents.map(s => s.img).slice(0, 8-surprises.length));
    console.log(surprises);

    return (
        <div className="selecta-machine" ref={selectaRef}>
            <div>
                <h2>Selecta</h2>
                <h3>Nehmen Sie ein Überraschungsei oder zwei für die Reise!</h3>
                <br/>
                <Stage height={800} width={500}>
                    <Layer>
                        <Rect
                            x={0}
                            y={0}
                            width={500}
                            height={800}
                            fill="#f3f3f3"/>
                        <Image x={-150}
                               y={-10}
                               image={selecta}
                               height={selectaHeight}
                               width={selectaWidth}/>
                    </Layer>
                    <Layer>
                        {Array.from(Array(3).keys()).map((i) => <React.Fragment key={i}>
                            {Array.from(Array(3).keys()).map((j) =>
                                <SelectaItem x={120 + j * 80}
                                             y={(i + 1) * 130 + 50}
                                             image={egg}
                                             height={eggHeight} width={eggWidth}
                                             selectedX={200} selectedY={570}
                                             largeHeight={largeEggHeight} largeWidth={largeEggWidth}
                                             largeX={100} largeY={150}
                                             displayComponent={setEggComponent}
                                             key={j + i * 3}>
                                    <KinderEgg setComponent={setEggComponent}
                                               surprise={surprises[Math.min(j * 3 + i, shuffledStudents.length - 1)]}/>
                                </SelectaItem>)}
                        </React.Fragment>)}
                    </Layer>
                    {eggComponent}
                </Stage>
            </div>
        </div>
    );
}