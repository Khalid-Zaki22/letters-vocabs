
// نص دائرة مفتوحة

function drawCapitalC() {
    cnx.clearRect(0, 0, canvas.width, canvas.height);


    cnx.beginPath();

    // ثابت (نص دايرة مفتوح لليمين)
    let startAngle = Math.PI * 0.5;
    let endAngle = Math.PI * 0.5 + progress;

    cnx.arc(
        220, 200, 80,
        startAngle,
        endAngle,
        false
    );

    cnx.stroke();

    if (progress < maxProgress) {
        progress += 0.03;
        animId = requestAnimationFrame(drawCapitalC);
    }
}


function drawSmallC() {
    cnx.clearRect(0, 0, canvas.width, canvas.height);



    cnx.beginPath();

    // ثابت (نص دايرة مفتوح لليمين)
    let startAngle = Math.PI * 0.5;
    let endAngle = Math.PI * 0.5 + progress;

    cnx.arc(
        200, 240, 40,
        startAngle,
        endAngle,
        false
    );

    cnx.stroke();

    if (progress < maxProgress) {
        progress += 0.03;
        animId = requestAnimationFrame(drawSmallC);
    }
}


