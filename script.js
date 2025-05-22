const gameContainer = document.getElementById("game");
let frogs = ["green", "green", "green", "empty", "red", "red", "red"];

function renderGame() {
  gameContainer.innerHTML = "";
  frogs.forEach((frog, index) => {
    const div = document.createElement("div");
    div.className = `frog ${frog}`;
    div.addEventListener("click", () => moveFrog(index));
    gameContainer.appendChild(div);
  });
}

function moveFrog(index) {
  if (frogs[index] === "empty") return;

  const direction = frogs[index] === "green" ? 1 : -1;
  const target1 = index + direction;
  const target2 = index + direction * 2;

  if (frogs[target1] === "empty") {
    [frogs[index], frogs[target1]] = [frogs[target1], frogs[index]];
  } else if (frogs[target2] === "empty" && frogs[target1] !== frogs[index]) {
    [frogs[index], frogs[target2]] = [frogs[target2], frogs[index]];
  }

  renderGame();
}

renderGame();