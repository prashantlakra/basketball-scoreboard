let homeDisplayEL = document.getElementById("home-display-el");
let guestDisplayEl = document.getElementById("guest-display-el");

let homeDisplayCount = 0;
let guestDisplayCount = 0;

function homePlus1() {
  homeDisplayCount += 1;
  homeDisplayEL.textContent = homeDisplayCount;
}

function homePlus2() {
  homeDisplayCount += 2;
  homeDisplayEL.textContent = homeDisplayCount;
}

function homePlus3() {
  homeDisplayCount += 3;
  homeDisplayEL.textContent = homeDisplayCount;
}

function guestPlus1() {
  guestDisplayCount += 1;
  guestDisplayEl.textContent = guestDisplayCount;
}

function guestPlus2() {
  guestDisplayCount += 2;
  guestDisplayEl.textContent = guestDisplayCount;
}

function guestPlus3() {
  guestDisplayCount += 3;
  guestDisplayEl.textContent = guestDisplayCount;
}

function newGame() {
  homeDisplayEL.textContent = 0;
  guestDisplayEl.textContent = 0;
}
