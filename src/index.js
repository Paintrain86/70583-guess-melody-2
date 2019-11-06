import React from "react";
import ReactDOM from "react-dom";

import settings from './mocks/game-settings.js';

import App from "./components/app/app.jsx";

const init = () => {
  ReactDOM.render(
      <App
        settings={settings}
      />,
      document.querySelector(`#root`)
  );
};

init();
