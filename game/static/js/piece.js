import { PIECES, COLORS, drawNextPiece } from './pieces.js';


export class AtualPiece {
    
    constructor(type) {
        
        this.type = type;
        this.color = COLORS[type];
        this.shape = PIECES[type];
        
        this.x = 4;
        this.y = -1;
    }
    
}

const types = ["O", "T", "L", "J", "S", "Z", "I"];

export let piece = null;
export let nextPiece = null;

export function initPieces() {
    nextPiece = createRandomPiece();
    piece = createRandomPiece();

    drawNextPiece(nextPiece);
}

export function createRandomPiece() {
    const randomType = types[Math.floor(Math.random() * types.length)];
    return new AtualPiece(randomType);
}

export function newPiece() {
    piece = nextPiece;
    nextPiece = createRandomPiece();

    drawNextPiece(nextPiece);
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