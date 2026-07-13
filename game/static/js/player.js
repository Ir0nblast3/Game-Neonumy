import { piece, rotatePiece } from "./piece.js";
import { draw, update } from "./main.js";
import { collision, gameOver, togglePause, pause } from "./game.js";


document.addEventListener("keydown", (event) => {

    if (gameOver || pause) return;

    switch(event.key) {

        case "ArrowDown":

            update();
            break;

        case "ArrowUp":

            rotatePiece(piece);

            const overflow = piece.x + piece.shape[0].length - 10;

            if (overflow > 0) {
                piece.x -= overflow;
            }
 
            break;

        case "ArrowLeft":

            piece.x--;

            if (collision(piece)) {

                piece.x++;
            }

            break;

        case "ArrowRight":

            piece.x++;

            if (collision(piece)) {

                piece.x--;
            }

            break;
        case "p":

            togglePause();

            break
    }

    draw();
});