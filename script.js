const gridContainer = document.querySelector("#gridContainer");


function addGridSquare() {
    const newGridSquare = document.createElement("div");
    const gridSquareContent = document.createTextNode("test text");
    newGridSquare.classList.add("gridSquare");
    newGridSquare.appendChild(gridSquareContent);
    gridContainer.appendChild(newGridSquare);
}

function griddify() {
    for (let i = 0; i < 16*16; i++) {
        addGridSquare();
    };
}

griddify();