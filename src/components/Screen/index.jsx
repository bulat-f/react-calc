import React from "react";

import styles from "./Screen.module.css";

export const Screen = ({ value }) => (
  <div className={styles.container}>{value}</div>
);
