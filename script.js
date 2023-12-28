const canvas = document.querySelector('#drawingCanvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const mouse = document.createElement('img');

mouse.src = 'images/cursor/draw.png';

const context = canvas.getContext('2d');

var mouseClicked = false, mouseReleased = true;


canvas.addEventListener("click", onMouseClick, false);
canvas.addEventListener("mousemove", onMouseMove, false);

function onMouseClick(e) {
    mouseClicked = !mouseClicked;
}

function onMouseMove(e) {
    if (mouseClicked) {
      const left = event.clientX;
      const top = event.clientY
      context.drawImage(mouse, left, top)
    }
    }
