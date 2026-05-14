function drawCapitalH() {

    function animate() {
        cnx.clearRect(0, 0, canvas.width, canvas.height);

        // 1️⃣ العمود الشمال
        if (step >= 0) {
            cnx.beginPath();

            let y = (step === 0)
                ? 100 + (200 * progress)
                : 300;

            cnx.moveTo(150, 100);
            cnx.lineTo(150, y);
            cnx.stroke();
        }

        // 2️⃣ العمود اليمين
        if (step >= 1) {
            cnx.beginPath();

            let y = (step === 1)
                ? 100 + (200 * progress)
                : 300;

            cnx.moveTo(250, 100);
            cnx.lineTo(250, y);
            cnx.stroke();
        }

        // 3️⃣ الخط النص
        if (step >= 2) {
            cnx.beginPath();

            let x = (step === 2)
                ? 150 + (100 * progress)
                : 250;

            cnx.moveTo(150, 200);
            cnx.lineTo(x, 200);
            cnx.stroke();
        }

        progress += 0.03;

        if (progress >= 1) {
            progress = 0;
            step++;
        }

        if (step < 3) {
            requestAnimationFrame(animate);
        }
    }

    animate();
}


function drawSmallH() {

    function animate() {
        cnx.clearRect(0, 0, canvas.width, canvas.height);

        cnx.lineWidth = 10;
        cnx.strokeStyle = "white";

        // 1️⃣ العمود الشمال
        if (step >= 0) {
            cnx.beginPath();
            let y = (step === 0)
                ? 50 + (250 * progress)
                : 300;

            cnx.moveTo(150, 50);
            cnx.lineTo(150, y);
            cnx.stroke();
        }

        // 2️⃣ القوس (نفس arc بتاعك)
        if (step >= 1) {
            cnx.beginPath();
            let end = (step === 1)
                ? Math.PI 
                : Math.PI ;

            cnx.arc(210, 220, 60, 0, end, true);
            cnx.stroke();
        }

        // 3️⃣ العمود اليمين
        if (step >= 2) {
            cnx.beginPath();
            let y = (step === 2)
                ? 220 + (80 * progress)
                : 300;

            cnx.moveTo(270, 220);
            cnx.lineTo(270, y);
            cnx.lineCap = "round";

            cnx.stroke();
        }

        progress += 0.02;

        if (progress >= 1) {
            progress = 0;
            step++;
        }

        if (step < 3) {
            requestAnimationFrame(animate);
        } 
    }

    animate();
}





