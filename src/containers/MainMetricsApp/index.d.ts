declare namespace MainMetrics.containers.MainMetricsApp {
  interface IProps extends MainMetrics.store.IActions {
    date: string;
    loading: boolean;
    error: string;
  }

  interface IState {}
}
