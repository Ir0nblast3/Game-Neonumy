import { ctx, canvas, drawBoard, mergePiece, clearLines } from './board.js';
import { collision, gameOver, setGameOver, showGameOver, saveHighScore } from "./game.js";
import { drawPiece } from './pieces.js';
import { piece, nextPiece, newPiece, initPieces } from "./piece.js";
import './player.js';

export let speed = 500;

export function draw() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    drawBoard();
    drawPiece(piece);
}

export function update() {

    if (gameOver) return;

    piece.y++;

    if (collision(piece)) {

        piece.y--;

        // verifica se ficou acima do topo
        for (let row = 0; row < piece.shape.length; row++) {
            for (let col = 0; col < piece.shape[row].length; col++) {

                if (
                    piece.shape[row][col] === 1 &&
                    piece.y + row < 0
                ) {
                    saveHighScore();

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

document.getElementById("restartBtn").addEventListener("click", () => {
    location.reload();
});