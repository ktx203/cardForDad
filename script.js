var cardEl = document.getElementById("cardId");

cardEl.addEventListener("click", call);
function call() {
    if (cardEl.className === "card"){
        cardEl.className = "openCard";
    } else {
         cardEl.className = "card";}
  }

const buttonOne = document.getElementById("giftOne");
const buttonTwo = document.getElementById("giftTwo");
const buttonThree = document.getElementById("giftThree");
const buttonFour = document.getElementById("giftFour");
const buttonFive = document.getElementById("giftFive");
const duoDad = document.getElementById("duoDad");
const youngDad = document.getElementById("youngDad");
const babyDad = document.getElementById("babyDad");
const exploreDad = document.getElementById("exploreDad");
const zuzuDad = document.getElementById("zuzuDad");


buttonOne.addEventListener("click", function () {
    cardEl.className = "card"
    duoDad.style.display = "block";
  });
buttonTwo.addEventListener("click", function () {
    cardEl.className = "card"
    youngDad.style.display = "block";
  });
buttonThree.addEventListener("click", function () {
    cardEl.className = "card"
    babyDad.style.display = "block";
  });
buttonFour.addEventListener("click", function () {
    cardEl.className = "card"
    exploreDad.style.display = "block";
  });
buttonFive.addEventListener("click", function () {
    cardEl.className = "card"
    zuzuDad.style.display = "block";
  });
  

duoDad.addEventListener("click", function () {
    duoDad.style.display = "none";
  });
youngDad.addEventListener("click", function () {
    youngDad.style.display = "none";
  });
babyDad.addEventListener("click", function () {
    babyDad.style.display = "none";
  });
exploreDad.addEventListener("click", function () {
    exploreDad.style.display = "none";
  });
zuzuDad.addEventListener("click", function () {
    zuzuDad.style.display = "none";
  });
  