declare namespace MainMetrics.store {
  interface IMetrics {}

  interface IState {
    metrics?: IMetrics;
    loading?: boolean;
    error?: string;
  }

  interface IAction<T = any, U = any> {
    type: int;
    payload?: T;
    error?: U;
  }

  type TReducer = (state: IState, action: IAction) => IState;

  interface IActions {
    loadMetrics?(): (dispatch) => Promise<void>;
  }
}
