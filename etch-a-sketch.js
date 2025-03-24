/*Default values*/
const defaultGridSize = 16;
const defaultColor = 'rgb(0,0,0)';
const defaultMode = 'pencil';
var currentColor = defaultColor;
var currentMode = 'pencil';
var currentGridSize = defaultGridSize;

let isMouseDown = false;
document.getElementById('grid-container').onmousedown = () => (isMouseDown = true);
document.getElementById('grid-container').onmouseup = () => (isMouseDown = false);


function random (number) {
    return Math.floor(Math.random()*(number+1));
}

function randomColor () {
    var rainbowColor = `rgb(${random(255)},${random(255)},${random(255)})`;
    return rainbowColor
}

function nineColor () {
    const nineColor = ["#49c0ec",
"#a3cc54",
"#e67ea3",
"#8c79b4",
"#ffc56e",
"#6dcdb8",
"#f7f7f7",
"#e62722",
"#2253a3"]
    return nineColor[Math.floor(Math.random() * nineColor.length)]
}


/*Set grid size */
function setGridSize() {
    let gridSize = document.getElementById('size-input').value;
    while (gridSize > 100 || gridSize < 1) {
        alert("Invalid grid size, reverting to default 16x16")
        gridSize = defaultGridSize
    };
    currentGridSize = gridSize;
    return gridSize
}

/* NOT WORKING YET. EASTER EGG IF current grid size = 9
/* var isTwiceButton 
 if (currentGridSize === '9') {
    const buttonContainer = document.getElementById('button-container')
    var twiceButton = document.createElement('button');
    twiceButton.type = 'button';
    twiceButton.className = 'button-1';
    twiceButton.id = 'twice-button';
    twiceButton.textContent = 'TWICE!';
    buttonContainer.appendChild(twiceButton);
    isTwiceButton = true;
}
/* else if (currentGridSize !== '9' && isTwiceButton === true) {
    buttonContainer.removeChild(twiceButton);
    isTwiceButton = false;
} */

function changeColor(e) {
    if (e.type === 'mouseover' && !isMouseDown) return
    else if (currentMode === 'pencil')  {
        e.target.style.backgroundColor = defaultColor;
    }
    else if (currentMode === 'eraser')  {
        e.target.style.backgroundColor = '#FFFFFF';
    }
    else if (currentMode === 'rainbow') {
        e.target.style.backgroundColor = randomColor();
    }
    else if (currentMode === 'twice') {
        e.target.style.backgroundColor = nineColor();
    }
}

/*Generates the grid*/

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

function clearGrid(){
    const gridContainer = document.getElementById("grid-container");
    gridContainer.innerHTML = '';
    generateGrid(currentGridSize);
}

/* Generate grid using button */
var generateButton = document.getElementById("generate-button");
generateButton.onclick = generateGrid;

var clearButton = document.getElementById("clear-button")
clearButton.onclick = clearGrid;

var pencilButton = document.getElementById("pencil-button")
pencilButton.onclick = () => {
    currentMode = 'pencil'
};

var rainbowButton = document.getElementById("rainbow-button")
rainbowButton.onclick = () => {
    currentMode = 'rainbow'
};

var twiceButton = document.getElementById("twice-button")
twiceButton.onclick = () => {
    currentMode = 'twice'
};

var eraserButton = document.getElementById("eraser-button")
eraserButton.onclick = () => {
    currentMode = 'eraser'
};
