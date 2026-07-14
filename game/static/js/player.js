import { piece, rotatePiece } from "./piece.js";
import { draw, update } from "./main.js";
import { collision, gameOver, togglePause, pause } from "./game.js";


document.addEventListener("keydown", (event) => {

    if (gameOver || pause) return;

    switch(event.key) {

        case "ArrowDown":
        case "s":
        case "S":

            update();
            break;

        case "ArrowUp":
        case "w":
        case "W":

            rotatePiece(piece);

            const overflow = piece.x + piece.shape[0].length - 10;

            if (overflow > 0) {
                piece.x -= overflow;
            }
 
            break;

        case "ArrowLeft":
        case "a":
        case "A":

            piece.x--;

            if (collision(piece)) {

                piece.x++;
            }

            break;

        case "ArrowRight":
        case "d":
        case "D":

            piece.x++;

            if (collision(piece)) {

                piece.x--;
            }

            break;
            
        case "p":
        case "P":

            togglePause();

            break
    }

    draw();
});