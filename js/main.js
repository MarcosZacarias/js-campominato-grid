// |Recupero Dati

const cellContainer = document.getElementById("cell-container");
const playButton = document.getElementById("play-button");

// |Creazione numero di celle
const cellTotal = 10 * 10;

// |Generazione griglia
createGrid(cellTotal, cellContainer);

// |Pulsante ceazione griglia
playButton.addEventListener("click", function () {
  createGrid(cellTotal, cellContainer);
});

// |Funzione creazione cella

function createCell(container, i) {
  const cell = document.createElement("li");
  cell.innerText = i;
  cell.classList.add("cell");
  cell.addEventListener("click", function () {
    cell.classList.add("bg-primary");
    console.log(i);
  });

  cellContainer.append(cell);
}

// |Funzione creazione griglia
function createGrid(cellsNumber, container) {
  container.innerHTML = "";
  // |Ciclo creazioni celle
  for (let i = 1; i <= cellTotal; i++) {
    createCell(container, i);
  }
}
