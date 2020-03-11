const body = document.querySelector('body');
const container = document.querySelector('.container');
const button = document.createElement('button');
button.textContent = 'New Grid'
button.addEventListener('click', reset);
body.insertBefore(button, container)


function makeGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.textContent= '';
        container.appendChild(row); 
        
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.textContent = '';
            row.appendChild(square);        
        }
    }
    
}

function squareSelector() {
    squares = document.querySelectorAll(".square");
}

let removeGrid = () => (container.innerHTML = '');


function reset() {
    gridSize = prompt('Enter grid size: ', '16');
    removeGrid();
    squareSelector();
    makeGrid(gridSize);
    squareSelector();
    squares.forEach(element =>
        element.addEventListener('mouseover', () => element.style.backgroundColor = "black")
    );
}

function defaultGrid() {
    makeGrid(16); 
    squareSelector();   
    squares.forEach(element =>
        element.addEventListener('mouseover', () => element.style.backgroundColor = "black")
    );
}

defaultGrid();


