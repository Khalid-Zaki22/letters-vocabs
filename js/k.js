

function drawCapitalK() {

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

    // ---------- الخط المائل العلوي ----------
    if (verticalProgress >= 200) {
        if (upperDiagProgress > 0) {
            cnx.beginPath();
            cnx.moveTo(200, 200);
            cnx.lineTo(
                200 + upperDiagProgress,
                200 - upperDiagProgress
            );
            cnx.stroke();
        }

        if (upperDiagProgress < 100) {
            upperDiagProgress += 3;
        }
    }

    // ---------- الخط المائل السفلي ----------
    if (upperDiagProgress >= 100) {
        if (lowerDiagProgress > 0) {
            cnx.beginPath();
            cnx.moveTo(200, 200);
            cnx.lineTo(
                200 + lowerDiagProgress,
                200 + lowerDiagProgress
            );
            cnx.stroke();
        }

        if (lowerDiagProgress < 100) {
            lowerDiagProgress += 3;
        }
    }

    // استمرار الأنيميشن
    if (
        verticalProgress < 200 ||
        upperDiagProgress < 100 ||
        lowerDiagProgress < 100
    ) {
       animId = requestAnimationFrame(drawCapitalK);
    }
}

function drawSmallK() {

    cnx.clearRect(0, 0, canvas.width, canvas.height);

    cnx.lineWidth = 10;
    cnx.strokeStyle = "white";
    cnx.lineCap = "round";

    // ---------- الخط الرأسي ----------
    if (verticalProgress > 0) {
        cnx.beginPath();
        cnx.moveTo(220, 100);
        cnx.lineTo(220, 100 + verticalProgress);
        cnx.stroke();
    }

    if (verticalProgress < 200) {
        verticalProgress += 3;
    }

    // ---------- الخط المائل العلوي ----------
    if (verticalProgress >= 200) {
        if (upperDiagProgress > 0) {
            cnx.beginPath();
            cnx.moveTo(220, 200);
            cnx.lineTo(
                220 + upperDiagProgress * 0.7,
                200 - upperDiagProgress * 0.8
            );
            cnx.stroke();
        }

        if (upperDiagProgress < 80) {
            upperDiagProgress += 3;
        }
    }

    // ---------- الخط المائل السفلي ----------
    if (upperDiagProgress >= 80) {
        if (lowerDiagProgress > 0) {
            cnx.beginPath();
            cnx.moveTo(220, 200);
            cnx.lineTo(
                220 + lowerDiagProgress * 0.7,
                200 + lowerDiagProgress
            );
            cnx.stroke();
        }

        if (lowerDiagProgress < 90) {
            lowerDiagProgress += 3;
        }
    }

    // استمرار الأنيميشن
    if (
        verticalProgress < 200 ||
        upperDiagProgress < 80 ||
        lowerDiagProgress < 90
    ) {
       animId = requestAnimationFrame(drawSmallK);
    }
}

