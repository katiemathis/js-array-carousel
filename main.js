const images = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const place = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]


const text = [
    'This is some text',
    'This is more text and I want you to know how beautiful this place is',
    'This place is also beautiful',
    'Why are you not booking a ticket right now to this beautiful place?',
    'This is your final chance to look at this beautiful picture before you go to the next one. You are missing out if you cannot understand that you must travel immediately to this place.'
]

const imageReference = document.getElementsByClassName('gallery')[0];
const thumbnailsReference = document.getElementsByClassName('lineup')[0];
let image = '';
let thumbnails = ''; //why are we using a string here?
let active = 1;

//the for loop here serves as a way to make sure all images are in the document using js

for (let i = 0; i < images.length; i++) {
    image += `
        <div class="slider">
            <img src="${images[i]}" alt="">
            <div class="text">
                <h3>${place[i]}</h3>
                <p>${text[i]}</p>
            </div>`
    thumbnails += `
        <div class="thumbnails">
            <img src="${images[i]}" alt="">
        </div>
    `
}

imageReference.innerHTML = image;
document.getElementsByClassName('slider')[active].classList.add('active');

thumbnailsReference.innerHTML += thumbnails;
document.getElementsByClassName('thumbnails')[active].classList.add('active');

//confront the css and html you have in place with the solution
const prev = document.querySelector('.prev');
prev.addEventListener('click', function() {
    if(active == 0) {                                                                   
        active = images.length - 1; 

        document.querySelector('.slider.active').classList.remove('active');
        document.getElementsByClassName('slider')[active].classList.add('active');

        document.querySelector('.thumbnails.active').classList.remove('active');
        document.getElementsByClassName('thumbnails')[active].classList.add('active');
    } else if(active < images.length) {
        --active
        document.querySelector('.slider.active').classList.remove('active');
        document.getElementsByClassName('slider')[active].classList.add('active');

        document.querySelector('.thumbnails.active').classList.remove('active');
        document.getElementsByClassName('thumbnails')[active].classList.add('active');
    } 
});

const next = document.querySelector('.next');
next.addEventListener('click', function() {
    if(active < images.length - 1) {                                                                    
        ++active
        document.querySelector('.slider.active').classList.remove('active');
        document.getElementsByClassName('slider')[active].classList.add('active');

        document.querySelector('.thumbnails.active').classList.remove('active');
        document.getElementsByClassName('thumbnails')[active].classList.add('active');
    } else if(active == images.length) {
        active = 0;
        document.querySelector('.slider.active').classList.remove('active');
        document.getElementsByClassName('slider')[active].classList.add('active');

        document.querySelector('.thumbnails.active').classList.remove('active');
        document.getElementsByClassName('thumbnails')[active].classList.add('active');
    } 
});