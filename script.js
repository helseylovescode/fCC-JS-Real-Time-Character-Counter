const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

textInput.addEventListener("input", () => {
  let currLength = textInput.value.length;

  if (currLength >= 50) {
    textInput.value = textInput.value.slice(0, 50);
    currLength = 50;

    charCount.style.color = "red";
    charCount.classList.add("flicker-bg");
  } else {
    charCount.style.color = "";
    charCount.classList.remove("flicker-bg");
  }

  charCount.textContent = `Character Count: ${currLength}/50`
});