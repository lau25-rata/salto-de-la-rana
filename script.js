const gameBoard = document.getElementById("gameBoard");
let tiles = [];

function initGame() {
  tiles = ["🐸", "🐸", "🐸", "", "🐸", "🐸", "🐸"];
  renderBoard();
}

function renderBoard() {
  gameBoard.innerHTML = "";
  tiles.forEach((value, index) => {
    const div = document.createElement("div");
    div.className = "tile";
    div.textContent = value;
    if (value !== "") {
      div.onclick = () => moveFrog(index);
    }
    gameBoard.appendChild(div);
  });
}

function moveFrog(index) {
  const emptyIndex = tiles.indexOf("");
  const diff = Math.abs(emptyIndex - index);
  if (diff === 1 || diff === 2) {
    [tiles[emptyIndex], tiles[index]] = [tiles[index], tiles[emptyIndex]];
    renderBoard();
  }
}

function resetGame() {
  initGame();
}

initGame();
