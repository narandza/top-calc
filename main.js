const buttons = [
  {
    value: "AC",
    type: "all-clear",
    span2: true,
  },
  {
    value: "DEL",
    type: "delete",
  },
  {
    value: "/",
    type: "operation",
  },
  {
    value: "1",
    type: "number",
  },
  {
    value: "2",
    type: "number",
  },
  {
    value: "3",
    type: "number",
  },
  {
    value: "*",
    type: "operation",
  },
  {
    value: "4",
    type: "number",
  },
  {
    value: "5",
    type: "number",
  },
  {
    value: "6",
    type: "number",
  },
  {
    value: "+",
    type: "operation",
  },
  {
    value: "7",
    type: "number",
  },
  {
    value: "8",
    type: "number",
  },
  {
    value: "9",
    type: "number",
  },
  {
    value: "-",
    type: "operation",
  },
  {
    value: ".",
    type: "number",
  },
  {
    value: "0",
    type: "number",
  },
  {
    value: "=",
    type: "equals",
    span2: true,
  },
];

const calc = document.querySelector(".calculator");

buttons.forEach((button) => {
  const btn = document.createElement("button");
  btn.textContent = button.value;
  btn.setAttribute(`data-${button.type}`, "");
  btn.classList.add("button");
  if (button.span2) {
    btn.classList.add("span-two");
  }
  calc.appendChild(btn);
});

const numberButtons = document.querySelectorAll("[data-number]");
const operationNumbers = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandElement = document.querySelector("[data-current-operand]");
