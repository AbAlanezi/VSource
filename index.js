//fetch data from the API

const getApi = (apiLink) => {
  return new Promise((res, rej) => {
    let XHR = new XMLHttpRequest();
    XHR.onload = function () {
      if (this.readyState == 4 && this.status == 200) {
        res(JSON.parse(this.responseText));
      } else {
        rej(Error("Api Is Failed"));
      }
    };

    XHR.open("GET", apiLink);
    XHR.send();
  });
};

// creat loop and card for data
const fruit_cards = document.getElementById("fruit-cards");
console.log(fruit_cards);
function getFruit(val) {
  getApi("./vitamins.json")
    .then((data) => {
      // console.log(data[0])
      // console.log(data[0][val].food)
      // console.log(data[0][val].pic)
      let foodArr = data[0][val].food;
      let picArr = data[0][val].pic;
      let txtArr = data[0][val].txt;

      fruit_cards.innerText = "";
      for (i = 0; i < foodArr.length; i++) {
        let card = document.createElement("div");
        card.className = "card";
        fruit_cards.append(card);

        let icon = document.createElement("i");
        icon.className = "fa-solid fa-heart";
        icon.setAttribute(
          "onclick",
          "favorite(this.parentElement.lastChild.firstChild.textContent)"
        );
        card.append(icon);

        let img = document.createElement("img");
        img.className = "card-img-top";
        card.append(img);
        img.setAttribute("src", picArr[i]);

        let cardBody = document.createElement("div");
        cardBody.className = "card-body";
        card.append(cardBody);

        let h5 = document.createElement("h5");
        h5.className = "card-title";
        cardBody.append(h5);
        h5.textContent = foodArr[i];

        let txt = document.createElement("p");
        txt.className = "card-text";
        cardBody.append(txt);
        txt.textContent = txtArr[i];
      }
      cardsGroup();

      // console.log(data)
    })
    .catch((rej) => {
      console.error(rej);
    });
}

function cardsGroup() {
  let fav = document.querySelectorAll(".fa-heart");
  fav.forEach((e) =>
    e.addEventListener("click", (e) => {
      e.currentTarget.classList.toggle("crimson");
    })
  );
}

let arr = [];
function favorite(fuvrit) {
  // let con = JSON.stringify(fuvrit.inner)
  if (!arr.includes(fuvrit)) {
    arr.push(fuvrit);
    localStorage.setItem("favouriteCard", arr);
  }
  console.log(fuvrit);
}
//
const nav = document.querySelector("nav");
const btnToggleNav = document.querySelector(".hamburger-menu");
const form = document.querySelector(".hero-gauche form");

// navbar responsive start
btnToggleNav.addEventListener("click", () => {
  nav.classList.toggle("active");
  btnToggleNav.classList.toggle("active");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
// navbar responsive end
