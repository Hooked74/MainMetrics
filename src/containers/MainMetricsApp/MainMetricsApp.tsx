import IProps = MainMetrics.containers.MainMetricsApp.IProps;
import IState = MainMetrics.containers.MainMetricsApp.IState;

import React, { Fragment, PureComponent } from "react";
import { connect } from "react-redux";
import Loader from "../../components/Loader/Loader";
import TabBar from "../../components/TabBar/TabBar";
import buildActions from "../../store/actions";
import { DateEnum, DateList } from "../../store/date-list";
import BookingsSection from "../BookingsSection/BookingsSection";
import ClicksSection from "../ClicksSection/ClicksSection";
import ErrorBar from "../ErrorBar/ErrorBar";
import MissedContent from "../MissedContent/MissedContent";
import SearchesSection from "../SearchesSection/SearchesSection";
import styles from "./MainMetricsApp.scss";

const mapStateToProps = state => ({
  date: state.date,
  loading: state.loading,
  error: state.error
});

class MainMetricsApp extends PureComponent<IProps, IState> {
  public componentDidMount() {
    this.props.loadMetrics(DateList[DateEnum.TODAY]);
  }

  get mainContent(): JSX.Element {
    const { error } = this.props;

    return error ? (
      <div className={styles.error}>{error}</div>
    ) : (
      <Fragment>
        <MissedContent />
        <ErrorBar />
        <div className={styles.sections}>
          <SearchesSection />
          <ClicksSection />
          <BookingsSection />
        </div>
      </Fragment>
    );
  }

  public render() {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Main metrics</h1>
          <TabBar onClick={this.props.loadMetrics} list={DateList} value={this.props.date} />
        </header>
        <main className={styles.main}>{this.mainContent}</main>
        <Loader visible={this.props.loading} />
      </div>
    );
  }
}

// prettier-ignore
export default connect(mapStateToProps, buildActions)(MainMetricsApp);
