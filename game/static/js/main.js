import './board.js';
import './game.js';
import { AtualPiece } from './game.js';
import { drawPiece, PIECES } from './pieces.js';

const piece = new AtualPiece("T");

drawPiece(piece);

console.log("main.js carregado");