
const gameBoard = document.getElementById("gameBoard");
let tiles = [];

// Rutas de las imágenes de rana
const frogGreen = "images/frog_green.png";
const frogYellow = "images/frog_yellow.png";

function initGame() {
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
      img.style.width = "50px";
      img.style.height = "50px";
      div.appendChild(img);
      div.onclick = () => moveFrog(index);
    } else if (value === "yellow") {
      const img = document.createElement("img");
      img.src = frogYellow;
      img.alt = "Rana amarilla";
      img.style.width = "50px";
      img.style.height = "50px";
      div.appendChild(img);
    }
    gameBoard.appendChild(div);
  });
}

function moveFrog(index) {
  if (tiles[index + 1] === "") {
    tiles[index + 1] = tiles[index];
    tiles[index] = "";
    renderBoard();
    checkWin();
  } else if (
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
  if (
    tiles[3] === "green" &&
    tiles[4] === "green" &&
    tiles[5] === "green" &&
    tiles[0] === ""
  ) {
    // Ganó el jugador, cambia una rana a amarilla
    tiles[3] = "yellow";
    renderBoard();
    alert("¡Ganaste!");
  }
}

function resetGame() {
  initGame();
}

// Inicializar el juego al cargar la página
initGame();
