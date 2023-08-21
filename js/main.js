// |Recupero Dati

const cellContainer = document.getElementById("cell-container");
const playButton = document.getElementById("play-button");
const difficulty = document.getElementById("inputGroupSelect04");
let difficultySelect = difficulty.value;
console.log(difficultySelect);

let cellTotal;

// |Creazione numero di celle
if (difficultySelect == 1) {
  cellTotal = 7 * 7;
} else if (difficultySelect == 2) {
  cellTotal = 9 * 9;
} else if (difficultySelect == 3) {
  cellTotal = 10 * 10;
}

// |Generazione griglia
// createGrid(cellTotal, cellContainer);

// |Pulsante ceazione griglia
playButton.addEventListener("click", function () {
  createGrid(cellTotal, cellContainer);
});

// |Funzione creazione cella

function createCell(container, i) {
  const cell = document.createElement("li");

  cell.innerText = i;
  cell.classList.add("cell");
  if (difficultySelect == 1) {
    cell.classList.add("cell7");
  } else if (difficultySelect == 2) {
    cell.classList.add("cell9");
  } else {
    cell.classList.add("cell10");
  }
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
  for (let i = 1; i <= cellsNumber; i++) {
    createCell(container, i);
  }
}
