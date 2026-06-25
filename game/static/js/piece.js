import { PIECES } from './pieces.js';

export class AtualPiece {

    constructor(type) {
        this.shape = PIECES[type];

        this.x = 3;
        this.y = 0;
    }

}

export const piece = new AtualPiece("T");