import React from "react";
import cn from "classnames";

import styles from "./Key.module.css";
import { useCallback } from "react";

export const Key = ({ name, children, kind, onClick }) => {
  const handleClick = useCallback(() => {
    onClick(name);
  }, [name, onClick]);

  return (
    <button
      className={cn(styles.key, styles[kind])}
      style={{ gridArea: name }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
