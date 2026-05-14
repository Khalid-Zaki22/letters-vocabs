function drawCapitalA() {
    cnx.clearRect(0, 0, canvas.width, canvas.height);

    // ---------- الخط المائل الأيسر ----------
    if (leftProgress > 0) {
        cnx.beginPath();
        cnx.moveTo(200, 100); // القمة
        cnx.lineTo(
            200 - leftProgress * 0.5,
            100 + leftProgress
        );
        cnx.stroke();
    }

    if (leftProgress < 200) {
        leftProgress += 3;
    }

    // ---------- الخط المائل الأيمن ----------
    if (leftProgress >= 200) {
        if (rightProgress > 0) {
            cnx.beginPath();
            cnx.moveTo(200, 100);
            cnx.lineTo(
                200 + rightProgress * 0.5,
                100 + rightProgress
            );
            cnx.stroke();
        }

        if (rightProgress < 200) {
            rightProgress += 3;
        }
    }

    // ---------- الخط الأوسط ----------
    if (rightProgress >= 200) {
        if (midProgress > 0) {
            cnx.beginPath();
            cnx.moveTo(150, 200);
            cnx.lineTo(150 + midProgress, 200);
            cnx.stroke();
        }

        if (midProgress < 100) {
            midProgress += 3;
        }
    }

    // استمرار الأنيميشن
    if (
        leftProgress < 200 ||
        rightProgress < 200 ||
        midProgress < 100
    ) {
        animId = requestAnimationFrame(drawCapitalA);
    }
}

function drawSmallA() {

    cnx.clearRect(0, 0, canvas.width, canvas.height);
  

    // ---------- القوس (الدائرة) ----------
    if (arcProgress > 0) {
        cnx.beginPath();
        cnx.arc(200, 200, 50, 0, arcProgress, false);
        cnx.stroke();
    }

    if (arcProgress < maxArc) {
        arcProgress += 0.05;
    }

    // ---------- الخط الصغير ----------
    if (arcProgress >= maxArc) {
        if (lineProgress > 0) {
            cnx.beginPath();
            cnx.moveTo(250, 200);
            cnx.lineTo(260, 190 + lineProgress);
            cnx.stroke();
        }

        if (lineProgress < maxLine) {
            lineProgress += 2;
        }
    }

    // استمرار الأنيميشن
    if (arcProgress < maxArc || lineProgress < maxLine) {
        animId = requestAnimationFrame(drawSmallA);
    }
}