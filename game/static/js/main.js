import { ctx, canvas, drawBoard, mergePiece, clearLines } from './board.js';
import { collision, gameOver, setGameOver, showGameOver, saveHighScore, score, togglePause, pause  } from "./game.js";
import { drawPiece } from './pieces.js';
import { piece, nextPiece, newPiece, initPieces } from "./piece.js";
import './player.js';

export let speed = 500;

const resumeBtn = document.getElementById("resumeBtn");
const form = document.getElementById("scoreForm");

export function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 0.1;

    drawBoard();
    drawPiece(piece);
}

export function update() {

    if (gameOver || pause) return;

    piece.y++;

    if (collision(piece)) {

        piece.y--;

        for (let row = 0; row < piece.shape.length; row++) {
            for (let col = 0; col < piece.shape[row].length; col++) {

                if (
                    piece.shape[row][col] === 1 &&
                    piece.y + row < 0
                ) {
                    setGameOver(true);
                    showGameOver();
                    return;
                }
            }
        }
        
        mergePiece(piece);
        clearLines();
        newPiece();
    }

    draw();
}

initPieces();
draw();

let gameLoop = setInterval(update, speed);

export function changeSpeed(newSpeed) {

    speed = newSpeed;

    clearInterval(gameLoop);

    gameLoop = setInterval(update, speed);
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    saveHighScore(score);

    document.getElementById("submitBtn").classList.add("hidden");
    document.getElementById("restartBtn").classList.remove("hidden");
    document.getElementById("playerName").classList.add("hidden");
});

document.getElementById("resumeBtn").addEventListener("click", () =>{
    togglePause();
})

document.getElementById("restartBtn").addEventListener("click", () => {
    location.reload();
});

document.getElementById("playAgainBtn").addEventListener("click", () => {
    location.reload();
});