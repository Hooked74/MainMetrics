import IProps = MainMetrics.containers.ErrorBar.IProps;
import IState = MainMetrics.containers.ErrorBar.IState;
import IMetricsError = MainMetrics.store.IMetricsError;

import React, { CSSProperties, PureComponent } from "react";
import { connect } from "react-redux";
import { generateRandomColor } from "../../utils";
import styles from "./ErrorBar.scss";

const mapStateToProps = state => {
  const { metrics } = state;

  return {
    errors: metrics ? metrics.errors_list : []
  };
};

class ErrorBar extends PureComponent<IProps, IState> {
  get sortableErrors(): IMetricsError[] {
    return this.props.errors.sort((a, b) => {
      if (a.code === null || b.code === null) return (a.code < b.code) as any;
      return (a.code > b.code) as any;
    });
  }

  get items(): JSX.Element[][] {
    const segments: JSX.Element[] = [];
    const legendItems: JSX.Element[] = [];
    const errors: IMetricsError[] = this.sortableErrors;
    const total: int = errors.reduce((accum, e) => (accum += e.count), 0);
    const existingColors: Set<string> = new Set();
    let key: int = 0;

    for (const error of errors) {
      const randomColor: string = this.getRandomColor(existingColors, error.code);
      const segmentStyle: CSSProperties = {
        color: randomColor,
        width: `${(error.count / total) * 100}%`
      };

      segments.push(<div className={styles.segment} style={segmentStyle} key={key} />);
      legendItems.push(
        <div className={styles["legend-item"]} key={key}>
          <i className={styles["legend-icon"]} style={{ color: randomColor }} />
          <span className={styles["legend-info"]}>
            {error.code !== null ? `Error ${error.code}` : "Other"}: {error.count}
          </span>
        </div>
      );
      key++;
    }

    return [segments, legendItems];
  }

  public render() {
    const items: JSX.Element[][] = this.items;

    return (
      <div className={styles.container}>
        <div className={styles.line}>{items[0]}</div>
        <div className={styles.legend}>
          {items[1].length ? items[1] : <div className={styles["no-legend"]}>No errors</div>}
        </div>
      </div>
    );
  }

  private getRandomColor(existingColors: Set<string>, code: number): string {
    let randomColor: string;
    if (code !== null) {
      do {
        randomColor = generateRandomColor();
      } while (existingColors.has(randomColor));
      existingColors.add(randomColor);
    } else {
      randomColor = "#a0b0b9";
    }
    return randomColor;
  }
}

export default connect(mapStateToProps)(ErrorBar);
