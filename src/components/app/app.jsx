import React from "react";
import PropTypes from 'prop-types';

import Welcome from "../welcome/welcome.jsx";

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

const App = (props) => {
  const {luckText = `Удачи!`, playTime = 7, mistakes = 4} = props;

  return <Welcome
    luckText={luckText}
    playTime={playTime}
    mistakes={mistakes}
  />;
};

App.propTypes = {
  luckText: PropTypes.string,
  playTime: isNumberPositive,
  mistakes: isNumberPositive
};

export default App;
