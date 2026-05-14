const words = [

    "A",
    "a",
    "B",
    "b",
    "C",
    "c",
    "D",
    "d",
    "E",
    "e",
    "F",
    "f",
];


const wordText = document.getElementById("word");
const scoreText = document.getElementById("score");
const box = document.getElementById("box");
const gameOverScreen = document.getElementById("gameOver");
const gameFrame = document.getElementById("game");

let boxY = 40;
let currentWord = "";

function randomWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    wordText.innerHTML = currentWord;

}
randomWord();

function correctAnswer() {


    randomWord();
}



function wrongAnswer() {
    boxY += 40;
    box.style.top = boxY + "px";
    box.classList.add("shake");

    setTimeout(() => {

        box.classList.remove("shake");

    }, 300);
    randomWord();


    if (boxY >= window.innerHeight - 110) {
        gameOver();
    }

}



function gameOver(){

    box.src = "./imgs/broken-box.png";
    gameFrame.style.background = "#ff6f4e";
    document.getElementById("correctBtn").disabled = true;
    document.getElementById("wrongBtn").disabled = true;


}

function restartGame() {
    boxY = 40;
    scoreText.innerHTML = "Score: 0";
    box.style.top = "40px";
    box.src = "box.png";
    gameOverScreen.style.display = "none";
    randomWord();

}