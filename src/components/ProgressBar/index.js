import React from "react";
import "./style.css";

function ProgressBar(props) {
  return (
    <div className="progress">
      <span className="skill">
        {props.title} <i class="val">{props.progress}%</i>
      </span>
      <div className="progress-bar-wrap">
        <div
          style={{ width: props.progress + "%", backgroundColor: props.color }}
          className="progress-bar"
          role="progressbar"
          aria-valuenow={props.progress}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
