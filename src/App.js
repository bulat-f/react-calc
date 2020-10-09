import React, { useCallback, useState } from "react";
import "./App.css";

const NUMBERS = [1, 2, 3, 4, 5, 7, 8, 9, 0];

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
    <div className="container">
      <p className="display">{currentNumber}</p>
      <div className="buttonsContainer">
        <div className="digitsContainer">
          <div>
            <button className="button topOperation">AC</button>
            <button className="button topOperation">+/-</button>
            <button className="button topOperation">%</button>
          </div>
          {NUMBERS.map((num) => (
            <button
              key={num}
              data-number={num}
              onClick={handleClick}
              className="button digit"
            >
              {num}
            </button>
          ))}
        </div>
        <div className="rightOperationsContainer">
          <button
            className="button rightOperation"
            onClick={handleOperationClick}
          >
            +
          </button>
          <button className="button rightOperation" onClick={handleClickEql}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
