import classNames from "class-names";
import React, { MouseEvent, PureComponent } from "react";
import styles from "./Tabs.scss";

import IProps = MainMetrics.components.Tabs.IProps;
import IState = MainMetrics.components.Tabs.IState;

export default class Tabs<T> extends PureComponent<IProps<T>, IState> {
  public static defaultProps: IProps<any> = {
    onClick: () => void 0
  };

  get tabs(): JSX.Element[] {
    const { list, value } = this.props;

    return Object.values(list).map((v, i) => (
      <button
        onClick={this.onTabClick}
        className={classNames(styles.item, { [styles.active]: value === v })}
        data-value={v}
        key={i}
      >
        {value}
      </button>
    ));
  }

  public render() {
    return <div className={styles.container}>{this.tabs}</div>;
  }

  private onTabClick = (e: MouseEvent) => {
    this.props.onClick((e.target as HTMLButtonElement).getAttribute("data-value"));
  };
}
