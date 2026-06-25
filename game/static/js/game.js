import { ROWS } from "./board.js";


export function collision(piece) {

    for (let row = 0; row < piece.shape.length; row++) {

        for (let col = 0; col < piece.shape[row].length; col++) {


            if (piece.shape[row][col] === 0) {
                continue;
            }


            const newY = piece.y + row;


            if (newY >= ROWS) {
                return true;
            }

        }
    }


    return false;
}