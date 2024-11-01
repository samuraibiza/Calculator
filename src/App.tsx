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

  const handleFindRoot = () => {
    setCalcScreenValue(Math.sqrt(parseFloat(calcScreenValue)).toString());
  };

  const handleDelete = () => {
    setCalcScreenValue(calcScreenValue.slice(0, -1));
  };

  const handleResult = () => {
    setCalcScreenValue(eval(calcScreenValue).toString());
  };

  const handleNegate = () => {
    if (calcScreenValue[0] === "-") {
      setCalcScreenValue(calcScreenValue.slice(1));
    } else {
      setCalcScreenValue("-" + calcScreenValue);
    }
  };

  useEffect(() => {
    const addValueKeyEvent = (keyPressed: KeyboardEvent) => {
      switch (keyPressed.key) {
        case "Backspace":
        case "Delete":
          handleDelete();
          break;
        case "c":
        case "Escape":
          setCalcScreenValue("");
          break;
        case "r":
          handleFindRoot();
          break;
        case "n":
          handleNegate();
          break;
        case "Enter":
        case " ":
          handleResult();
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
  }, [calcScreenValue]);

  return (
    <div className="container d-flex justify-content-center">
      <div className="container d-flex flex-wrap gap-4 justify-content-center ">
        <CalcButton
          label="reset"
          onButtonClick={() => {
            setCalcScreenValue("");
          }}
        />
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
            handleFindRoot();
          }}
        />
        <CalcButton
          label="del"
          onButtonClick={() => {
            handleDelete();
          }}
        />
        <CalcButton
          label="+/-"
          onButtonClick={() => {
            handleNegate();
          }}
        />
        <CalcButton
          label="="
          onButtonClick={() => {
            handleResult();
          }}
        />
      </div>
    </div>
  );
}

export default App;
