import IProps = MainMetrics.components.MetricSection.IProps;
import IState = MainMetrics.components.MetricSection.IState;

import classNames from "class-names";
import React, { PureComponent } from "react";
import Indicator from "../Indicator/Indicator";
import styles from "./MetricSection.scss";

abstract class MetricSection<P extends IProps, S extends IState> extends PureComponent<P, S> {
  protected icon: JSX.Element;
  protected statsHeader: string;

  get describeHeader(): JSX.Element | string {
    return null;
  }

  get describeContent(): string {
    return null;
  }

  get describeTags(): JSX.Element {
    return null;
  }

  get diff(): int {
    return Math.round(this.props.current / (this.props.previous / 100)) - 100;
  }

  public render() {
    const diff: int = this.diff;
    const missed: boolean = diff < 0;

    return (
      <section className={styles.container}>
        <div className={styles.icon}>
          {this.icon}
          <div className={styles.indicator}>
            <Indicator missed={missed} />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.stats}>
            <div className={styles["stats-header"]}>
              <span className={classNames({ [styles.missed]: missed })}>{this.statsHeader}</span>
              <span
                className={classNames(styles.badge, { "h-hidden": !diff, [styles.missed]: missed })}
              >
                {diff > 0 ? `+${diff}` : diff}%
              </span>
            </div>
            <div className={styles["stats-main"]}>
              <div className={styles["stats-current"]}>
                <span className={styles["stats-value"]}>
                  {this.props.current.toLocaleString("ru-RU")}
                </span>
                <span className={styles["stats-date"]}>{this.props.date}</span>
              </div>
              <div className={styles["stats-previous"]}>
                <span className={styles["stats-value"]}>
                  {this.props.previous.toLocaleString("ru-RU")}
                </span>
                <span className={styles["stats-date"]}>Previous</span>
              </div>
            </div>
          </div>
          <div className={styles.describe}>
            <div className={classNames(styles["describe-header"], { [styles.missed]: missed })}>
              {this.describeHeader}
            </div>
            <div className={styles["describe-content"]}>{this.describeContent}</div>
            <div className={styles["describe-tags"]}>Help: {this.describeTags}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default MetricSection;
