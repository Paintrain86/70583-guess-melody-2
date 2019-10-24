import React from 'react';
import PropTypes from 'prop-types';

const isNumberPositive = (props, propName, componentName) => {
  let error;
  if (typeof props[propName] !== `number`) {
    error = new Error(`Значение свойства ${propName} в компоненте ${componentName} должно быть числом`);
  }
  if (props[propName] < 1) {
    error = new Error(`Значение свойства ${propName} в компоненте ${componentName} должно быть больше нуля`);
  }
  return error;
};

const Welcome = (props) => {
  const {luckText = `Удачи!`, playTime = 7, mistakes = 4} = props;

  return <section className="welcome">
    <div className="welcome__logo">
      <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" />
    </div>
    <button className="welcome__button">
      <span className="visually-hidden">Начать игру</span>
    </button>
    <h2 className="welcome__rules-title">Правила игры</h2>
    <p className="welcome__text">Правила просты:</p>
    <ul className="welcome__rules-list">
      <li>За {playTime} минут нужно ответить на все вопросы.</li>
      <li>Можно допустить {mistakes} ошибки.</li>
    </ul>
    <p className="welcome__text">{luckText}</p>
  </section>;
};

Welcome.propTypes = {
  luckText: PropTypes.string,
  playTime: isNumberPositive,
  mistakes: isNumberPositive
};

export default Welcome;
