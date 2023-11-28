var elInp = document.querySelector(".inp");
var elPiyoda = document.querySelector(".piyoda");
var elBike = document.querySelector(".velosiped");
var elCar = document.querySelector(".mashina");
var elPlane = document.querySelector(".samolyot");

function calc() {
  elPiyoda.textContent = elInp.value / 4;
  elBike.textContent = elInp.value / 20;
  elCar.textContent = elInp.value / 100;
  elPlane.textContent = elInp.value / 800;
  if (elInp.value == "") {
    alert("Nimadur kiriting!");
  }
  elInp.value = "";
}
