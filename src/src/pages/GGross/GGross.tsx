import * as React from "react";
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
import Gallery from "react-photo-gallery";
import MemeCard from './Memes/MemeCard';
import {meme} from './Memes/meme';

import {Meme} from "./Memes/meme";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleDown} from "@fortawesome/free-solid-svg-icons";

import Banner from "../../components/Banner/Banner";

import "./GGross.scss";


interface GGrossProps{

}

interface GGrossState{
  fullscreen: boolean;
  chosenMeme?: Meme;
}

class GGross extends React.Component<GGrossProps, GGrossState>{
  constructor(props: GGrossProps){
    super(props);
    this.state={
      fullscreen: false,
      chosenMeme: undefined
    }
  }

  handleMemeClick(meme : Meme){
    console.log(meme);
    this.setState({chosenMeme: meme, fullscreen: true});
  }

render(){
  const ref = React.createRef<Parallax>();
  const greetingText = "Vielen Dank für die tolle Zeit mit Ihnen!";
  return(
    !this.state.fullscreen ?
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
        <ParallaxLayer offset={1} speed={0.1}>
          <div className="memes">
            <h2>Juicy Memes</h2>
            <div className="row">
              <div className="column">
              {meme.map((m, index) =>
                index < meme.length/2 ?
                <img src={m.src} onClick={() => this.handleMemeClick(m)}/>
                :
                null
              )}
              </div>
              <div className="column">
              {meme.map((m, index) =>
                index >= meme.length/2 ?
                <img src={m.src} onClick={() => this.handleMemeClick(m)}/>
                :
                null
              )}
              </div>
            </div>

            <div onClick={() => ref.current!!.scrollTo(2)}>
              <FontAwesomeIcon className="icon" icon={faArrowCircleDown} style={{height:"55px", width:"55px"}}/>
              <p>Scrollen</p>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.3} speed={0.2}>
          <div className="footnote">
            <h2>Not So Juicy Footnote</h2>
            <div>
              <p>Sehr geehrte Frau Gross. Nach dem Unabhängigkeitskrieg von 2019, in dem die IMS
              den WMS Tyrannen endlich das Handwerk legte, waren Sie unsere Sportlehrerin geworden. Das Ziel eines Homogenen Ethnoturunterricht war bereis seit Jahren in
              unseren Herzen tief verwurzelt. Wir hatten unglaublich viel Spass und waren froh von nun an im engsten Kreis den Unterricht schwänzen zu können. Mit Ihrer Hilfe
              wurde der Sportunterricht erträglich und wir konnten uns innerhalb der Klasse weiterentwickeln.</p>
              <p>Wir möchten Ihnen Danken für Ihren unerschütterlichen Einsatz uns zu motivieren und zu fördern.</p>
              <p>Best regards</p>
              <p>Ehemalige I3a</p>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
    :
    <div className="meme-content" onClick={() => this.setState({fullscreen : false})}>
      <div className="fullscreen">
      {this.state.chosenMeme != undefined ?
        <MemeCard meme={this.state.chosenMeme} />
        :
        <p>There is no Meme chosen</p>
      }
      </div>
  </div>
  );
}

}

export default GGross;
