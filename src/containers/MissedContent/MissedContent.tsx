import IProps = MainMetrics.containers.MissedContent.IProps;
import IState = MainMetrics.containers.MissedContent.IState;

import React, { PureComponent } from "react";
import { connect } from "react-redux";
import MissedBlock from "../../components/MissedBlock/MissedBlock";
import styles from "./MissedContent.scss";

const mapStateToProps = state => {
  const { metrics } = state;

  return metrics
    ? {
        errors: metrics.errors,
        zeroes: metrics.zeroes,
        timeouts: metrics.timeouts,
        average: metrics.average
      }
    : {
        errors: 0,
        zeroes: 0,
        timeouts: 0,
        average: 0
      };
};

class MissedContent extends PureComponent<IProps, IState> {
  public render() {
    const { errors, zeroes, timeouts, average } = this.props;

    return (
      <div className={styles.container}>
        <MissedBlock label="Errors" value={errors} average={average} />
        <MissedBlock label="Zeroes" value={zeroes} average={average} />
        <MissedBlock label="Timeouts" value={timeouts} average={average} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(MissedContent);
