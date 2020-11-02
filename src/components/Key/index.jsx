import React from "react";
import cn from "classnames";

import styles from "./Key.module.css";

export const Key = ({ name, children, kind, onClick }) => (
  <button
    className={cn(styles.key, styles[kind])}
    style={{ gridArea: name }}
    onClick={onClick}
  >
    {children}
  </button>
);
