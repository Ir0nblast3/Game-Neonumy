import { ROWS, board } from "./board.js";
import { changeSpeed, speed } from "./main.js";

export let gameOver = false;

export let score = 0;

const scoreElement = document.getElementById("score");

export function addScore(points) {
    score += points;
    scoreElement.textContent = score;

    if (score % 1000 === 0) {

        const newSpeed = Math.max(150, speed - 50);

        changeSpeed(newSpeed);

    }
}

export function setGameOver(value) {
    gameOver = value;
}

export function showGameOver(){
    const screen = document.getElementById("gameOverScreen");
    const finalScore = document.getElementById("finalScore");

    finalScore.textContent = score;

    screen.classList.remove("hidden");
}

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
            if (newY >= 0 && board[newY][newX] !== 0) {
                return true;
            }

        }
    }


    return false;
}

const highScoreList = document.getElementById("highScoreList");

let highScores = [];

loadHighScores();

export function saveHighScore(score) {

    fetch("http://127.0.0.1:8000/add-score/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            player: document.getElementById("playerName").value,
            score: score
        })
    })
    .then(res => res.json())
    .then(() => {
        loadHighScores();
    });
}

export function loadHighScores() {

    fetch("http://127.0.0.1:8000/top10/")
        .then(res => res.json())
        .then(data => {

            highScores = data;

            displayHighScores();
        });
}

export function displayHighScores() {

    highScoreList.innerHTML = "";

    highScores.forEach(item => {

        const li = document.createElement("li");
        li.textContent = `${item.player} - ${item.score}`;

        highScoreList.appendChild(li);
    });

}