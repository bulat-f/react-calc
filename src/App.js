import React, { useCallback, useState } from "react";
import { Screen } from "./components/Screen";
import { Keyboard } from "./components/Keyboard";

import styles from "./App.module.css";

const OPERATIONS = {
  add: (a, b) => a + b,
};

function App() {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState("");

  const handleClick = useCallback(
    (event) => {
      const digit = Number(event.target.getAttribute("data-number"));
      if (operation) {
        setResult(currentNumber);
        setCurrentNumber(digit);
      } else {
        setCurrentNumber(currentNumber * 10 + digit);
      }
    },
    [currentNumber, operation]
  );
  const handleOperationClick = useCallback(() => {
    setOperation("add");
  }, []);

  const handleClickEql = useCallback(() => {
    if (operation) {
      setCurrentNumber(OPERATIONS[operation](currentNumber, result));
      setOperation("");
    }
  }, [currentNumber, operation, result]);

  return (
    <div className={styles.container}>
      <Screen value={currentNumber} />
      <Keyboard
        handleClick={handleClick}
        handleOperationClick={handleOperationClick}
        handleClickEql={handleClickEql}
      />
    </div>
  );
}

export default App;
