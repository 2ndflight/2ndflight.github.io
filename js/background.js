const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

//Creating and load image to html
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

//Adding image to body
//If you want to make image come first, use preppend
document.body.appendChild(bgImage);
