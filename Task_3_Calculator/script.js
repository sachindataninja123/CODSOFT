const buttons = document.querySelectorAll("button");
const inputField = document.getElementById("inputField");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerText === "=") {
      calculate();
    } else if (e.target.innerText === "DEL") {
      deleteLast();
    } else if (e.target.innerText === "AC") {
      clearDisplay();
    } else {
      handleInput(e.target.innerText);
    }
  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key;
  // console.log(key);
  if (!isNaN(key) || ["+", "-", "/", "*", "%"].includes(key)) {
    handleInput(key);
  } else if (key === "Delete" || key === "Escape") {
    clearDisplay();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Enter") {
    calculate();
  }
});

function calculate() {
  inputField.value = eval(inputField.value);
}
function deleteLast() {
  inputField.value = inputField.value.slice(0, -1);
}
function clearDisplay() {
  inputField.value = "";
}
function handleInput(value) {
  inputField.value += value;
}