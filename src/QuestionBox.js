import React, { useState } from 'react';

const QuestionBox = ({ question, answers, key, selected }) => {
  const [options, setOptions] = useState(answers);
  return (
    <div className="questionBox" key={key}>
      <div className="question">{question}</div>

      {options.map((option, index) => (
        <button
          className="answerBtn"
          key={index}
          onClick={() => {
            setOptions([option]);
            selected(option);
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
export default QuestionBox;
