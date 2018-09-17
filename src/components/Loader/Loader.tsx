// tslint:disable:jsx-no-lambda
import IProps = MainMetrics.components.Loader.IProps;

import classNames from "class-names";
import React from "react";
import styles from "./Loader.scss";

export default ({ visible }: IProps) => (
  <div className={classNames(styles.container, { "h-hidden": !visible })}>
    <div className={styles.roller}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);
