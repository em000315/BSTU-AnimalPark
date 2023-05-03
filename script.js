const animals = {
  large: [
    'assets/JPG/1.png',
    'assets/JPG/4.jpg',
    'assets/JPG/cow.jpg',
    'assets/JPG/lama.jpg',
    'assets/JPG/tiger.jpg',
    'assets/JPG/giraf.jpg',
    'assets/JPG/slon.jpg',
    'assets/JPG/olen.jpg',
    'assets/JPG/lev.jpg',
    'assets/JPG/verb.jpg',
    'assets/JPG/bee.jpg',
    'assets/JPG/bik.jpg',
  ],
  fluffy: [
    'assets/JPG/2.jpg',
    'assets/JPG/3.jpg',
    'assets/JPG/5.jpg',
    'assets/JPG/raccon.png',
    'assets/JPG/bear.jpg',
    'assets/JPG/belka.jpg',
    'assets/JPG/kenguru.jpg',
    'assets/JPG/pan.jpg',
    'assets/JPG/koala.jpg',
    'assets/JPG/ric.jpg',
    'assets/JPG/sysl.jpg',
    'assets/JPG/rab.jpg',
  ],
  birds: [
    'assets/JPG/6.png',
    'assets/JPG/yellow_parrot.jpg',
    'assets/JPG/crane.jpg',
    'assets/JPG/flamingo.jpg',
    'assets/JPG/owl.jpg',
    'assets/JPG/parrot.jpg',
    'assets/JPG/ptisa.jpg',
    'assets/JPG/ew.jpg',
    'assets/JPG/new.jpg',
    'assets/JPG/orel.jpg',
    'assets/JPG/tuk.jpg',
    'assets/JPG/small.jpg',
    
    

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
  
 