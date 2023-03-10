const myText = document.getElementById("my-text");

myText.addEventListener("input", () => {
  let count = myText.value.length;
  document.getElementById(
    "count-result"
  ).textContent = `total character: ${count}`;
});
