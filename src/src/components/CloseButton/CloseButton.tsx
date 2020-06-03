import * as React from "react";

import "./CloseButton.scss";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";

function CloseButton() {


    return (
      <div className="btn">
        <FontAwesomeIcon className="icon" icon={faTimesCircle} style={{height:"55px", width:"55px"}}/>
      </div>
    );
}

export default CloseButton;
