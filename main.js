const images = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

let slides = ""

for (let i = 0; i < images.length; i ++) {
    slides += 
    `<div class="image-container">
    <img src="$(images[i])">
    </div>`;

}