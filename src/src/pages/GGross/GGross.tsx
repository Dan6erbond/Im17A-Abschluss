import * as React from "react";
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleDown} from "@fortawesome/free-solid-svg-icons";

import Banner from "../../components/Banner/Banner";

import "./GGross.scss";

function GGross() {
  const ref = React.createRef<Parallax>();
  const greetingText = "Vielen Dank für die tolle Zeit mit Ihnen!";
  return(
    <div className="g-gross">
      <Parallax pages={3} scrolling={true} ref={ref}>
        <ParallaxLayer offset={0} speed={0.1}>
            <Banner text={greetingText}>
              <div onClick={() => ref.current!!.scrollTo(1)}>
                <FontAwesomeIcon className="icon" icon={faArrowCircleDown} style={{height:"55px", width:"55px"}}/>
                <p>Scrollen</p>
              </div>
            </Banner>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
        <div className="laaxopen" />
        </ParallaxLayer>
        <ParallaxLayer offset={1.1} speed={-0.1}>
          <div className="memes">
            <h2>Juicy Memes</h2>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default GGross;
