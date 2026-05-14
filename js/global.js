let vProgress = 0;   // العمودي
let topProgress = 0;
let midProgress = 0;
let botProgress = 0;
let leftProgress = 0;
let rightProgress = 0;
let arcProgress = 0;
let maxV = 200;
let topArcProgress = 0;
let botArcProgress = 0;
let verticalProgress = 0;
let dotProgress = 0;
let diagLeftProgress = 0;
let diagRightProgress = 0;
const maxTop = 100;
const maxMid = 100;
const maxArcTop = Math.PI; // قوس صغير
let arcTopProgress = 0;
let horizontalProgress = 0;
let leftLine = 0;
let arc1 = 0;
let midLine1 = 0;
let arc2 = 0;
let rightLine = 0;
let upperDiagProgress = 0;
let lowerDiagProgress = 0;

let maxArc = 2 * Math.PI; // دائرة كاملة
let maxLine = 60;


let progress = 0;
let maxProgress = Math.PI;

let canvas = document.querySelector("canvas");
let cnx = canvas.getContext("2d");
cnx.lineWidth = 10;
cnx.strokeStyle = "white";
cnx.lineCap = "round";
cnx.fillStyle = "white";

let letters = [
    "A", "a", "B", "b", "C", "c", "D",
    "d", "E", "e", "F", "f", "G", "g", "H", "h",
    "I", "i", "J", "j", "K", "k", "L", "l", "M","m"
];
let index = 0;

let animId = null;

let step = 0;

function stopAnimation() {
    if (animId) {
        cancelAnimationFrame(animId);
    }
}

let loadBtn = document.querySelector(".reload");

function showLetter() {

    stopAnimation();
    leftLine = 0;
    arc1 = 0;
    midLine1 = 0;
    arc2 = 0;
    rightLine = 0;
    diagLeftProgress = 0;
    diagRightProgress = 0;
    upperDiagProgress = 0;
    lowerDiagProgress = 0;
    verticalProgress = 0;
    dotProgress = 0;
    step = 0;
    vProgress = 0;   // العمودي
    topProgress = 0;
    midProgress = 0;
    botProgress = 0;
    leftProgress = 0;
    rightProgress = 0;
    arcProgress = 0;
    maxV = 200;
    topArcProgress = 0;
    botArcProgress = 0;
    arcTopProgress = 0;
    progress = 0;
    maxProgress = Math.PI;
    horizontalProgress = 0;

    maxArc = 2 * Math.PI; // دائرة كاملة
    maxLine = 60;
    cnx.clearRect(0, 0, canvas.width, canvas.height);
    let currentLetter = letters[index];
    if (currentLetter == "A") {
        drawCapitalA();
    }
    else if (currentLetter == "a") {
        drawSmallA();
    }
    else if (currentLetter == "B") {
        drawCapitalB();
    }
    else if (currentLetter == "b") {
        drawSmallB();
    }
    else if (currentLetter == "C") {
        drawCapitalC();
    }
    else if (currentLetter == "c") {
        drawSmallC();
    }
    else if (currentLetter == "D") {
        drawCapitalD();
    }
    else if (currentLetter == "d") {
        drawSmallD();
    }
    else if (currentLetter == "E") {
        drawCapitalE();
    }
    else if (currentLetter == "e") {
        drawSmallE();
    }
    else if (currentLetter == "F") {
        drawCapitalF();
    }
    else if (currentLetter == "f") {
        drawSmallF();
    }
    else if (currentLetter == "G") {
        drawCapitalG();
    }
    else if (currentLetter == "g") {
        drawSmallG();
    }
    else if (currentLetter == "H") {
        drawCapitalH();
    }
    else if (currentLetter == "h") {
        drawSmallH();
    }
    else if (currentLetter == "I") {
        drawCapitalI();
    }
    else if (currentLetter == "i") {
        drawSmallI();
    }

    else if (currentLetter == "J") {
        drawCapitalJ()
    }
    else if (currentLetter == "j") {
        drawSmallJ()
    }

    else if (currentLetter == "K") {
        drawCapitalK()
    }
    else if (currentLetter == "k") {
        drawSmallK()
    }

    else if (currentLetter == "L") {
        drawCapitalL()
    }
    else if (currentLetter == "l") {
        drawSmallL()
    }
    else if (currentLetter == "M") {
        drawCapitalM()
    }

        else if (currentLetter == "m") {
        drawSmallM()
    }
}



document.addEventListener("keydown", function (event) {

    if (event.key === "0") {
        vProgress = 0;
        arcProgress = 0;
        topProgress = 0;
        midProgress = 0;
        showLetter()
    }

    if (event.key === "1") {
        index--;
        showLetter();
    }

    if (event.key === "2") {
        index++;
        showLetter();
    }

});

