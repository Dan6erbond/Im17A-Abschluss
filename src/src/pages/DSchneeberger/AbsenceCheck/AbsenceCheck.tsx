import * as React from "react";
import Student from "./Student";
import {Pupil} from "./Student";

const pupils = [
  {
    message: "Präsent",
    initials: "DB",
    colour: "#f5c43d"
  },
  {
    message:"Anwesend",
    initials:"RM",
    colour: "red"
  },
  { message: "ich bin hier",
    initials: "AG",
    colour: "yellow"
  },
  { message: "test",
    initials: "TM",
    colour: "yellow"
  },
  { message: "test",
    initials: "AS",
    colour: "yellow"
  },
  { message: "test",
    initials: "SK",
    colour: "yellow"
  }
];

interface AbsenceCheckProps{

}
interface AbsenceCheckState{
    pupils: Pupil[]
}

class AbsenceCheck extends React.Component<AbsenceCheckProps, AbsenceCheckState>{
  constructor(props: AbsenceCheckProps){
    super(props);
    this.shuffleArray = this.shuffleArray.bind(this);
    this.state = {pupils: pupils.shuffle()};
  }

  public shuffleArray(){
    pupils.shuffle();
    return pupils;
  }

  render(){
    return(
      <div className="content">
      <div className="content-title">
        <h2>Wer fehlt?</h2>
        <span>Mittwoch, 20.05.2020 16:41</span>
      </div>
        {Array.from(Array(this.state.pupils.length).keys()).map(i => <Student key={i} student={this.state.pupils[i]}/>)}
      </div>
    );
  }

}

export default AbsenceCheck;
