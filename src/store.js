import { applyMiddleware, compose } from "redux";
import { ReduxManager } from "redux-simple-state";
import { connectRouter } from "connected-react-router";
import { routerMiddleware } from "connected-react-router";
import registreState from "./modules/registerStates";

export default function configureStore(initialState = {}, history) {
  const enhancers = [applyMiddleware(routerMiddleware(history))];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  // (p.s. It also need you install a chrome add-on)
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;
  const store = ReduxManager.createStore(
    initialState,
    composeEnhancers(...enhancers)
  );
  ReduxManager.registerReducer("router", connectRouter(history));
  registreState();

  return { store };
}
