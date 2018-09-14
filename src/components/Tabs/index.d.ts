declare namespace MainMetrics.components.Tabs {
  interface IProps<T> {
    list?: T;
    value?: string;
    onClick?(value: string): any;
  }

  interface IState {}
}
