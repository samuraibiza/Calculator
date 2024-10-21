import { useState } from "react";
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

  return (
    <div className="container d-flex justify-content-center">
      <div className="container d-flex flex-wrap gap-4 justify-content-center ">
        <CalcScreen value={calcScreenValue}></CalcScreen>
        {numberButtons.map((number) => (
          <CalcButton
            label={number}
            onAddValue={() => {
              handleAddValue(number);
            }}
          ></CalcButton>
        ))}
        <CalcButton
          label="="
          onAddValue={() => {
            setCalcScreenValue((calcScreenValue) => eval(calcScreenValue));
          }}
        ></CalcButton>
      </div>
    </div>
  );
}

export default App;
