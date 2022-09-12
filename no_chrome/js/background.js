const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `/no_chrome/img/${chosenImage}`;
console.log(bgImage);

    // appendChild() 는 html 요소를 추가할 수 있다
document.body.appendChild(bgImage);