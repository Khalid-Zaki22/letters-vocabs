function drawCapitalJ() {

    cnx.clearRect(0, 0, canvas.width, canvas.height);

    // ---------- الخط العلوي ----------
    if (topProgress > 0) {
        cnx.beginPath();
        cnx.moveTo(200, 100);
        cnx.lineTo(200 + topProgress, 100);
        cnx.stroke();
    }

    if (topProgress < 100) {
        topProgress += 3;
    }

    // ---------- الخط الرأسي ----------
    if (topProgress >= 100) {
        if (verticalProgress > 0) {
            cnx.beginPath();
            cnx.moveTo(250, 100);
            cnx.lineTo(250, 100 + verticalProgress);
            cnx.stroke();
        }

        if (verticalProgress < 150) {
            verticalProgress += 3;
        }
    }

    // ---------- القوس ----------
    if (verticalProgress >= 150) {
        if (arcProgress > 0) {
            cnx.beginPath();
            cnx.arc(210, 250, 40, 0, arcProgress);
            cnx.stroke();
        }

        if (arcProgress < Math.PI) {
            arcProgress += 0.05;
        }
    }

    // استمرار الأنيميشن
    if (
        topProgress < 100 ||
        verticalProgress < 150 ||
        arcProgress < Math.PI
    ) {
      animId = requestAnimationFrame(drawCapitalJ);
    }
}


function drawSmallJ() {

    cnx.clearRect(0, 0, canvas.width, canvas.height);

    // ---------- النقطة ----------
    if (dotProgress > 0) {
        cnx.beginPath();
        cnx.arc(250, 60, dotProgress, 0, Math.PI * 2);
        cnx.fill();
    }

    if (dotProgress < 6) { // حجم النقطة
        dotProgress += 0.3;
    }

    // ---------- الخط الرأسي ----------
    if (dotProgress >= 6) {
        if (verticalProgress > 0) {
            cnx.beginPath();
            cnx.moveTo(250, 100);
            cnx.lineTo(250, 100 + verticalProgress);
            cnx.stroke();
        }

        if (verticalProgress < 150) {
            verticalProgress += 3;
        }
    }

    // ---------- القوس ----------
    if (verticalProgress >= 150) {
        if (arcProgress > 0) {
            cnx.beginPath();
            cnx.arc(210, 250, 40, 0, arcProgress);
            cnx.stroke();
        }

        if (arcProgress < Math.PI) {
            arcProgress += 0.05;
        }
    }

    // استمرار الأنيميشن
    if (
        dotProgress < 6 ||
        verticalProgress < 150 ||
        arcProgress < Math.PI
    ) {
      animId =  requestAnimationFrame(drawSmallJ);
    }
}


