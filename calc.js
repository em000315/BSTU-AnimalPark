//calculate func

const firstSection = document.querySelector("#chs1")
const secondSection = document.querySelector("#chs2")
const calcThis = document.querySelector("#calcThis")

let obr1 = null
let obr2 = null

firstSection.addEventListener("click", hundleFirstSelect);
secondSection.addEventListener("click", hundleSecondSelect);

function hundleFirstSelect(event) {
 obr1 = event.target.id
 if (obr1 && obr2) calcThis.classList.add("active")
 
}

function hundleSecondSelect(event) {
 obr2 = event.target.id
 if (obr1 && obr2) calcThis.classList.add("active")
}

function calculate() {

 let resultat = null

 if (obr1 === "bt1" && obr2 === "bt3") {
   resultat = 10
 } else if (obr1 === "bt1" && obr2 === "bt4") {
   resultat = 15
 } else if (obr1 === "bt2" && obr2 === "bt3") {
   resultat = 15
 } else {
   resultat = 22
 }

 document.getElementById("result").innerHTML = resultat + " $";
}
let acc = document.querySelectorAll('.txt1');

acc.forEach(item => {
    item.addEventListener('click', e => {
    if (e.target.classList.contains('txt3')) {
        e.target.classList.remove('txt3');
      return;
    }
    acc.forEach(e=>e.classList.remove('txt3'));
    e.target.classList.add('txt3');
  });
});

let abb = document.querySelectorAll('.txt2');

abb.forEach(item => {
  item.addEventListener('click', e => {
  if (e.target.classList.contains('txt4')) {
      e.target.classList.remove('txt4');
    return;
  }
  abb.forEach(e=>e.classList.remove('txt4'));
  e.target.classList.add('txt4');
});
});
