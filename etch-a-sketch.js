/*Default values*/
const defaultGridSize = 16
const defaultColor = 'rgb(0,0,0)'
const defaultMode = 'pencil'

function random (number) {
    return Math.floor(Math.random()*(number+1))
}

var rainbowColor = `rgb(${random(255)},${random(255)},${random(255)})`

/*Set grid size */
function setGridSize() {
    let gridSize = document.getElementById('size-input').value;
    while (gridSize > 100 || gridSize < 1) {
        alert("Invalid grid size, reverting to default 16x16")
        gridSize = defaultGridSize
    }
    return gridSize
}

var currentGridSize = setGridSize();

function setModePencil() {
    var currentMode = defaultMode;
}

function changeColor(e) {
    e.target.style.backgroundColor = defaultColor;
}

/*Generates the grid, by row and then insert the squares in each row*/

function generateGrid(gridSize) {
    const gridContainer = document.getElementById("grid-container");
    gridContainer.innerHTML = '';
    gridSize = setGridSize();
    gridHeight = 960 / gridSize;
    gridWidth = 960 / gridSize;
    gridContainer.style.border = "solid #EA4C89 4px";
    gridContainer.style.borderRadius = "8px"; 
    gridContainer.style.backgroundColor = "#ffffff";
    for (var i = 0; i < gridSize * gridSize ; i++)  {
        var gridSquare = document.createElement('div');   
        gridSquare.className = 'grid-square';
        gridSquare.style.height = `${gridHeight}px`;
        gridSquare.style.width = `${gridWidth}px`;
        gridSquare.addEventListener('mouseover', changeColor);
        gridSquare.addEventListener('mousedown', changeColor);
        gridContainer.appendChild(gridSquare).cloneNode(true); 
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

/* function erase() {
    const sketchGrid = document.querySelectorAll('.grid-square')
    for (let i = 0; i < sketchGrid.length; i++) {
        sketchGrid[i].addEventListener("mouseover", function() {
                sketchGrid[i].classList.remove("colored-class");
            });
    };
} */

function clearGrid(){
    const gridContainer = document.getElementById("grid-container");
    gridContainer.innerHTML = '';
    generateGrid(currentGridSize);
}

/* Generate grid using button */
var generateButton = document.getElementById("generate-button");
generateButton.onclick = generateGrid;

var pencilButton = document.getElementById("pencil-button")
pencilButton.onclick = setModePencil();

/* var eraserButton = document.getElementById("eraser-button")
sketchButton.onclick = erase;
 */
var clearButton = document.getElementById("clear-button")
clearButton.onclick = clearGrid;