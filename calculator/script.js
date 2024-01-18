let outputScreen = document.getElementById("output-screen");

function display(num) {
  outputScreen.value += num;
}

function Calculate() {
  try {
    outputScreen.value = Function(
      '"use strict";return (' + outputScreen.value + ")"
    )();
  } catch (error) {
    outputScreen.value = "Error";
    console.error(error); // Log the error for debugging purposes
  }
}

function Clear() {
  outputScreen.value = "";
}

function del() {
  outputScreen.value = outputScreen.value.slice(0, -1);
}

function addDecimal() {
  // Ensure there is only one decimal point in the number
  if (!outputScreen.value.includes(".")) {
    outputScreen.value += ".";
  }
}

function calculatePercentage() {
  outputScreen.value = parseFloat(outputScreen.value) / 100;
}

function calculateSquareRoot() {
  outputScreen.value = Math.sqrt(parseFloat(outputScreen.value));
}

function calculatePower() {
  outputScreen.value = Math.pow(parseFloat(outputScreen.value), 2);
}

// Event listener for keyboard support
document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (/[0-9]/.test(key)) {
    display(key);
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    display(key);
  } else if (key === "Enter") {
    Calculate();
  } else if (key === "Escape") {
    Clear();
  }
});
