


// إعداد الخط الأفقي
let lineProgress = 0;
const lineMax = 100;

// إعداد القوس

const startAngle = Math.PI * 0.2;  // بداية القوس من فوق شوية
const endAngle = Math.PI * 2.03;    // نهاية القوس تقريبًا 3/4 دائرة



//sm e
function drawSmallE() {
    cnx.clearRect(0, 0, canvas.width, canvas.height);

    // ---------- الخط الأفقي ----------
    cnx.beginPath();

    cnx.moveTo(150, 200);
    cnx.lineTo(150 + lineProgress, 200);
    cnx.stroke();

    if (lineProgress < lineMax) {
        lineProgress += 2; // سرعة ظهور الخط
    } 
    // ---------- القوس ----------
    else if (arcProgress < endAngle - startAngle) {
        cnx.beginPath();
        cnx.lineWidth = 10;
        cnx.strokeStyle = "white";
        // القوس يبدأ من الجهة اليمنى للخط ويظهر تدريجيًا
        cnx.arc(200, 200, 50, startAngle, startAngle + arcProgress );
        cnx.stroke();

        arcProgress += 0.02; // التحكم في سرعة ظهور القوس تدريجيًا
    }

    // استمرار الأنيميشن
    if (lineProgress < lineMax || arcProgress < endAngle - startAngle) {
       animId = requestAnimationFrame(drawSmallE);
    }
}



// progress لكل جزء



function drawCapitalE() {
    cnx.clearRect(0, 0, canvas.width, canvas.height);

    // ---------- الخط العلوي ----------
    if (topProgress > 0) {
        cnx.beginPath();
        cnx.moveTo(150, 100);
        cnx.lineTo(150 + topProgress, 100);
        cnx.stroke();
    }

    if (topProgress < 120) {
        topProgress += 3;
    }

    // ---------- الخط الأوسط ----------
    if (topProgress >= 120) {
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

    // ---------- الخط السفلي ----------
    if (midProgress >= 100) {
        if (botProgress > 0) {
            cnx.beginPath();
            cnx.moveTo(150, 300);
            cnx.lineTo(150 + botProgress, 300);
            cnx.stroke();
        }

        if (botProgress < 120) {
            botProgress += 3;
        }
    }

    // ---------- الخط العمودي ----------
    if (botProgress >= 120) {
        if (vProgress > 0) {
            cnx.beginPath();
            cnx.moveTo(150, 100);
            cnx.lineTo(150, 100 + vProgress);
            cnx.stroke();
        }

        if (vProgress < 200) {
            vProgress += 3;
        }
    }

    // استمرار الأنيميشن
    if (
        topProgress < 120 ||
        midProgress < 100 ||
        botProgress < 120 ||
        vProgress < 200
    ) {
      animId =  requestAnimationFrame(drawCapitalE);
    }
}

