import { ctx, canvas, drawBoard } from './board.js';
import { collision } from "./game.js";
import { drawPiece } from './pieces.js';
import { piece } from './piece.js';
import './player.js';


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

function update() {
    if (!collision(piece)) {
        piece.y++;
    }
    draw();
}

draw();

setInterval(update, 500);