function drawCapitalI() {

    function animate() {
        cnx.clearRect(0, 0, canvas.width, canvas.height);


        // 1️⃣ الخط العلوي
        if (step >= 0) {
            cnx.beginPath();

            let x = (step === 0)
                ? 150 + (100 * progress)
                : 250;

            cnx.moveTo(150, 100);
            cnx.lineTo(x, 100);
            cnx.stroke();
        }

        // 2️⃣ الخط العمودي
        if (step >= 1) {
            cnx.beginPath();

            let y = (step === 1)
                ? 100 + (200 * progress)
                : 300;

            cnx.moveTo(200, 100);
            cnx.lineTo(200, y);
            cnx.stroke();
        }

        // 3️⃣ الخط السفلي
        if (step >= 2) {
            cnx.beginPath();

            let x = (step === 2)
                ? 150 + (100 * progress)
                : 250;

            cnx.moveTo(150, 300);
            cnx.lineTo(x, 300);
            cnx.stroke();
        }

        progress += 0.03;

        if (progress >= 1) {
            progress = 0;
            step++;
        }

        if (step < 3) {
           animId = requestAnimationFrame(animate);
        } else {
            // الشكل النهائي
            cnx.beginPath();
            cnx.moveTo(150, 100);
            cnx.lineTo(250, 100);

            cnx.moveTo(200, 100);
            cnx.lineTo(200, 300);

            cnx.moveTo(150, 300);
            cnx.lineTo(250, 300);

            cnx.stroke();
        }
    }

    animate();
}



function drawSmallI() {


    function animate() {
        cnx.clearRect(0, 0, canvas.width, canvas.height);


        // 1️⃣ النقطة (dot)
        if (step >= 0) {
            cnx.beginPath();

            let r = (step === 0)
                ? 0 + (4 * progress)
                : 4;

            cnx.arc(200, 120, r, 0, Math.PI * 2);
            cnx.fill();
        }

        // 2️⃣ الخط العمودي
        if (step >= 1) {
            cnx.beginPath();

            let y = (step === 1)
                ? 140 + (160 * progress)
                : 300;

            cnx.moveTo(200, 140);
            cnx.lineTo(200, y);
            cnx.stroke();
        }

        progress += 0.03;

        if (progress >= 1) {
            progress = 0;
            step++;
        }

        if (step < 2) {
          animId =  requestAnimationFrame(animate);
        } else {
            // الشكل النهائي
            cnx.beginPath();
            cnx.arc(200, 120, 8, 0, Math.PI * 2);
            cnx.moveTo(200, 140);
            cnx.lineTo(200, 300);
            cnx.stroke();
        }
    }

    animate();
}

