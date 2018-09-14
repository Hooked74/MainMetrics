declare namespace MainMetrics.store {
  interface IMetricsError {
    code: int;
    count: int;
  }

  interface IMetrics {
    gate_id: int;
    web_pessimizer: int;
    mobile_pessimizer: float;
    bookings_previous: int;
    bookings_current: int;
    searches_previous: int;
    searches_current: int;
    clicks_previous: int;
    clicks_current: int;
    ctr: float;
    str: float;
    avg_price: float;
    timeout: float;
    zeroes: float;
    errors: float;
    errors_list: IMetricsError[];
  }

  interface IState {
    metrics?: IMetrics;
    loading?: boolean;
    date?: string;
    error?: string;
  }

  interface IAction<T = any, U = any> {
    type: int;
    payload?: T;
    error?: U;
  }

  type TReducer = (state: IState, action: IAction) => IState;

  interface IActions {
    loadMetrics?<T>(date: T): (dispatch) => Promise<void>;
  }
}
