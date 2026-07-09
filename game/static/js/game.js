import { ROWS, board } from "./board.js";
import { changeSpeed, speed } from "./main.js";

const pauseMenu = document.getElementById("pauseMenu");
export let pause = false

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

            if (newX < 0 || newX >= 10) {
                return true;
            }

            if (newY >= ROWS) {
                return true;
            }

            if (newY >= 0 && board[newY][newX] !== 0) {
                return true;
            }

        }
    }


    return false;
}

const highScoreList = document.getElementById("highScoreList");

loadHighScores();

export async function saveHighScore(score) {

    await fetch("http://127.0.0.1:8000/add-score/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            player: document.getElementById("playerName").value,
            score: score
        })
    })
  
    await loadHighScores();
}

export async function loadHighScores() {

    const response = await fetch("http://127.0.0.1:8000/top10/");
    const highScores = await response.json();

    displayHighScores(highScores);
}

export function displayHighScores(highScores) {

    highScoreList.innerHTML = "";

    highScores.forEach((item, index) => {

        const li = document.createElement("li");

        li.textContent = `${item.player} - ${item.score}`;

        if (index === 0) {
            li.classList.add("first");
        } 
        else if (index === 1) {
            li.classList.add("second");
        } 
        else if (index === 2) {
            li.classList.add("third");
        }

        highScoreList.appendChild(li);
    });
}

export function togglePause(){
    pause = !pause;

    if (pause){
        pauseMenu.classList.remove("hidden");
    } else{
        pauseMenu.classList.add("hidden");
    }
}