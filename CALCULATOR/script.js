document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const numberButtons = document.querySelectorAll(".number");
    const operatorButtons = document.querySelectorAll(".operator");
    const clearButton = document.getElementById("clear");
    const calculateButton = document.getElementById("calculate");
    const backspaceButton = document.getElementById("backspace");
  
    let currentInput = '';
  
    numberButtons.forEach(button => {
      button.addEventListener("click", function() {
        currentInput += button.value;
        display.value = currentInput;
      });
    });
  
    operatorButtons.forEach(button => {
      button.addEventListener("click", function() {
        if (currentInput !== '') {
          currentInput += button.value;
          display.value = currentInput;
        }
      });
    });
  
    clearButton.addEventListener("click", function() {
      currentInput = '';
      display.value = '';
    });
  
    calculateButton.addEventListener("click", function() {
      if (currentInput !== '') {
        try {
          const result = eval(currentInput);
          display.value = result;
          currentInput = String(result);
        } catch (error) {
          display.value = 'Error';
          currentInput = '';
        }
      }
    });
  
    backspaceButton.addEventListener("click", function() {
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput;
    });
  
    document.addEventListener("keydown", function(event) {
      const key = event.key;
      if (!isNaN(key) || key === "." || key === "+" || key === "-" || key === "*" || key === "/" || key === "Enter") {
        if (key === "Enter") {
          calculateButton.click();
        } else if (key === "+" || key === "-" || key === "*" || key === "/") {
          if (currentInput !== '') {
            currentInput += key;
            display.value = currentInput;
          }
        } else {
          currentInput += key;
          display.value = currentInput;
        }
      } else if (key === "Backspace") {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
      }
    });
  });
  