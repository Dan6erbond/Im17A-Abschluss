import * as React from "react";
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
import Gallery from "react-photo-gallery";
import MemeCard from './Memes/MemeCard';
import {meme} from './Memes/meme';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleDown} from "@fortawesome/free-solid-svg-icons";

import Banner from "../../components/Banner/Banner";

import "./GGross.scss";


interface GGrossProps{

}

interface GGrossState{
  fullscreen: boolean;
}

class GGross extends React.Component<GGrossProps, GGrossState>{
  constructor(props: GGrossProps){
    super(props);
    this.state={fullscreen: false}
  }


render(){
  const ref = React.createRef<Parallax>();
  const greetingText = "Vielen Dank für die tolle Zeit mit Ihnen!";
  return(
    !this.state.fullscreen ?
    <div className="g-gross">
      <Parallax pages={4} scrolling={true} ref={ref}>
        <ParallaxLayer offset={0} speed={0.1}>
            <Banner text={greetingText}>
              <div onClick={() => ref.current!!.scrollTo(1)}>
                <FontAwesomeIcon className="icon" icon={faArrowCircleDown} style={{height:"55px", width:"55px"}}/>
                <p>Scrollen</p>
              </div>
            </Banner>
        </ParallaxLayer>
        <ParallaxLayer offset={2.1} speed={-0.1}>
          <div className="memes">
            <h2>Juicy Memes</h2>
            <div className="gallery">
              <Gallery photos={meme} margin={5} onClick={() => this.setState({fullscreen: true})}/>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.1} speed={0.2}>
          <div className="trampoline">
            <h2>Trampolin</h2>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.2} speed={-0.2}>
            <div className="scrollBtn" onClick={() => ref.current!!.scrollTo(2.1)}>
              <FontAwesomeIcon className="icon" icon={faArrowCircleDown} style={{height:"55px", width:"55px"}}/>
              <p>Scrollen</p>
            </div>
        </ParallaxLayer>
      </Parallax>
    </div>
    :
    <div className="meme-content" onClick={() => this.setState({fullscreen : false})}>
      <div className="fullscreen">
        <MemeCard meme={meme[0]} />
      </div>
  </div>
  );
}

}

export default GGross;
