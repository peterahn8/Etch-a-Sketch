const gridContainer = document.querySelector("#gridContainer");
const resetButton = document.querySelector("#resetButton");
const resizeButton = document.querySelector("#resizeButton");
resetButton.addEventListener("click", () => reset());
resizeButton.addEventListener("click", () => resize());

function griddify(rows, columns) {
    for (let x = 1; x < rows+1; x++) {
        const newRow = document.createElement("div");
        gridContainer.appendChild(newRow);
        newRow.setAttribute("id", "column");

        for (let y = 1;  y < columns+1; y++) {
            const newGridSquare = document.createElement("div");
            newGridSquare.setAttribute("id", `column${x}-row${y}`);
            newGridSquare.classList.add("gridSquare");
            newRow.appendChild(newGridSquare);
        }
    }

    const gridSquares = document.querySelectorAll(".gridSquare")

    gridSquares.forEach(square => {
        square.addEventListener("mouseenter", function handleMouseOver(event) {
            square.classList.add("gridSquareBlack");
        });
    });
}

function reset() {
    const squareSelector = document.querySelectorAll(".gridSquare");
    
    squareSelector.forEach(square => {
        square.classList.remove("gridSquareBlack");
    });
}

function resize() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild)
    }

    let gridX = parseInt(prompt("How many squares wide?"));
    let gridY = parseInt(prompt("How many squares tall?"));
    
    if ((gridX >= 100) || (gridY >= 100)) {
        gridX = parseInt(prompt("Please use values under 100 :("));
        gridY = parseInt(prompt("Please use values under 100 :("));
        griddify(gridX, gridY)
    } else {
        griddify(gridX, gridY);
    }
}

// Set initial 16x16 grid
griddify(16,16)