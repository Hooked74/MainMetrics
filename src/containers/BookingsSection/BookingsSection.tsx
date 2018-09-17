import IProps = MainMetrics.containers.BookingsSection.IProps;
import IState = MainMetrics.containers.BookingsSection.IState;

import React, { Fragment } from "react";
import { connect } from "react-redux";
import MetricSection from "../../components/MetricSection/MetricSection";
import { round } from "../../utils";
import styles from "./BookingsSection.scss";

const mapStateToProps = state => {
  const { metrics } = state;

  return metrics
    ? {
        date: state.date,
        previous: metrics.bookings_previous,
        current: metrics.bookings_current,
        str: metrics.str,
        avg: metrics.avg_price
      }
    : {
        date: state.date,
        previous: 0,
        current: 0,
        str: 0,
        avg: 0
      };
};

class BookingsSection extends MetricSection<IProps, IState> {
  protected statsHeader: string = "Bookings";
  protected icon: JSX.Element = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0V2H2L5.59497 9.58499L4.245 12.035C4.09003 12.325 4 12.65 4 13C4 14.105 4.89502 15 6 15H18V13H6.42499C6.28497 13 6.17499 12.89 6.17499 12.75C6.17499 12.705 6.185 12.665 6.20502 12.63L7.09998 11H14.55C15.3 11 15.955 10.585 16.3 9.97L19.875 3.48001C19.955 3.34 20 3.17499 20 3C20 2.44501 19.55 2 19 2H4.21503L3.26501 0H0ZM6 16C4.89502 16 4.01001 16.895 4.01001 18C4.01001 19.105 4.89502 20 6 20C7.10498 20 8 19.105 8 18C8 16.895 7.10498 16 6 16ZM14.01 18C14.01 16.895 14.895 16 16 16C17.105 16 18 16.895 18 18C18 19.105 17.105 20 16 20C14.895 20 14.01 19.105 14.01 18Z"
        fill="white"
      />
    </svg>
  );

  get describeHeader(): JSX.Element | string {
    return (
      <Fragment>
        STR: {round(this.props.str, 1)}%<br />
        Avg. Check: {Math.round(this.props.avg).toLocaleString("ru-RU")}
      </Fragment>
    );
  }

  get describeContent(): string {
    return "Conversion from clicks to bookings on all devices.";
  }

  get describeTags(): JSX.Element {
    return (
      <Fragment>
        <a href="#">STR</a>, <a href="#">Bookings</a>, <a href="#">Avg</a>, <a href="#">Check</a>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps)(BookingsSection);
