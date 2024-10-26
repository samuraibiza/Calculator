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
  switch (addValueKeyEvent.key) {
    case "Backspace":
    case "Delete":
      calcScreen.value = calcScreen.value.slice(0, -1);
      break;
    case "c":
    case "Escape":
      calcScreen.value = "";
      break;
    case "r":
      calcScreen.value = Math.sqrt(calcScreen.value);
      break;
    case "n":
      if (calcScreen.value[0] === "-") {
        calcScreen.value = calcScreen.value.slice(1);
      } else {
        calcScreen.value = "-" + calcScreen.value;
      }
      break;
    case "Enter":
    case " ":
      calcScreen.value = eval(calcScreen.value);
      break;
    case AddValueKeys:
      calcScreen.value += addValueKeyEvent.key;
      break;
  }
  if (AddValueKeys.includes(addValueKeyEvent.key)) {
    calcScreen.value += addValueKeyEvent.key;
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
