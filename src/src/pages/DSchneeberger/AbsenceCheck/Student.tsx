import * as React from "react";

export interface Pupil{
    message: string;
    initials: string;
    colour: string;
}

export interface StudentProps{
  student: Pupil;
}

interface StudentState{
  student: Pupil;
}


class Student extends React.Component<StudentProps, StudentState>{
  constructor(props: StudentProps){
    super(props);

    this.state = {
        student: props.student
    };
  }

  render(){
    return(
        <div className="content-body">
          <div className="content-text">
            <p style={{border: `${this.state.student.colour} solid 3.5px`}}>{this.state.student.message}</p>
            <span>{this.state.student.initials}</span>
          </div>
        </div>
    );
  }

}

export default Student;
