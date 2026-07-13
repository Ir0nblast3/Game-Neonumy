import { PIECES, COLORS, drawNextPiece } from './pieces.js';


export class AtualPiece {

    constructor(type) {
        
        this.type = type;
        this.color = COLORS[type];
        this.shape = PIECES[type];
        
        this.x = 4;
        this.y = -2;
    }
}

const types = ["O", "T", "L", "J", "S", "Z", "I"];
let bag = [];

export let piece = null;
export let nextPiece = null;

function refillBag() {

    bag = [...types];

    for (let i = bag.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [bag[i], bag[j]] = [bag[j], bag[i]];
    }
}

export function initPieces() {
    
    refillBag();

    nextPiece = createRandomPiece();
    piece = createRandomPiece();

    drawNextPiece(nextPiece);
}

export function createRandomPiece() {
    if (bag.length === 0) {
        refillBag();
    }

    const type = bag.pop();

    return new AtualPiece(type);
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