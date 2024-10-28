import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import CalcButton from "./components/CalcButton";
import CalcScreen from "./components/CalcScreen";

function App() {
  const [calcScreenValue, setCalcScreenValue] = useState("");

  const numberButtons = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    "+",
    "-",
    "*",
    "/",
  ];

  const handleAddValue = (addedValue: string) => {
    setCalcScreenValue((calcScreenValue) => (calcScreenValue += addedValue));
  };

  useEffect(() => {
    const addValueKeyEvent = (keyPressed: KeyboardEvent) => {
      switch (keyPressed.key) {
        case "Backspace":
        case "Delete":
          setCalcScreenValue((calcScreenValue) => calcScreenValue.slice(0, -1));
          break;
        case "c":
        case "Escape":
          setCalcScreenValue("");
          break;
        case "r":
          setCalcScreenValue((calcScreenValue) =>
            Math.sqrt(parseFloat(calcScreenValue)).toString()
          );
          break;
        case "n":
          if (calcScreenValue[0] === "-") {
            setCalcScreenValue(calcScreenValue.slice(1));
          } else {
            setCalcScreenValue((calcScreenValue) => "-" + calcScreenValue);
          }
          break;
        case "Enter":
        case " ":
          setCalcScreenValue((calcScreenValue) => eval(calcScreenValue));
          break;
      }
      if (numberButtons.includes(keyPressed.key)) {
        handleAddValue(keyPressed.key);
      }
    };
    window.addEventListener("keydown", addValueKeyEvent);
    return () => {
      window.removeEventListener("keydown", addValueKeyEvent);
    };
  }, []);

  return (
    <div className="container d-flex justify-content-center">
      <div className="container d-flex flex-wrap gap-4 justify-content-center ">
        <CalcScreen value={calcScreenValue}></CalcScreen>
        {numberButtons.map((number) => (
          <CalcButton
            label={number}
            onButtonClick={() => {
              handleAddValue(number);
            }}
          />
        ))}
        <CalcButton
          label="root"
          onButtonClick={() => {
            const findRoot = Math.sqrt(parseFloat(calcScreenValue));
            setCalcScreenValue(findRoot.toString());
          }}
        />
        <CalcButton
          label="+/-"
          onButtonClick={() => {
            if (calcScreenValue[0] === "-") {
              setCalcScreenValue(calcScreenValue.slice(1));
            } else {
              setCalcScreenValue((calcScreenValue) => "-" + calcScreenValue);
            }
          }}
        />
        <CalcButton
          label="="
          onButtonClick={() => {
            setCalcScreenValue(eval(calcScreenValue));
          }}
        />
      </div>
    </div>
  );
}

export default App;
