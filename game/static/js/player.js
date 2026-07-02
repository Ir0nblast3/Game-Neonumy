import { piece, rotatePiece } from "./piece.js";
import { draw, update } from "./main.js";
import { collision, gameOver } from "./game.js";


document.addEventListener("keydown", (event) => {

    if (gameOver) return;

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

    }


    draw();

});