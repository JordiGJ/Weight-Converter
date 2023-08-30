// get elements
const input = document.querySelector("#userInput");
const result = document.querySelector("#result");
const error = document.querySelector("#error");

// functions
function handleClick(e) {
  const value = e.target.value;
  if (value < 0) {
    error.textContent = "Enter a valid number, please!";
    setTimeout(() => {
      error.textContent = "";
      input.value = "";
    }, 1500);
  } else {
    result.textContent = (value / 2.2).toFixed(2);
  }
}

// eventListeners
input.addEventListener("input", handleClick);
