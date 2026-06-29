import { ctx, canvas, drawBoard, mergePiece, clearLines } from './board.js';
import { collision } from "./game.js";
import { drawPiece } from './pieces.js';
import { piece, newPiece } from "./piece.js";
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
    piece.y++;

    if (collision(piece)) {

        piece.y--;

        mergePiece(piece);
        clearLines();
        newPiece();
    }

    draw();
}

export function setSpeed(value){
    speed = value;
}

draw();

setInterval(update, speed);