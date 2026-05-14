const card = document.getElementById('myCard');

card.addEventListener('click', () => {
    card.classList.toggle('flipped');
});

let words = [

    "Apple", "Animal", "Ant",


    "Book", "Boy", "Ball",


    "Cat", "Car", "Cold",


    "Dog", "Door", "Draw",


    "Eat", "Egg", "Eye",


    "Fish", "Fly", "Food",

    "Game", "Good",        // G
    "Happy", "House",  // H
    "Ice", "Iron",
    "Jump", "jungle",
    "King", "kite",
    "lion", "lamp",
    "moon", "milk"

    // I
];

let imgs = [

    "apple.jpeg", "animal.jpg", "ant.jpeg",


    "book.jpg", "boy.jpeg", "ball.jpg",


    "cat.jpg", "car.jpeg", "cold.jpg",


    "dog.jpg", "door.jpeg", "draw.jpeg",


    "eat.jpeg", "egg.jpg", "eye.jpg",


    "fish.jpg", "fly.jpeg", "food.jpeg",


    "game.jpg", "good.jpg",        // G
    "happy.jpeg", "house.jpeg",    // H
    "ice.jpeg", "iron.jpg",
    "Jump.jpg", "jungle.webp",
    "King.webp", "kite.webp",
    "lion.webp", "lamp.webp",
    "moon.webp", "milk.avif"

]

let arWords = [
    "تفاحة", "حيوان", "نملة",
    "كتاب", "ولد", "كرة",
    "قطة", "سيارة", "بارد",
    "كلب", "باب", "يرسم",
    "يأكل", "بيضة", "عين",
    "سمكة", "يطير", "طعام",
    "لعبة", "جيد",
    "سعيد", "منزل",
    "ثلج", "حديد",
    "يقفز", "غابة استوائية",
    "ملك", "طائرة ورقية",
    "أسد", "مصباح",
    "قمر", "حليب"

];

let img = document.querySelector(".img");
let cardBack = document.querySelector(".flip-card-front");
cardBack.innerHTML = words[0];
img.setAttribute("src", "./imgs/" + imgs[0]);

let index = 0;
let nextBtn = document.querySelector(".next");

let voiceBtn = document.querySelector(".voice");

function speak(word) {
    let utterance = new SpeechSynthesisUtterance(word);
    utterance.rate = .5;
    speechSynthesis.speak(utterance);
}

voiceBtn.onclick = function () {
    speak(words[index]);
}



let trans = document.querySelector(".trans");
let transBtn = document.querySelector(".show-trans");

transBtn.onclick = function () {
    trans.innerHTML = arWords[index];
}

nextBtn.onclick = function () {
    if (index < words.length - 1) {
        index++;
        cardBack.innerHTML = words[index];
        img.setAttribute("src", "./imgs/" + imgs[index]);
        trans.innerHTML = "";
    }
}

let preBtn = document.querySelector(".previous")
preBtn.onclick = function () {
    if (index > 0) {
        index--;
        cardBack.innerHTML = words[index];
        img.setAttribute("src", "./imgs/" + imgs[index]);
        trans.innerHTML = "";
    }

}