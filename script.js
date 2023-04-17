const animals = {
    large: [
      'assets/jpg/1.png',
      'assets/jpg/4.jpg',
      'assets/jpg/cow.jpg',
      'assets/jpg/lama.jpg',
      'assets/jpg/tiger.jpg',
      'assets/jpg/giraf.jpg',
    ],
    fluffy: [
      'assets/jpg/2.jpg',
      'assets/jpg/3.jpg',
      'assets/jpg/5.jpg',
      'assets/jpg/raccon.png',
      'assets/jpg/bear.jpg',
      'assets/jpg/belka.jpg',
    ],
    birds: [
      'assets/jpg/6.png',
      'assets/jpg/yellow_parrot.jpg',
      'assets/jpg/crane.jpg',
      'assets/jpg/flamingo.jpg',
      'assets/jpg/owl.jpg',
      'assets/jpg/parrot.jpg',
    ],
  }
  
  function changeImage (event) {
    const animal = event.target.dataset.animal;
    const animalImages = document.querySelector('.imagesOfAnimals').children;
    Array.from(animalImages).forEach((image, index) => image.src = animals[animal][index]);
    
    const staticButtons = document.querySelector('.orangeBlock').children;
    Array.from(staticButtons).forEach(staticButton => {
      if (staticButton.dataset.animal == animal) {
        staticButton.classList.add('button_color');
      } else {
        staticButton.classList.remove('button_color');
      };
    });
    
  };
  
  function buttonClick (event) {
    if (event.target.classList.contains('staticButton')) {
      changeImage (event);
    };
  };
  
  document.querySelector('.orangeBlock').addEventListener('click', buttonClick);