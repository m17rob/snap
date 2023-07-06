let count = 6;
let countCheck = parseInt(localStorage.getItem("countCheck")) || 1;
let buttonPressed = false;

if (count === countCheck) {
  document.querySelector("#dot").classList.remove("show");
} else {
  document.querySelector("#dot").classList.add("show");
}

function onClick() {
  if (!buttonPressed) {
    document.getElementById("bell-icon").classList.add("pressed");
    document.querySelector("#dot").classList.remove("show");
    countCheck = count;
    localStorage.setItem("countCheck", countCheck);
    buttonPressed = true;
  }
}

document.getElementById("bell-icon").addEventListener("click", onClick);

document.querySelector('#bell-icon').addEventListener('click', function() {
    document.querySelector('.card').classList.toggle('hide');
  });
  
  document.body.addEventListener('click', function(event) {
    if (!event.target.closest('.card') && !event.target.closest('#bell-icon')) {
      document.querySelector('.card').classList.add('hide');
    }
  });
  



var cardInfo = {};

function addCardNot(day, month, author, title, description, time) {
  var cardContent = document.querySelector(".card__content");

  var cardNot = document.createElement("div");
  cardNot.classList.add("cardNot");

  var left = document.createElement("div");
  left.classList.add("left");

  var cardTimeC = document.createElement("div");
  cardTimeC.classList.add("cardNot__timeC");

  var cardDay = document.createElement("div");
  cardDay.classList.add("card__timeC--day");
  cardDay.textContent = day;
  var cardMonth = document.createElement("div");
  cardMonth.classList.add("card__timeC--month");
  cardMonth.textContent = month;

    var cardTime = document.createElement("div");
    cardTime.classList.add("cardNot__time");
    cardTime.textContent = time;

  cardTimeC.appendChild(cardDay);
  cardTimeC.appendChild(cardMonth);
   cardTimeC.appendChild(cardTime);

  left.appendChild(cardTimeC);

  var bgCard = document.createElement("div");
  bgCard.classList.add("bgCard");

  


  var cardRight = document.createElement("div");
  cardRight.classList.add("cardNot__right");
  var cardTitle = document.createElement("div");
  cardTitle.classList.add("cardNot__right--title");
  cardTitle.textContent = title;
  var cardDescription = document.createElement("div");
  cardDescription.classList.add("cardNot__right--txt");
  cardDescription.textContent = description;
  cardRight.appendChild(cardTitle);
  cardRight.appendChild(cardDescription);

  bgCard.appendChild(cardRight);

  cardNot.appendChild(left);
  cardNot.appendChild(bgCard);


 

  cardContent.appendChild(cardNot);

  var index = Object.keys(cardInfo).length;
  cardInfo[index] = {
    "day": day,
    "month": month,
    "author": author,
    "title": title,
    "description": description,
    "time": time
  };
}


addCardNot("5", "Apr.", "ADMIN", "Salut", "test", "00:00")
addCardNot("30", "Mar.", "ADMIN", "Noi campionate", "Noi campionate adaugate: Premier league, Ligue One, La Liga", "17:50")
addCardNot("30", "Mar.", "ADMIN", "Noua stire", "test", "17:49")

  