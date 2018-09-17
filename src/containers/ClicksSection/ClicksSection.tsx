import IProps = MainMetrics.containers.ClicksSection.IProps;
import IState = MainMetrics.containers.ClicksSection.IState;

import React, { Fragment } from "react";
import { connect } from "react-redux";
import MetricSection from "../../components/MetricSection/MetricSection";
import { round } from "../../utils";
import styles from "./ClicksSection.scss";

const mapStateToProps = state => {
  const { metrics } = state;

  return metrics
    ? {
        date: state.date,
        previous: metrics.clicks_previous,
        current: metrics.clicks_current,
        ctr: metrics.ctr
      }
    : {
        date: state.date,
        previous: 0,
        current: 0,
        ctr: 0
      };
};

class ClicksSection extends MetricSection<IProps, IState> {
  protected statsHeader: string = "Clicks";
  protected icon: JSX.Element = (
    <svg width="15" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.25 4.5V8.24001C3.03998 7.42999 2.25 6.06 2.25 4.5C2.25 2.00999 4.26001 0 6.75 0C9.23999 0 11.25 2.00999 11.25 4.5C11.25 6.06 10.46 7.42999 9.25 8.24001V4.5C9.25 3.12 8.13 2 6.75 2C5.37 2 4.25 3.12 4.25 4.5ZM9.54999 10.61L14.09 12.87C14.62 13.09 15 13.63 15 14.25C15 14.31 14.99 14.38 14.98 14.45L14.23 19.72C14.12 20.45 13.54 21 12.79 21H6C5.59003 21 5.21002 20.83 4.94 20.56L0 15.62L0.789978 14.82C0.98999 14.62 1.27002 14.49 1.58002 14.49C1.64001 14.49 1.69116 14.4989 1.74231 14.5078C1.76782 14.5122 1.79333 14.5167 1.82001 14.52L5.25 15.24V4.5C5.25 3.67 5.91998 3 6.75 3C7.58002 3 8.25 3.67 8.25 4.5V10.5H9.01001C9.20001 10.5 9.38 10.54 9.54999 10.61Z"
        fill="white"
      />
    </svg>
  );

  get describeHeader(): JSX.Element | string {
    return `CTR: ${round(this.props.ctr)}%`;
  }

  get describeContent(): string {
    return "Conversion from searches to clicks on all devices.";
  }

  get describeTags(): JSX.Element {
    return (
      <Fragment>
        <a href="#">CTR</a>, <a href="#">Clicks</a>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps)(ClicksSection);
