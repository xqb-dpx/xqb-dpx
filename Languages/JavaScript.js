// JavaScript
/* js */

const button = document.getElementById('button');

button.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    const colors = ['#f39c12', '#1abc9c', '#9b59b6'];
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}
