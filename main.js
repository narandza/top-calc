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

class Calculator {
  constructor(previousOperandElement, currentOperandElement) {
    this.previousOperandElement = previousOperandElement;
    this.currentOperandElement = currentOperandElement;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);

    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "/":
        computation = prev / current;
        break;
      default:
        return;
    }

    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = "";
  }

  updateDisplay() {
    this.currentOperandElement.innerText = this.currentOperand;
    if (this.operation != null) {
      this.previousOperandElement.innerText = `${this.previousOperand} ${this.operation}`;
    }
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationNumbers = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandElement = document.querySelector("[data-current-operand]");

const calculator = new Calculator(
  previousOperandElement,
  currentOperandElement
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationNumbers.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
});
