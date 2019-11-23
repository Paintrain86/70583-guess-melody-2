import React from "react";
import PropTypes from 'prop-types';

import Welcome from "../welcome/welcome.jsx";
import GuessGenre from "../guess-genre/guess-genre.jsx";
import GuessArtist from "../guess-artist/guess-artist.jsx";

const isNumberPositive = (props, propName, componentName) => {
  let error;
  if (typeof props[propName] !== `undefined`) {
    if (typeof props[propName] !== `number`) {
      error = new Error(`Значение свойства ${propName} в компоненте ${componentName} должно быть числом`);
    }
    if (props[propName] < 1) {
      error = new Error(`Значение свойства ${propName} в компоненте ${componentName} должно быть больше нуля`);
    }
  }
  return error;
};

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.questions = props.settings.questions;

    this.state = {
      questionIndex: -1
    };

    this.handleUserAnswer = this.handleUserAnswer.bind(this);
  }

  static getScreen(questionIdx, props, onUserAnswer) {
    if (questionIdx === -1) {
      const {
        playTime,
        mistakes,
        luckText
      } = props.settings;

      return <Welcome
        luckText={luckText}
        playTime={playTime}
        mistakes={mistakes}
        onStartBtnClick={onUserAnswer}
      />;
    }

    const {questions} = props.settings;
    const curQuestion = questions[questionIdx];

    switch (curQuestion.type) {
      case `genre`: return <GuessGenre
        question={curQuestion}
        onAnswer={onUserAnswer}
      />;

      case `artist`: return <GuessArtist
        question={curQuestion}
        onAnswer={onUserAnswer}
      />;
    }

    return null;
  }

  handleUserAnswer() {
    this.setState((prevState) => ({
      prevState,
      questionIndex: (prevState.questionIndex === this.questions.length - 1) ? -1 : prevState.questionIndex + 1
    }));
  }

  render() {
    const {questionIndex} = this.state;

    return App.getScreen(questionIndex, this.props, this.handleUserAnswer);
  }

}

App.propTypes = {
  settings: PropTypes.shape({
    luckText: PropTypes.string,
    playTime: isNumberPositive,
    mistakes: isNumberPositive,
    questions: PropTypes.array
  })
};

export default App;
