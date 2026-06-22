import { ctx, BLOCK_SIZE } from "./board.js";

export const PIECES = {

    O:[
       [1,1],
       [1,1]
    ],

    T:[
       [0,1,0],
       [1,1,1]
    ],

    L:[
       [1,0],
       [1,0],
       [1,1]
    ],

    J:[
       [0,1],
       [0,1],
       [1,1]
    ],

    S:[
       [0,1,1],
       [1,1,0]
    ],

    Z:[
       [1,1,0],
       [0,1,1]
    ],

    I:[
       [1],
       [1],
       [1],
       [1]
    ],
}

export function drawPiece(piece) {

    for (let row = 0; row < piece.shape.length; row++) {

        for (let col = 0; col < piece.shape[row].length; col++) {

            if (piece.shape[row][col] === 1) {

                ctx.fillStyle = "purple";

                ctx.fillRect(
                    (piece.x + col) * BLOCK_SIZE,
                    (piece.y + row) * BLOCK_SIZE,
                    BLOCK_SIZE,
                    BLOCK_SIZE
                );

            }
        }
    }
}