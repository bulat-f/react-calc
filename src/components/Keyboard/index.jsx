import React from "react";
import { Key } from "../Key";

import styles from "./Keyboard.module.css";

const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const Keyboard = ({ onClick }) => {
  return (
    <div className={styles.container}>
      <Key name="ac" kind="modifier" onClick={onClick}>
        AC
      </Key>
      <Key name="sign" kind="modifier" onClick={onClick}>
        +/-
      </Key>
      <Key name="percent" kind="modifier" onClick={onClick}>
        %
      </Key>

      {NUMBERS.map((digit) => (
        <Key key={digit} name={`digit-${digit}`} kind="digit" onClick={onClick}>
          {digit}
        </Key>
      ))}

      <Key name="decimal-mark" kind="digit" onClick={onClick}>
        .
      </Key>

      <Key name="divide" kind="operation" onClick={onClick}>
        &divide;
      </Key>
      <Key name="times" kind="operation" onClick={onClick}>
        &times;
      </Key>
      <Key name="minus" kind="operation" onClick={onClick}>
        -
      </Key>
      <Key name="plus" kind="operation" onClick={onClick}>
        +
      </Key>
      <Key name="eql" kind="operation" onClick={onClick}>
        =
      </Key>
    </div>
  );
};
