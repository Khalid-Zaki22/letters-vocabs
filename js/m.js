



function drawCapitalM() {

    cnx.clearRect(0, 0, canvas.width, canvas.height);

    cnx.lineWidth = 10;
    cnx.strokeStyle = "white";
    cnx.lineCap = "round";

    // ---------- العمود الشمال ----------
    if (leftProgress > 0) {
        cnx.beginPath();
        cnx.moveTo(100, 100);
        cnx.lineTo(100, 100 + leftProgress);
        cnx.stroke();
    }

    if (leftProgress < 250) {
        leftProgress += 3;
    }

    // ---------- القطر الشمال ----------
    if (leftProgress >= 250) {
        if (diagLeftProgress > 0) {
            cnx.beginPath();
            cnx.moveTo(100, 100);
            cnx.lineTo(
                100 + diagLeftProgress * 0.4,
                100 + diagLeftProgress * 0.8
            );
            cnx.stroke();
        }

        if (diagLeftProgress < 250) {
            diagLeftProgress += 3;
        }
    }

    // ---------- القطر اليمين ----------
    if (diagLeftProgress >= 250) {
        if (diagRightProgress > 0) {
            cnx.beginPath();
            cnx.moveTo(300, 100);
            cnx.lineTo(
                300 - diagRightProgress * 0.4,
                100 + diagRightProgress * 0.8
            );
            cnx.stroke();
        }

        if (diagRightProgress < 250) {
            diagRightProgress += 3;
        }
    }

    // ---------- العمود اليمين ----------
    if (diagRightProgress >= 250) {
        if (rightProgress > 0) {
            cnx.beginPath();
            cnx.moveTo(300, 100);
            cnx.lineTo(300, 100 + rightProgress);
            cnx.stroke();
        }

        if (rightProgress < 250) {
            rightProgress += 3;
        }
    }

    // استمرار الأنيميشن
    if (
        leftProgress < 250 ||
        diagLeftProgress < 250 ||
        diagRightProgress < 250 ||
        rightProgress < 250
    ) {
       animId =  requestAnimationFrame(drawCapitalM);
    }
}




function drawSmallM() {

    cnx.clearRect(0, 0, canvas.width, canvas.height);

    cnx.lineWidth = 10;
    cnx.strokeStyle = "white";
    cnx.lineCap = "round";

    // ---------- العمود الأول ----------
    if (leftLine > 0) {
        cnx.beginPath();
        cnx.moveTo(100, 120);
        cnx.lineTo(100, 120 + leftLine);
        cnx.stroke();
    }

    if (leftLine < 230) {
        leftLine += 3;
    }

    // ---------- القوس الأول ----------
    if (leftLine >= 230) {
        if (arc1 > 0) {
            cnx.beginPath();
            cnx.arc(150, 200, 50, 0, Math.PI , true);
            cnx.stroke();
        }

        if (arc1 < 1) {
            arc1 += 0.03;
        }
    }

    // ---------- العمود الأوسط ----------
    if (arc1 >= 1) {
        if (midLine1 > 0) {
            cnx.beginPath();
            cnx.moveTo(200, 180);
            cnx.lineTo(200, 180 + midLine1);
            cnx.stroke();
        }

        if (midLine1 < 170) {
            midLine1 += 3;
        }
    }

    // ---------- القوس الثاني ----------
    if (midLine1 >= 170) {
        if (arc2 > 0) {
            cnx.beginPath();
            cnx.arc(250, 200, 50, 0, Math.PI , true);
            cnx.stroke();
        }

        if (arc2 < 1) {
            arc2 += 0.03;
        }
    }

    // ---------- العمود الأخير ----------
    if (arc2 >= 1) {
        if (rightLine > 0) {
            cnx.beginPath();
            cnx.moveTo(300, 190);
            cnx.lineTo(300, 190 + rightLine);
            cnx.stroke();
        }

        if (rightLine < 160) {
            rightLine += 3;
        }
    }

    // استمرار الأنيميشن
    if (
        leftLine < 230 ||
        arc1 < 1 ||
        midLine1 < 170 ||
        arc2 < 1 ||
        rightLine < 160
    ) {
       animId = requestAnimationFrame(drawSmallM);
    }
}


