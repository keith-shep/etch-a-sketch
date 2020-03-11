const body = document.querySelector('body');
const container = document.querySelector('.container');
const button = document.createElement('button');
button.textContent = 'reset'
body.insertBefore(button, container)

// Create grid

gridSize = prompt('Enter grid size: ','16');

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

const squares = document.querySelectorAll('.square');


squares.forEach(element =>
    element.addEventListener('mouseover', () => element.style.backgroundColor = "black")
);



button.addEventListener('click', resetColor);


function resetColor() {
    squares.forEach(element => element.style.backgroundColor = 'gray');
}
