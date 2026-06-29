import { ROWS, board } from "./board.js";


export function collision(piece) {

    for (let row = 0; row < piece.shape.length; row++) {

        for (let col = 0; col < piece.shape[row].length; col++) {


            if (piece.shape[row][col] === 0) {
                continue;
            }


            const newX = piece.x + col;
            const newY = piece.y + row;

            // colisão com paredes laterais
            if (newX < 0 || newX >= 10) {
                return true;
            }

            // colisão com o chão
            if (newY >= ROWS) {
                return true;
            }

            // colisão com outras peças
            if (board[newY][newX] === 1) {
                return true;
            }

        }
    }


    return false;
}