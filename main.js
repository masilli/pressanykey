const p = document.getElementById("p");
const h1 = document.getElementById("key");

function changeBackgroundColorAndShowKey(event) {
  const body = document.body;
  h1.textContent = event.key;
  const colorCode = Math.floor(Math.random() * 16777215).toString(16);
  body.style.backgroundColor = "#" + colorCode;
  p.style.display = "none";
}

document.addEventListener("keydown", changeBackgroundColorAndShowKey);
