// Operations

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

const operation = (a, b, operation) => {
  operation(a, b);
};

const clear = () => {
  //todo
};

const negate = () => {
  //TODO
};

// Display

const resultDisplay = document.querySelector(".result-display");
const operationDisplay = document.querySelector(".operation-display");
let result = "";
let equation = "";

const enterNumber = (num) => {
  if (!result) {
    resultDisplay.textContent += num;
  }
};

// DOM

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, ",", 0, "="];

const operatingFunctions = [
  {
    name: "negate",
    function: negate,
    symbol: "+/-",
  },

  {
    name: "multiply",
    function: multiply,
    symbol: "*",
  },
  {
    name: "divide",
    function: divide,
    symbol: "/",
  },
  {
    name: "clear",
    function: clear,
    symbol: "C",
  },
  {
    name: "add",
    function: add,
    symbol: "+",
  },
  {
    name: "subtract",
    function: subtract,
    symbol: "-",
  },
];

const calcBodyNumbers = document.querySelector(".buttons-container");

operatingFunctions.forEach((operation) => {
  const operationButton = document.createElement("div");
  operationButton.classList.add("button");
  operationButton.classList.add("opBtn");
  operationButton.textContent = operation.symbol;

  operationButton.addEventListener("click", () => {
    console.log("clicked");
  });
  calcBodyNumbers.appendChild(operationButton);
});

numbers.forEach((number) => {
  const numberButton = document.createElement("div");
  numberButton.classList.add("button");
  numberButton.classList.add("num");
  number === "=" && numberButton.classList.add("primary");
  numberButton.textContent = number;
  numberButton.addEventListener("click", (e) => {
    enterNumber(e.target.textContent);
  });
  calcBodyNumbers.appendChild(numberButton);
});
