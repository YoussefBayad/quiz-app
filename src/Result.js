import React from 'react';

const Result = (props) => {
  return (
    <div className="scoreBoard">
      <div className="score">You've scored {props.score} </div>
      <button className="playBtn" onClick={props.replay}>
        Replay
      </button>
    </div>
  );
};

export default Result;
