function drawCapitalG() {
    cnx.clearRect(0, 0, canvas.width, canvas.height);

    // 1️⃣ القوس
    cnx.beginPath();
    let arcEnd = (step === 0)
        ? Math.PI * 1.8 * progress
        : Math.PI * 1.8;

    cnx.arc(200, 200, 100, 0, arcEnd);
    cnx.stroke();

    // 2️⃣ الخط الأفقي
    if (step >= 1) {
        cnx.beginPath();

        let x = (step === 1)
            ? 150 + (155 * progress) // 305 - 150 = 155
            : 305;

        cnx.moveTo(150, 200);
        cnx.lineTo(x, 200);
        cnx.stroke();
    }

    progress += 0.01;

    if (progress >= 1) {
        progress = 0;
        step++;
    }

    if (step < 2) {
       animId =  requestAnimationFrame(drawCapitalG);
    } else {
        // الشكل النهائي
        cnx.beginPath();
        cnx.arc(200, 200, 100, 0, Math.PI * 1.8);
        cnx.moveTo(150, 200);
        cnx.lineTo(305, 200);
        cnx.stroke();
    }
}



function drawSmallG() {


    function animate() {
        cnx.clearRect(0, 0, canvas.width, canvas.height);

        // 1️⃣ الدائرة اللي فوق
        cnx.beginPath();
        let topCircle = (step === 0)
            ? Math.PI * 2 * progress
            : Math.PI * 2;

        cnx.arc(200, 120, 50, 0, topCircle);
        cnx.stroke();

        // 2️⃣ الخط النازل
        if (step >= 1) {
            cnx.beginPath();

            let y = (step === 1)
                ? 110 + (90 * progress) // من 110 لـ 200
                : 270;

            cnx.moveTo(250, 110);
            cnx.lineTo(250, y);
            cnx.stroke();
        }

        // 3️⃣ القوس اللي تحت
        if (step >= 2) {
            cnx.beginPath();

            let bottomArc = (step === 2)
                ? Math.PI * progress
                : Math.PI;

            cnx.arc(200, 260, 50, 0, bottomArc);
            cnx.stroke();
        }

        progress += 0.02;

        if (progress >= 1) {
            progress = 0;
            step++;
        }

        if (step < 3) {
           animId = requestAnimationFrame(drawSmallG);
        } else {
            // الشكل النهائي
            cnx.beginPath();
            cnx.arc(200,120,50,0,Math.PI*2);
            cnx.moveTo(250,110);
            cnx.lineTo(250,200);
            cnx.arc(200,260,50,0,Math.PI);
            cnx.stroke();
        }
    }

    animate();
}


