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


const text [
    'This is some text',
    'This is more text and I want you to know how beautiful this place is',
    'This place is also beautiful',
    'Why are you not booking a ticket right now to this beautiful place?',
    'This is your final chance to look at this beautiful picture before you go to the next one. You are missing out if you cannot understand that you must travel immediately to this place.'
]

const imageReference = document.getElementsByClassName('gallery')[0];
const thumbnailsReference = document.getElementsByClassName('thumbnails')[0];
let image ='';
let thumbnails = ''; //why are we using a string here?
let active = 1;

