const animals = {
  large: [
    'assets/jpg/1.png',
    'assets/jpg/4.jpg',
    'assets/jpg/cow.jpg',
    'assets/jpg/lama.jpg',
    'assets/jpg/tiger.jpg',
    'assets/jpg/giraf.jpg',
    'assets/jpg/slon.jpg',
    'assets/jpg/olen.jpg',
    'assets/jpg/lev.jpg',
    'assets/jpg/verb.jpg',
    'assets/jpg/bee.jpg',
    'assets/jpg/bik.jpg',
  ],
  fluffy: [
    'assets/jpg/2.jpg',
    'assets/jpg/3.jpg',
    'assets/jpg/5.jpg',
    'assets/jpg/raccon.png',
    'assets/jpg/bear.jpg',
    'assets/jpg/belka.jpg',
    'assets/jpg/kenguru.jpg',
    'assets/jpg/pan.jpg',
    'assets/jpg/koala.jpg',
    'assets/jpg/ric.jpg',
    'assets/jpg/sysl.jpg',
    'assets/jpg/rab.jpg',
  ],
  birds: [
    'assets/jpg/6.png',
    'assets/jpg/yellow_parrot.jpg',
    'assets/jpg/crane.jpg',
    'assets/jpg/flamingo.jpg',
    'assets/jpg/owl.jpg',
    'assets/jpg/parrot.jpg',
    'assets/jpg/ptisa.jpg',
    'assets/jpg/ew.jpg',
    'assets/jpg/new.jpg',
    'assets/jpg/orel.jpg',
    'assets/jpg/tuk.jpg',
    'assets/jpg/small.jpg',
  ],
}


const imagesLeft = Array.from(document.querySelector('.slider_left').children);
const imagesCenter = Array.from(document.querySelector('.slider_center').children);
const imagesRight = Array.from(document.querySelector('.slider_right').children);

let animal = 'large';

function redrawPhoto(arr) {
arr.forEach((image, index) => image.src = animals[animal][index]);
}

function changeImage (event) {
animal = event.target.dataset.animal;
redrawPhoto(imagesCenter);
// Array.from(imagesCenter).forEach((image, index) => image.src = './assets/seasons/' + season + '/' + (index + 1) + '.jpg');

const buttons = document.querySelector('.photo__buttons').children;
Array.from(buttons).forEach(button => {
  if (button.dataset.animal == animal) {
    button.classList.add('button_color');
  } else {
    button.classList.remove('button_color');
  };
});

};

function buttonClick (event) {
if (event.target.classList.contains('button')) {
  changeImage (event);
};
};

document.querySelector('.photo__buttons').addEventListener('click', buttonClick);

//slider
function shiftPhoto(arrow) {
const w = window.innerWidth >= 768 ? 2 : 1;
if (arrow == 'left') {
  animals[animal] = animals[animal].slice(w).concat(animals[animal].slice(0, w));
} else if (arrow == 'right') {
  animals[animal] = animals[animal].slice(-w).concat(animals[animal].slice(0, -w));
}
}

const slider = document.querySelector('.slider');

const buttonLeft = document.querySelector('.button_slider_left');
const buttonRight = document.querySelector('.button_slider_right');

function sliderLeft() {
buttonLeft.removeEventListener('click', sliderRight);
buttonRight.removeEventListener('click', sliderLeft);
slider.classList.add('move_left');
shiftPhoto('left');
redrawPhoto(imagesRight);
};

function sliderRight() {
buttonLeft.removeEventListener('click', sliderRight);
buttonRight.removeEventListener('click', sliderLeft);
slider.classList.add('move_right');
shiftPhoto('right');
redrawPhoto(imagesLeft);
};

slider.addEventListener('animationend', () => {
redrawPhoto(imagesCenter);
slider.classList.remove('move_left');
slider.classList.remove('move_right');
buttonLeft.addEventListener('click', sliderRight);
buttonRight.addEventListener('click', sliderLeft);
});


buttonLeft.addEventListener('click', sliderRight);
buttonRight.addEventListener('click', sliderLeft);
  
 