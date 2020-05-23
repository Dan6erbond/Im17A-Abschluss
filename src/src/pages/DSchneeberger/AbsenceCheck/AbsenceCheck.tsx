import * as React from "react";
import Student from "./Student";
import {Pupil} from "./Student";

const serge = "SERGE";

const pupils = [
  {
    message: "Präsent",
    initials: "DB", //Dominik
    colour: "#f5c43d"
  },
  {
    message:"Anwesend",
    initials:"RM", //Ravi
    colour: "#d3b49c"
  },
  { message: "ich bin hier",
    initials: "AG", //Alex
    colour: "#d1b49d"
  },
  { message: "Da",
    initials: "TM", //Tim
    colour: "#f4b4b4"
  },
  { message: "Bereit",
    initials: "AS", //Alain
    colour: "#d9dcdf"
  },
  { message: "Hier",
    initials: "AS", //Albion
    colour: "#b0bad4"
  },
  { message: "Dabei",
    initials: "SK", //Simon
    colour: "#b5afdc"
  },
  { message: "Ich bin auch da!",
    initials: "AE", //Aron
    colour: "#b4addd"
  },
  { message: "Hier",
    initials: "FF", //Felix
    colour: "#f4d474"
  }
];

interface AbsenceCheckProps{

}

interface AbsenceCheckState{
    pupils: Pupil[],
    input: string;
    submittedAnswer: boolean;
    correct: boolean;
}

class AbsenceCheck extends React.Component<AbsenceCheckProps, AbsenceCheckState>{
  constructor(props: AbsenceCheckProps){
    super(props);
    this.shuffleArray = this.shuffleArray.bind(this);
    this.checkInput = this.checkInput.bind(this);

    this.state = {pupils: pupils.shuffle(), input: "", submittedAnswer: false, correct: false};
  }

  public shuffleArray(){
    pupils.shuffle();
    return pupils;
  }

  public checkInput(){
    this.setState({submittedAnswer:true})
    let inputInUpper = this.state.input.toUpperCase();
    if(inputInUpper === serge){
      this.setState({correct: true});
    }
  }

  render(){
    return(
      !this.state.submittedAnswer ?
      <div className="content">
      <div className="content-title">
        <h2>Wer fehlt?</h2>
        <span>Mittwoch, 20.05.2020 16:41</span>
      </div>
        {Array.from(Array(this.state.pupils.length).keys()).map(i => <Student key={i} student={this.state.pupils[i]}/>)}
        <br/>
        <p>Eine Person fehlt. Wer ist es?</p>
        <input type="text" onChange={_e => {this.setState({input : _e.target.value})}}/>
        <br/><br/>
        <input type="button" value="Überprüfen"  onClick={this.checkInput}/>
        <br/><br/>
      </div>
      :
      <div className="content">
        <p>{this.state.correct ? "Stimmt. Serge fehlt! ;)" : "Nein, leider falsch."}</p>
        <input type="button" value="Nochmal" onClick={() => this.setState({submittedAnswer:false, input:"", correct: false})}/>
      </div>
    );
  }

}

export default AbsenceCheck;
