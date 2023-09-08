let cardEl = document.getElementById("cardId");
let linkEl = document.getElementById("galleryLink")
let btnPress = [false,false,false,false,false];

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
    btnPress[0] = true;
  });
buttonTwo.addEventListener("click", function () {
    cardEl.className = "card"
    youngDad.style.display = "block";
    btnPress[1] = true;
  });
buttonThree.addEventListener("click", function () {
    cardEl.className = "card"
    babyDad.style.display = "block";
    btnPress[2] = true;
  });
buttonFour.addEventListener("click", function () {
    cardEl.className = "card"
    exploreDad.style.display = "block";
    btnPress[3] = true;
  });
buttonFive.addEventListener("click", function () {
    cardEl.className = "card"
    zuzuDad.style.display = "block";
    btnPress[4] = true;
  });
  

duoDad.addEventListener("click", function () {
    duoDad.style.display = "none";
    checkBtnPress();
  });
youngDad.addEventListener("click", function () {
    youngDad.style.display = "none";
    checkBtnPress();
  });
babyDad.addEventListener("click", function () {
    babyDad.style.display = "none";
    checkBtnPress();
  });
exploreDad.addEventListener("click", function () {
    exploreDad.style.display = "none";
    checkBtnPress();
  });
zuzuDad.addEventListener("click", function () {
    zuzuDad.style.display = "none";
    checkBtnPress();
  });
  
  function checkBtnPress () {
       if (btnPress.every(checkTrue))
        linkEl.style.display = "block"
      
  }

  function checkTrue(btnPress) {
    return btnPress === true;
  }