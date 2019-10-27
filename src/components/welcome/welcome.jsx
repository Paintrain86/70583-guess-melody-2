import React from 'react';
import PropTypes from 'prop-types';

const Welcome = (props) => {
  const {luckText, playTime, mistakes, onBtnClick = () => {}} = props;

  return <section className="welcome">
    <div className="welcome__logo">
      <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" />
    </div>
    <button className="welcome__button" onClick={onBtnClick}>
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
  luckText: PropTypes.string.isRequired,
  playTime: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  onBtnClick: PropTypes.func
};

export default Welcome;
