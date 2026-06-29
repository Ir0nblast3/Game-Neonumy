import { PIECES } from './pieces.js';

export class AtualPiece {

    constructor(type) {
        this.shape = PIECES[type];

        this.x = 4;
        this.y = 0;
    }

}

const types = ["O", "T", "L", "J", "S", "Z", "I"];

export let piece = new AtualPiece("T");

export function newPiece() {
    const randomType = types[Math.floor(Math.random() * types.length)];
    piece = new AtualPiece(randomType);
}

export function rotatePiece(piece) {

    const oldShape = piece.shape;

    const newShape = [];

    for(let col = 0; col < oldShape[0].length; col++){

        newShape[col] = [];

        for(let row = oldShape.length - 1; row >= 0; row--){

            newShape[col].push(
                oldShape[row][col]
            );

        }
    }

    piece.shape = newShape;
}