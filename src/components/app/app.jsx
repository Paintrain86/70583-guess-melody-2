import React from "react";
import PropTypes from 'prop-types';

import Welcome from "../welcome/";
import GuessGenre from "../guess-genre/";
import GuessArtist from "../guess-artist/";

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
  static getScreen(questionIdx, props, onUserAnswer) {
    if (questionIdx === -1) {
      const {
        playTime,
        mistakes,
        luckText
      } = props;

      return <Welcome
        luckText={luckText}
        playTime={playTime}
        mistakes={mistakes}
        onStartBtnClick={onUserAnswer}
      />;
    }

    const {questions} = props;
    const curQuestion = questions[questionIdx];

    switch (curQuestion.type) {
      case `genre`: return <GuessGenre
        question={curQuestion}
        onAnswer={onUserAnswer}
      />;

      case `artist`: return <GuessArtist
        queston={curQuestion}
        onAnswer={onUserAnswer}
      />;
    }

    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      question: -1
    };
  }

  render() {
    const {
      playTime,
      mistakes,
      luckText,
      questions
    } = this.props;

    const {questionIndex} = this.state;

    return App.getScreen(questionIndex, this.props, () => {
      this.setState((prevState) => {
        prevState,
        question: prevState.question + 1
      });
    });
  }

};

App.propTypes = {
  luckText: PropTypes.string,
  playTime: isNumberPositive,
  mistakes: isNumberPositive,
  questions: PropTypes.array
};

export default App;
