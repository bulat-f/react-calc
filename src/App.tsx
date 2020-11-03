import React, { useCallback, useState } from "react";
import { Screen } from "./components/Screen";
import { Keyboard } from "./components/Keyboard";

import styles from "./App.module.css";

enum Operation {
  times = "times",
  plus = "plus",
  minus = "minus",
  divide = "divide",
}

const getOperationFromString = (str: string) => {
  switch (str) {
    case Operation.times:
      return Operation.times;
    case Operation.plus:
      return Operation.plus;
    case Operation.minus:
      return Operation.minus;
    case Operation.divide:
      return Operation.divide;
    default:
      return null;
  }
};

const calculate = (operation: Operation | null) => {
  switch (operation) {
    case Operation.times:
      return (a: number, b: number) => a * b;
    case Operation.plus:
      return (a: number, b: number) => a + b;
    case Operation.minus:
      return (a: number, b: number) => a - b;
    case Operation.divide:
      return (a: number, b: number) => a / b;
    default:
      return (_a: number, b: number) => b;
  }
};

const isDigit = (name: string) => {
  return Boolean(name.match(/digit-\d/));
};

function App() {
  const [memory, setMemory] = useState<number>(0);
  const [lastKey, setLastKey] = useState<string>("");
  const [currentValue, setCurrentValue] = useState<string>("0");
  const [currentOperation, setCurrentOperation] = useState<Operation | null>(
    null
  );

  const handleClick = useCallback(
    (name: string) => {
      setLastKey(name);

      // Handle digits
      if (isDigit(name)) {
        const digit = name.replace(/digit-(\d)/, "$1");

        if (!isDigit(lastKey)) {
          setMemory(Number(currentValue));
          setCurrentValue(digit);
          return;
        }

        if (currentValue === "0") {
          setCurrentValue(digit);
        } else {
          setCurrentValue(currentValue + digit);
        }
      }

      if (name === "decimal-mark") {
        setCurrentValue(currentValue + ".");
        return;
      }

      // Handle operations
      if (name in Operation) {
        setCurrentOperation(getOperationFromString(name));
        return;
      }

      if (name === "eql") {
        const nextValue = calculate(currentOperation)(
          memory,
          Number(currentValue)
        );

        setCurrentValue(String(nextValue));
        setMemory(nextValue);
      }

      if (name === "ac") {
        setCurrentValue("0");
      }

      if (name === "sign") {
        setCurrentValue(String(-1 * Number(currentValue)));
      }

      if (name === "percent" && currentOperation === Operation.times) {
        const nextValue = calculate(currentOperation)(
          memory,
          Number(currentValue) / 100
        );

        setCurrentValue(String(nextValue));
        setMemory(nextValue);
      }
    },
    [currentOperation, currentValue, lastKey, memory]
  );

  return (
    <div className={styles.container}>
      <Screen value={currentValue} />
      <Keyboard onClick={handleClick} />
    </div>
  );
}

export default App;
