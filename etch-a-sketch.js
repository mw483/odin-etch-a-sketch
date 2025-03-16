var box = document.createElement('div');   
box.className = 'box'; 
const fragment = new DocumentFragment();

for (var i = 0; i < 4; i++) {
    fragment.appendChild(box.cloneNode(true));
}

for (var j = 0; j < 4; j++)  {
    var boxRow = document.createElement('div');   
    boxRow.className = 'box-row'; 
    document.getElementById('grid-container').appendChild(boxRow);
    boxRow.appendChild(fragment);
}

