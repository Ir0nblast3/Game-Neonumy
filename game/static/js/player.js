import { piece } from "./piece.js";
import { draw } from "./main.js";


document.addEventListener("keydown", (event) => {


    switch(event.key) {


        case "ArrowLeft":

            if (piece.x > 0) {
                piece.x--;
            }

            break;


        case "ArrowRight":

            if (piece.x + piece.shape[0].length < 10) {
                piece.x++;
            }

            break;

    }


    draw();

});