
const gameBoard = document.getElementById("gameBoard");
let tiles = [];

// Rutas imágenes rana verde y amarilla
const frogGreen = "images/frog_green.png";
const frogYellow = "images/frog_yellow.png";

function initGame() {
  // Estado inicial: 7 casillas con 6 ranas verdes y 1 vacía en medio
  tiles = ["green", "green", "green", "", "green", "green", "green"];
  renderBoard();
}

function renderBoard() {
  gameBoard.innerHTML = "";
  tiles.forEach((value, index) => {
    const div = document.createElement("div");
    div.className = "tile";

    if (value === "green") {
      const img = document.createElement("img");
      img.src = frogGreen;
      img.alt = "Rana verde";
      img.width = 60;
      img.height = 60;
      div.appendChild(img);
      // Solo ranas verdes pueden moverse
      div.onclick = () => moveFrog(index);
    } else if (value === "yellow") {
      const img = document.createElement("img");
      img.src = frogYellow;
      img.alt = "Rana amarilla";
      img.width = 60;
      img.height = 60;
      div.appendChild(img);
    } else {
      div.textContent = ""; // Casilla vacía
    }

    gameBoard.appendChild(div);
  });
}

function moveFrog(index) {
  // Mover rana verde si casilla inmediata vacía
  if (tiles[index + 1] === "") {
    tiles[index + 1] = tiles[index];
    tiles[index] = "";
    renderBoard();
    checkWin();
  }
  // Mover rana verde saltando una rana diferente si la casilla está vacía
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
  // Condición de victoria: ranitas verdes en el medio y casilla vacía al inicio
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
