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

const operatingFunctions = [
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
];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// DOM

const calcBodyNumbers = document.querySelector(".numbers");

numbers.forEach((number) => {
  const numberButton = document.createElement("div");
  numberButton.classList.add("button");
  numberButton.classList.add("num");
  numberButton.textContent = number;
  numberButton.addEventListener("click", (e) => {
    console.log(e.target.textContent);
  });
  calcBodyNumbers.appendChild(numberButton);
});
