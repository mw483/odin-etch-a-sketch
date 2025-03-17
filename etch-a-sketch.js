/*Generates the grid, by row and then insert the squares in each row*/
const gridSizeDefault = 16;
let gridSize = gridSizeDefault;

function setGridSize() {
    let gridSize = prompt("Input grid size (max: 100");
    while (gridSize > 100 || gridSize < 1) {
        alert("invalid grid size")
        gridSize = prompt("Input grid size (max: 100");
    }
    return gridSize
}

function generateGrid() {
    setGridSize();
    for (var i = 0; i < gridSize; i++)  {
        var gridRow = document.createElement('div');   
        gridRow.className = 'grid-row'; 
        document.getElementById('grid-container').appendChild(gridRow);
        for (var j = 0; j < gridSize; j++){
            var gridSquare = document.createElement('div');   
            gridSquare.className = 'grid-square';
            gridRow.appendChild(gridSquare).cloneNode(true); 
        }
    }
};

var generateButton = document.getElementById("generate-button");

generateButton.onclick = generateGrid;


