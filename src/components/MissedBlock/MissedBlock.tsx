import IProps = MainMetrics.components.MissedBlock.IProps;
import IState = MainMetrics.components.MissedBlock.IState;

import React, { PureComponent } from "react";
import { round } from "../../utils";
import Indicator from "../Indicator/Indicator";
import styles from "./MissedBlock.scss";

export default class MissedBlock extends PureComponent<IProps, IState> {
  public render() {
    return (
      <div className={styles.container}>
        <Indicator className={styles.indicator} missed={this.props.value < this.props.average} />
        <div className={styles.message}>
          <div className={styles.primary}>
            <span className={styles.label}>{this.props.label}: </span>
            <span className={styles.value}>{round(this.props.value)}%</span>
          </div>
          <div className={styles.average}>Average: {round(this.props.average)}%</div>
        </div>
      </div>
    );
  }
}
