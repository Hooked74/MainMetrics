// tslint:disable:jsx-no-lambda
import IProps = MainMetrics.components.Indicator.IProps;

import classNames from "class-names";
import React from "react";
import styles from "./Indicator.scss";

export default ({ className, missed }: IProps) => (
  <i className={classNames(styles.container, { [styles.missed]: missed }, className)} />
);
