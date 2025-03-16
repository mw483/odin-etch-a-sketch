/*Generates the grid, by row and then insert the squares in each row*/
function generateGrid() {
    for (var i = 0; i < 4; i++)  {
        var gridRow = document.createElement('div');   
        gridRow.className = 'grid-row'; 
        document.getElementById('grid-container').appendChild(gridRow);
        for (var j = 0; j < 4; j++){
            var gridSquare = document.createElement('div');   
            gridSquare.className = 'grid-square';
            gridRow.appendChild(gridSquare).cloneNode(true); 
        }
    }
};

var generateButton = document.getElementById("generate-button");

generateButton.onclick = generateGrid;


