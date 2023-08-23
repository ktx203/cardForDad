var cardEl = document.getElementById("cardId");

cardEl.addEventListener("click", call);
function call() {
    if (cardEl.className === "openCard"){
        cardEl.className = "card";
    } else {
        cardEl.className = "openCard";
    }
  }