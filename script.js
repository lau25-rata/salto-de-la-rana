const juego = document.getElementById('juego');
const ranas = [];

for (let i = 0; i < 7; i++) {
  const rana = document.createElement('button');
  rana.classList.add('rana');

  if (i < 3) {
    rana.classList.add('rana-verde');
  } else if (i > 3) {
    rana.classList.add('rana-roja');
  } else {
    rana.classList.add('vacio');
    rana.disabled = true;
  }

  juego.appendChild(rana);
  ranas.push(rana);
}
