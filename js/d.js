function drawCapitalD() {
cnx.clearRect(0, 0, canvas.width, canvas.height);

    // ---------- العمود ----------
    if (vProgress > 0) {
        cnx.beginPath();
        cnx.moveTo(160, 100);
        cnx.lineTo(160, 100 + vProgress);
        cnx.stroke();
    }

    if (vProgress < maxV) {
        vProgress += 2;
    }

    // ---------- القوس (نص دايرة) ----------
    if (vProgress >= maxV) {
        if (arcProgress > 0) {
            cnx.beginPath();
            // نص دايرة على يمين العمود
            cnx.arc(
                160,                 // مركز القوس x
                100 + maxV/2,        // مركز القوس y (منتصف العمود)
                maxV/2,              // نصف القطر
                -Math.PI/2,          // البداية من فوق
                Math.PI /2, // زاوية النهاية تدريجية
                false                // مع عقارب الساعة
            );
            cnx.stroke();
        }

        if (arcProgress < maxArc) {
            arcProgress += 0.1; // سرعة رسم القوس
        }
    }

    // استمرار الأنيميشن
    if (vProgress < maxV || arcProgress < maxArc) {
       animId = requestAnimationFrame(drawCapitalD);
    }
}


function drawSmallD() {
    cnx.clearRect(0, 0, canvas.width, canvas.height);

    // ---------- الخط العمودي ----------
    if (vProgress > 0) {
        cnx.beginPath();
        cnx.moveTo(200, 100);
        cnx.lineTo(200, 100 + vProgress);
        cnx.stroke();
    }

    if (vProgress < maxV) {
        vProgress += 2;
    }

    // ---------- نص دائرة على اليسار ----------
    if (vProgress >= maxV) {

        if (arcProgress > 0) {
            cnx.beginPath();

            cnx.arc(
                200,                    // مركز X (نفس العمود)
                255 ,         // منتصف العمود
                45,                     // نصف القطر
                Math.PI * 0.5,          // من تحت
                Math.PI * 0.5 + arcProgress, // لحد فوق (يسار)
                false
            );

            cnx.stroke();
        }

        if (arcProgress < Math.PI) {
            arcProgress += 0.05;
        }
    }

    if (vProgress < maxV || arcProgress < Math.PI) {
        animId = requestAnimationFrame(drawSmallD);
    }
}

