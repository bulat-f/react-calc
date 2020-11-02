import React from "react";
import { Key } from "../Key";

import styles from "./Keyboard.module.css";

const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const Keyboard = ({
  handleClick,
  handleOperationClick,
  handleClickEql,
}) => {
  return (
    <div className={styles.container}>
      <Key name="ac" kind="modifier">
        AC
      </Key>
      <Key name="sign" kind="modifier">
        +/-
      </Key>
      <Key name="percent" kind="modifier">
        %
      </Key>

      {NUMBERS.map((digit) => (
        <Key
          key={digit}
          name={`digit-${digit}`}
          kind="digit"
          onClick={handleClick}
        >
          {digit}
        </Key>
      ))}

      <Key name="decimal-mark" kind="digit">
        .
      </Key>

      <Key name="divide" kind="operation" onClick={handleOperationClick}>
        &divide;
      </Key>
      <Key name="times" kind="operation" onClick={handleOperationClick}>
        &times;
      </Key>
      <Key name="minus" kind="operation" onClick={handleOperationClick}>
        -
      </Key>
      <Key name="plus" kind="operation" onClick={handleOperationClick}>
        +
      </Key>
      <Key name="eql" kind="operation" onClick={handleClickEql}>
        =
      </Key>
    </div>
  );
};
