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
  calcScreen.value = "-";
};

const result = () => {
  calcScreen.value = eval(calcScreen.value);
};
