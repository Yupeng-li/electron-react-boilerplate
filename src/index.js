import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import configureStore from "./store";
import { createHashHistory } from "history";
import { ConnectedRouter } from "connected-react-router";
import "./index.css";

const initialState = {};
const history = createHashHistory();
const { store } = configureStore(initialState, history);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
  );
};

function initApp() {
  render();
}

initApp();
