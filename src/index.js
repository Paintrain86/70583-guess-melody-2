import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";

const init = () => {
  ReactDOM.render(
      <App
        luckText="Братан, мы верим в тебя!"
      />,
      document.querySelector(`#root`)
  );
};

init();
