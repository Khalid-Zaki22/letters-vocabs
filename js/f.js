function drawCapitalF() {
    cnx.clearRect(0, 0, canvas.width, canvas.height);


    // ---------- العمود ----------
    if (vProgress > 0) {
        cnx.beginPath();
        cnx.moveTo(150, 100);
        cnx.lineTo(150, 100 + vProgress);
        cnx.stroke();
    }

    if (vProgress < maxV) {
        vProgress += 3;
    }

    // ---------- الخط العلوي ----------
    if (vProgress >= maxV) {
        if (topProgress > 0) {
            cnx.beginPath();
            cnx.moveTo(150, 100);
            cnx.lineTo(150 + topProgress, 100);
            cnx.stroke();
        }

        if (topProgress < maxTop) {
            topProgress += 3;
        }
    }

    // ---------- الخط الأوسط ----------
    if (topProgress >= maxTop) {
        if (midProgress > 0) {
            cnx.beginPath();
            cnx.moveTo(150, 200);
            cnx.lineTo(150 + midProgress, 200);
            cnx.stroke();
        }

        if (midProgress < maxMid) {
            midProgress += 3;
        }
    }

    // استمرار الأنيميشن
    if (
        vProgress < maxV ||
        topProgress < maxTop ||
        midProgress < maxMid
    ) {
       animId = requestAnimationFrame(drawCapitalF);
    }
}


function drawSmallF() {
    cnx.clearRect(0, 0, canvas.width, canvas.height);


    // ---------- العمود ----------
    if (vProgress > 0) {
        cnx.beginPath();
        cnx.moveTo(180, 120);
        cnx.lineTo(180, 120 + vProgress);
        cnx.stroke();
    }

    if (vProgress < maxV) {
        vProgress += 2.5;
    }

    // ---------- القوس العلوي بدل الشرطة ----------
    if (vProgress >= maxV) {
        if (arcTopProgress > 0) {
            cnx.beginPath();

            cnx.arc(
                220,                 // center X
                120,                 // أعلى العمود
                40,                  // قوس صغير
                Math.PI,            // يبدأ من اليسار
                Math.PI + arcTopProgress,
                false
            );

            cnx.stroke();
        }

        if (arcTopProgress < maxArcTop) {
            arcTopProgress += 0.05;
        }
    }

    // ---------- الخط الأوسط ----------
    if (arcTopProgress >= maxArcTop) {
        if (midProgress > 0) {
            cnx.beginPath();
            cnx.moveTo(160, 200);
            cnx.lineTo(160 + midProgress , 200);
            cnx.stroke();
        }

        if (midProgress < maxMid) {
            midProgress += 2.5;
        }
    }

    // استمرار الأنيميشن
    if (
        vProgress < maxV ||
        arcTopProgress < maxArcTop ||
        midProgress < maxMid
    ) {
       animId = requestAnimationFrame(drawSmallF);
    }
}


