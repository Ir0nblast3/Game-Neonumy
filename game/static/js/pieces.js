import { ctx, BLOCK_SIZE } from "./board.js";

const nextCanvas = document.getElementById("pieceCanvas");
const nextCtx = nextCanvas.getContext("2d");

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

export const COLORS = {
    O: "green",
    T: "cyan",
    L: "yellow",
    J: "blue",
    S: "red",
    Z: "orange",
    I: "purple"
};

export function drawPiece(piece) {

    for (let row = 0; row < piece.shape.length; row++) {

        for (let col = 0; col < piece.shape[row].length; col++) {

            if (piece.shape[row][col] === 1) {

               ctx.fillStyle = COLORS[piece.type];

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

export function drawNextPiece(nextPiece) {

   nextCtx.clearRect(0, 0, 120, 120);

   const shape = nextPiece.shape;

   // centrado (opcional mas recomendado)
   const offsetX = 2;
   const offsetY = 1;

   for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[row].length; col++) {

         if (shape[row][col] === 1) {

            nextCtx.fillStyle = COLORS[nextPiece.type];

            nextCtx.fillRect(
               (col + offsetX) * 20,
               (row + offsetY) * 20,
               20,
               20
            );
         }
      }
   }
}