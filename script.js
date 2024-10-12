const calcScreen = document.querySelector(".calc-screen");

const addValue = (calcInput) => {
  calcScreen.value += calcInput;
};

const sliceValue = () => {
  calcScreen.value = calcScreen.value.slice(0, -1);
};

const setZero = () => {
  calcScreen.value = "";
};

const result = () => {
  calcScreen.value = eval(calcScreen.value);
};
