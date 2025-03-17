/*Set grid size */
function setGridSize() {
    let gridSize = prompt("Input grid size (max: 100)");
    while (gridSize > 100 || gridSize < 1) {
        alert("Invalid grid size")
        gridSize = prompt("Input grid size (max: 100)");
    }
    return gridSize
}

/*Generates the grid, by row and then insert the squares in each row*/
function generateGrid() {
    const gridContainer = document.getElementById("grid-container");
    gridContainer.innerHTML = '';
    gridSize = setGridSize();
    gridHeight = 960 / gridSize;
    gridWidth = 960 / gridSize; 
    for (var i = 0; i < gridSize; i++)  {
        var gridRow = document.createElement('div');   
        gridRow.className = 'grid-row'; 
        gridContainer.appendChild(gridRow);
        for (var j = 0; j < gridSize; j++){
            var gridSquare = document.createElement('div');   
            gridSquare.className = 'grid-square';
            gridSquare.style.height = `${gridHeight}px`
            gridSquare.style.width = `${gridWidth}px`
            gridRow.appendChild(gridSquare).cloneNode(true); 
        }
    }
};

var generateButton = document.getElementById("generate-button");

generateButton.onclick = generateGrid;


