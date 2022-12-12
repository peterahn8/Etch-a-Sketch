const gridContainer = document.querySelector("#gridContainer");

function griddify(rows, columns) {

    for (let x = 1; x < rows+1; x++) {
        const newRow = document.createElement("div");
        gridContainer.appendChild(newRow);
        newRow.setAttribute("id", `column${x}`);

        for (let y = 1;  y < columns+1; y++) {
            const newGridSquare = document.createElement("div");
            newGridSquare.setAttribute("id", `column${x}-row${y}`);
            newGridSquare.classList.add("gridSquare");
            newRow.appendChild(newGridSquare);
        }
    }
}

griddify(16,16)

const gridSquares = document.querySelectorAll(".gridSquare")

gridSquares.forEach(square => {
    square.addEventListener("mouseenter", function handleClick(event) {
        console.log('mouseover', event);
        square.setAttribute("style", "background-color: black;");
    });
});