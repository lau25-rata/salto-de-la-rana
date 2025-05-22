
const gameBoard = document.getElementById("gameBoard");
let tiles = [];

function initGame() {
  // Estado inicial con 6 ranitas verdes y 1 espacio vacío en el medio
  tiles = ["green", "green", "green", "", "green", "green", "green"];
  renderBoard();
}

function renderBoard() {
  gameBoard.innerHTML = "";
  tiles.forEach((value, index) => {
    const div = document.createElement("div");
    div.classList.add("tile");

    if (value === "green") {
      div.classList.add("green");
      div.onclick = () => moveFrog(index);
    } else if (value === "yellow") {
      div.classList.add("yellow");
    } else {
      div.classList.add("empty");
    }

    gameBoard.appendChild(div);
  });
}

function moveFrog(index) {
  // Movimiento simple a la casilla vacía siguiente
  if (tiles[index + 1] === "") {
    tiles[index + 1] = tiles[index];
    tiles[index] = "";
    renderBoard();
    checkWin();
  }
  // Salto a casilla vacía saltando una rana diferente
  else if (
    tiles[index + 2] === "" &&
    tiles[index + 1] !== "" &&
    tiles[index + 1] !== tiles[index]
  ) {
    tiles[index + 2] = tiles[index];
    tiles[index] = "";
    renderBoard();
    checkWin();
  }
}

function checkWin() {
  // Condición de victoria
  if (
    tiles[3] === "green" &&
    tiles[4] === "green" &&
    tiles[5] === "green" &&
    tiles[0] === ""
  ) {
    tiles[3] = "yellow"; // Cambiar rana central a amarilla
    renderBoard();
    setTimeout(() => alert("¡Ganaste!"), 100);
  }
}

function resetGame() {
  initGame();
}

initGame();
