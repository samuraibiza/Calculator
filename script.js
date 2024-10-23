const AddValueKeys = [
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
  "0",
  ".",
  "+",
  "-",
  "*",
  "/",
];

window.addEventListener("keydown", (addValueKeyEvent) => {
  if (AddValueKeys.includes(addValueKeyEvent.key)) {
    calcScreen.value += addValueKeyEvent.key;
  } else if (
    addValueKeyEvent.key === "Backspace" ||
    addValueKeyEvent.key === "Delete"
  ) {
    calcScreen.value = calcScreen.value.slice(0, -1);
  } else if (
    addValueKeyEvent.key === "Escape" ||
    addValueKeyEvent.key === "c"
  ) {
    calcScreen.value = "";
  } else if (addValueKeyEvent.key === "r") {
    calcScreen.value = Math.sqrt(calcScreen.value);
  } else if (addValueKeyEvent.key === "n") {
    if (calcScreen.value[0] == "-") {
      calcScreen.value = calcScreen.value.slice(1);
    } else {
      calcScreen.value = "-" + calcScreen.value;
    }
  } else if (addValueKeyEvent.key === " " || addValueKeyEvent.key === "Enter") {
    calcScreen.value = eval(calcScreen.value);
  } else {
    return;
  }
});

const calcScreen = document.querySelector(".calc-screen");

const addValue = (calcInput) => {
  calcScreen.value += calcInput;
};

const sliceValue = () => {
  calcScreen.value = calcScreen.value.slice(0, -1);
};

const negateValue = () => {
  if (calcScreen.value[0] == "-") {
    calcScreen.value = calcScreen.value.slice(1);
  } else {
    calcScreen.value = "-" + calcScreen.value;
  }
};

const setZero = () => {
  calcScreen.value = "";
};

const findRoot = () => {
  calcScreen.value = Math.sqrt(calcScreen.value);
};

const result = () => {
  calcScreen.value = eval(calcScreen.value);
};
