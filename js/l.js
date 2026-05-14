

function drawCapitalL() {

    cnx.clearRect(0, 0, canvas.width, canvas.height);

    cnx.lineWidth = 10;
    cnx.strokeStyle = "white";
    cnx.lineCap = "round";

    // ---------- الخط الرأسي ----------
    if (verticalProgress > 0) {
        cnx.beginPath();
        cnx.moveTo(200, 100);
        cnx.lineTo(200, 100 + verticalProgress);
        cnx.stroke();
    }

    if (verticalProgress < 200) {
        verticalProgress += 3;
    }

    // ---------- الخط الأفقي ----------
    if (verticalProgress >= 200) {
        if (horizontalProgress > 0) {
            cnx.beginPath();
            cnx.moveTo(200, 300);
            cnx.lineTo(200 + horizontalProgress, 300);
            cnx.stroke();
        }

        if (horizontalProgress < 120) {
            horizontalProgress += 3;
        }
    }

    // استمرار الأنيميشن
    if (
        verticalProgress < 200 ||
        horizontalProgress < 120
    ) {
       animId = requestAnimationFrame(drawCapitalL);
    }
}


function drawSmallL() {

    cnx.clearRect(0, 0, canvas.width, canvas.height);

    cnx.lineWidth = 10;
    cnx.strokeStyle = "white";
    cnx.lineCap = "round";

    // ---------- الخط الرأسي ----------
    if (verticalProgress > 0) {
        cnx.beginPath();
        cnx.moveTo(200, 100);
        cnx.lineTo(200, 100 + verticalProgress);
        cnx.stroke();
    }

    if (verticalProgress < 200) {
        verticalProgress += 3;
    }

    // استمرار الأنيميشن
    if (verticalProgress < 200) {
      animId = requestAnimationFrame(drawSmallL);
    }
}

