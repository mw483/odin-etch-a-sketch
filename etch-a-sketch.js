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
    gridContainer.style.border = "solid #EA4C89 4px";
    gridContainer.style.borderRadius = "8px"; 
    gridContainer.style.backgroundColor = "#ffffff";
    for (var i = 0; i < gridSize; i++)  {
        var gridRow = document.createElement('div');   
        gridRow.className = 'grid-row'; 
        gridContainer.appendChild(gridRow);
        for (var j = 0; j < gridSize; j++){
            var gridSquare = document.createElement('div');   
            gridSquare.className = 'grid-square';
            gridSquare.tabIndex = 1;
            gridSquare.style.height = `${gridHeight}px`
            gridSquare.style.width = `${gridWidth}px`
            gridRow.appendChild(gridSquare).cloneNode(true); 
        }
    }
};

function getGridWidth () {
    var grid = document.getElementsByClassName("grid-square")[0];
    var sizeInfo = grid.getBoundingClientRect();
    var width = sizeInfo.width;
    return width
}

function getGridHeight () {
    var grid = document.getElementsByClassName("grid-square")[0];
    var sizeInfo = grid.getBoundingClientRect();
    var height = sizeInfo.height;
    return height
}

function sketch() {
    const sketchGrid = document.querySelectorAll('.grid-square')
    for (let i = 0; i < sketchGrid.length; i++) {
        sketchGrid[i].addEventListener("mouseover", function() {
                sketchGrid[i].classList.add("colored-class");
            });
    }
}

function clearGrid(){
    const sketchGrid = document.querySelectorAll('.grid-square');
    for (let i = 0; i < sketchGrid.length; i++) {
        sketchGrid[i].classList.remove("colored-class");
    }
}

/* Generate grid using button */
var generateButton = document.getElementById("generate-button");
generateButton.onclick = generateGrid;

var sketchButton = document.getElementById("sketch-button")
sketchButton.onclick = sketch;

var clearButton = document.getElementById("clear-button")
clearButton.onclick = clearGrid;
