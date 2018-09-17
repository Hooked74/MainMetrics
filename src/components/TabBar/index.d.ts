declare namespace MainMetrics.components.TabBar {
  interface IProps<T> {
    list?: T;
    value?: string;
    onClick?(value: string): any;
  }

  interface IState {}
}
