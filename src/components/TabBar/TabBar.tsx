import IProps = MainMetrics.components.TabBar.IProps;
import IState = MainMetrics.components.TabBar.IState;

import classNames from "class-names";
import React, { MouseEvent, PureComponent } from "react";
import styles from "./TabBar.scss";

export default class TabBar<T> extends PureComponent<IProps<T>, IState> {
  public static defaultProps: IProps<any> = {
    onClick: () => void 0
  };

  get TabBar(): JSX.Element[] {
    const { list, value } = this.props;

    return Object.values(list).map((v, i) => (
      <button
        onClick={this.onTabClick}
        className={classNames(styles.item, { [styles.active]: value === v })}
        data-value={v}
        key={i}
      >
        {v}
      </button>
    ));
  }

  public render() {
    return <div className={styles.container}>{this.TabBar}</div>;
  }

  private onTabClick = (e: MouseEvent) => {
    this.props.onClick((e.target as HTMLButtonElement).getAttribute("data-value"));
  };
}
