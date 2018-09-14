import Types from "./types";

import IState = MainMetrics.store.IState;
import IAction = MainMetrics.store.IAction;
import IMetrics = MainMetrics.store.IMetrics;

export default {
  [Types.SUCCESS_LOADING_METRICS](state: IState, action: IAction<{ metrics: IMetrics }>) {
    return {
      ...state,
      ...action.payload,
      loading: false,
      error: null
    };
  },
  [Types.START_LOADING_METRICS](state: IState, action: IAction<{ date: string }>) {
    return {
      ...state,
      ...action.payload,
      loading: true
    };
  },
  [Types.ERROR_LOADING_METRICS](state: IState, action: IAction<null, string>) {
    return {
      ...state,
      loading: false,
      metrics: null,
      error: action.error
    };
  }
};
