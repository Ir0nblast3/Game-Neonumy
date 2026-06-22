const canvas = document.getElementById("myCanvas");
export const ctx = canvas.getContext("2d");

      const ROWS = 20;
      const COLS = 10;
      export const BLOCK_SIZE = 30;

      let board = [];

      for (let row = 0; row < ROWS; row++) {
        board[row] = [];

        for (let col = 0; col < COLS; col++) {
          board[row][col] = 0;
        }
      }

      function drawBoard() {
        for (let row = 0; row < ROWS; row++) {
          for (let col = 0; col < COLS; col++) {

            ctx.strokeStyle = "#555";

            ctx.strokeRect(
              col * BLOCK_SIZE,
              row * BLOCK_SIZE,
              BLOCK_SIZE,
              BLOCK_SIZE
            );
          }
        }
      }

      drawBoard();