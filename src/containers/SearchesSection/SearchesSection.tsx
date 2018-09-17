import IProps = MainMetrics.containers.SearchesSection.IProps;
import IState = MainMetrics.containers.SearchesSection.IState;

import React, { Fragment } from "react";
import { connect } from "react-redux";
import MetricSection from "../../components/MetricSection/MetricSection";
import styles from "./SearchesSection.scss";

const mapStateToProps = state => {
  const { metrics } = state;

  return metrics
    ? {
        date: state.date,
        previous: metrics.searches_previous,
        current: metrics.searches_current,
        web: metrics.web_pessimizer,
        mobile: metrics.mobile_pessimizer
      }
    : {
        date: state.date,
        previous: 0,
        current: 0,
        web: 0,
        mobile: 0
      };
};

class SearchesSection extends MetricSection<IProps, IState> {
  protected statsHeader: string = "Searches";
  protected icon: JSX.Element = (
    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.8719 0.597C15.6836 0.22875 15.3178 0 14.9156 0H1.08284C0.68139 0 0.314845 0.22875 0.126481 0.597C-0.0633372 0.969 -0.0378827 1.4145 0.191936 1.76025L5.75266 10.1453C5.79484 10.209 5.81739 10.2825 5.81739 10.359V16.8757C5.81739 17.496 6.30684 18 6.9083 18C7.10394 18 7.29666 17.9445 7.46757 17.8388L9.65303 16.4865C9.97884 16.284 10.181 15.915 10.181 15.5235V10.359C10.181 10.2825 10.2036 10.209 10.2465 10.1445L15.8065 1.761C16.0363 1.41525 16.0618 0.969 15.8719 0.597Z"
        fill="white"
      />
    </svg>
  );

  get mobile(): int {
    return Math.floor(this.props.mobile);
  }

  get web(): int {
    return Math.floor(this.props.web);
  }

  get describeHeader(): JSX.Element | string {
    return (
      <Fragment>
        Mobile traffic: {this.mobile}%<br />
        Web traffic: {this.web}%
      </Fragment>
    );
  }

  get describeContent(): string {
    return `You get ${this.mobile}% traffic on mobile and ${this.web}% traffic on desktop devices.`;
  }

  get describeTags(): JSX.Element {
    return (
      <Fragment>
        <a href="#">Searches</a>, <a href="#">Pessimisation</a>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps)(SearchesSection);
