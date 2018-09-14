import { applyMiddleware, createStore, Middleware, Store } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import DateList from "./date-list";
import reducers from "./reducers";

import IState = MainMetrics.store.IState;
import IAction = MainMetrics.store.IAction;
import TReducer = MainMetrics.store.TReducer;

export default (baseState: IState): Store<IState, IAction> => {
  const initialState: IState = {
    date: null,
    loading: false,
    error: null,
    metrics: null,
    ...baseState
  };

  const reducer: TReducer = (state, action) =>
    reducers[action.type] ? reducers[action.type](state, action) : state;
  const middlewares: Middleware[] = [thunk];

  if (process.env.NODE_ENV !== "production") {
    middlewares.push(
      createLogger({
        collapsed: true
      })
    );
  }

  return createStore(reducer, initialState, applyMiddleware(...middlewares));
};
