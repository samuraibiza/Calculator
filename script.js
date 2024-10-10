const calcScreen = document.querySelector(".calc-screen");
const number = [0,1,2,3,4,5,6,7,8,9];

let aInteger = number[1];
let bInteger = number[2];

const activeInteger = aInteger;

const sum = () => {
  sumResult = aInteger + bInteger;
  calcScreen.innerHTML = sumResult;
};

const setZero = () => {
  aInteger = number[0];
  calcScreen.innerHTML = aInteger;
};

// const createChatMEssageElement = (message) => `
// <div class="msg-placing-active">
//   <div class="message primary-msg primary-bg">
//     <div class="message-sender">${message.sender}</div>
//     <div class="message-text">${message.text}</div>
//     <div class="message-timestamp">${message.timeStamp}</div>
//   </div>
// </div>
// `;

// const sendMessage = () => {
//   const timeStamp = new Date().toLocaleString("en-US", {
//     hour: "numeric",
//     minute: "numeric",
//     hour12: true,
//   });
//   const message = {
//     sender: "Leo",
//     text: chatInput.value,
//     timeStamp: timeStamp,
//   };

//   chatMessages.innerHTML += createChatMEssageElement(message);
// };
