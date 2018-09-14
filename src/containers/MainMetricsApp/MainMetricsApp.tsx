// tslint:disable:jsx-no-lambda
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Tabs from "../../components/Tabs/Tabs";
import buildActions from "../../store/actions";
import DateList from "../../store/date-list";
import styles from "./MainMetricsApp.scss";

import IProps = MainMetrics.containers.MainMetricsApp.IProps;
import IState = MainMetrics.containers.MainMetricsApp.IState;

const mapStateToProps = state => ({
  date: state.date
});

class MainMetricsApp extends PureComponent<IProps, IState> {
  public componentDidMount() {
    this.props.loadMetrics(DateList.TODAY);
  }

  public render() {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Main metrics</h1>
          <Tabs onClick={this.props.loadMetrics} list={DateList} value={this.props.date} />
        </header>
      </div>
    );
  }
}

// prettier-ignore
export default connect(mapStateToProps, buildActions)(MainMetricsApp);
