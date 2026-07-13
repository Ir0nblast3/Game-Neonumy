import { addScore } from "./game.js";

export const canvas = document.getElementById("myCanvas");
export const ctx = canvas.getContext("2d");

export const ROWS = 20;
export const COLS = 10;
export const BLOCK_SIZE = 30;
export let board = [];

for (let row = 0; row < ROWS; row++) {
  board[row] = [];

  for (let col = 0; col < COLS; col++) {
    board[row][col] = 0;
  }
}

export function drawBoard() {
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {

      ctx.strokeStyle = "#ffffff";

      ctx.strokeRect(
        col * BLOCK_SIZE,
        row * BLOCK_SIZE,
        BLOCK_SIZE,
        BLOCK_SIZE
      );

      if (board[row][col] !== 0) {

        ctx.fillStyle = board[row][col];

        ctx.fillRect(
          col * BLOCK_SIZE,
          row * BLOCK_SIZE,
          BLOCK_SIZE,
          BLOCK_SIZE
        );
      }
    }
  }
}

drawBoard();

export function mergePiece(piece) {

  for (let row = 0; row < piece.shape.length; row++) {

    for (let col = 0; col < piece.shape[row].length; col++) {

      if (piece.shape[row][col] === 1) {

        const boardY = piece.y + row;
        const boardX = piece.x + col;

        if (boardY >= 0) {
          board[boardY][boardX] = piece.color;
        }
      }
    }
  }
}

export function clearLines() {

  for (let row = ROWS - 1; row >= 0; row--) {

    let full = true;

    for (let col = 0; col < COLS; col++) {

      if (board[row][col] === 0) {

        full = false;
        break;
      }
    }

    if (full) {

      board.splice(row, 1);

      board.unshift(
        new Array(COLS).fill(0)
      );
      
      addScore(100);

      row++;
    }
  }
}