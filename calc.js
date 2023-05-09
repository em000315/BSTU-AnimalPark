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