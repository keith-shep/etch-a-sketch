const container = document.querySelector('.container');



for (let i = 0; i < 16; i++) {
    const square = document.createElement('div');
    square.textContent = 'hello';
    container.appendChild(square);        
}



