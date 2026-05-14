function drawCapitalB() {
    cnx.clearRect(0, 0, canvas.width, canvas.height);


    // ---------- الخط العمودي ----------
    if (vProgress > 0) {
        cnx.beginPath();
        cnx.moveTo(150, 100);
        cnx.lineTo(150, 100 + vProgress);
        cnx.stroke();
    }

    if (vProgress < maxV) {
        vProgress += 5;
    }

    // ---------- القوس العلوي ----------
    if (vProgress >= maxV) {
        if (topArcProgress > 0) {
            cnx.beginPath();
            cnx.arc(150, 150, 50, -Math.PI/2, Math.PI/2, false);
            cnx.stroke();
        }

        if (topArcProgress < maxArc) {
            topArcProgress += .1;
        }
    }

    // ---------- القوس السفلي ----------
    if (topArcProgress >= maxArc) {
        if (botArcProgress > 0) {
            cnx.beginPath();
            cnx.arc(150, 250, 50, -Math.PI/2, Math.PI/2, false);
            cnx.stroke();
        }

        if (botArcProgress < maxArc) {
            botArcProgress += 1;
        }
    }

    // استمرار الأنيميشن
    if (
        vProgress < maxV ||
        topArcProgress < maxArc ||
        botArcProgress < maxArc
    ) {
        animId =  requestAnimationFrame(drawCapitalB);
    }
}


function drawSmallB() {
    cnx.clearRect(0, 0, canvas.width, canvas.height);



    // ---------- العمود ----------
    if (vProgress > 0) {
        cnx.beginPath();
        cnx.moveTo(150, 150);
        cnx.lineTo(150, 150 + vProgress);
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
                150,                 // مركز القوس x
                299 ,        // مركز القوس y (منتصف العمود)
                maxV/4,              // نصف القطر
                -Math.PI/2,          // البداية من فوق
                Math.PI/2 , // زاوية النهاية تدريجية
                false                // مع عقارب الساعة
            );
            cnx.stroke();
        }

        if (arcProgress < maxArc) {
            arcProgress += 0.05; // سرعة رسم القوس
        }
    }

    // استمرار الأنيميشن
    if (vProgress < maxV || arcProgress < maxArc) {
        animId = requestAnimationFrame(drawSmallB);
    }
}

