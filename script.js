const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const colorText = document.getElementById("color");


btn.addEventListener("click", () => {
  let hexColor = "#";
  for (let index = 0; index < 6; index++) {


  const randomIndex = Math.floor(Math.random() * hex.length);

    hexColor += hex[randomIndex];
}

document.body.style.backgroundColor = hexColor;
  colorText.textContent = hexColor;
}
)


