import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import api from './api';
import QuestionBox from './QuestionBox';
import Result from './Result';
class QuizBee extends Component {
  state = { questions: [], score: 0, responses: 0 };
  getData() {
    api().then((response) => this.setState({ questions: response }));
  }
  selected(option, correct) {
    const { score, responses } = this.state;
    if (option === correct) {
      this.setState({ score: score + 1 });
    }
    this.setState({ responses: responses + 1 });
  }
  replay() {
    this.getData();
    this.setState({ score: 0, responses: 0 });
  }

  componentDidMount() {
    this.getData();
  }
  render() {
    const { score, responses, questions } = this.state;

    return (
      <div className="container">
        <div className="title">QuizBee</div>
        {questions.length > 0 &&
          this.state.responses < 5 &&
          questions.map(({ question, answers, correct, questionId }) => (
            <QuestionBox
              question={question}
              answers={answers}
              correct={correct}
              key={questionId}
              selected={(answer) => this.selected(answer, correct)}
            />
          ))}
        {responses === 5 ? (
          <Result score={score} replay={this.replay.bind(this)} />
        ) : null}
      </div>
    );
  }
}

ReactDOM.render(<QuizBee />, document.getElementById('root'));
