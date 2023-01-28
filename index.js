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

        let icon = document.createElement("i")
        icon.className = "fa-solid fa-heart"
        isLiked(foodArr[i], icon)
        icon.setAttribute("onclick", "favorite(this.parentElement.lastChild.firstChild.textContent)")
        // icon.setAttribute("value", "favorite(this.value)")
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
      console.log(arr);

      // console.log(data)
    })
    .catch((rej) => {
      console.error(rej);
    });
}

let arr = localStorage.getItem('favouriteCard')
arr = arr.split(",")

function favorite(fuvrit){
  // fuvrit = fuvrit.cloneNode(true)
  console.log(fuvrit, arr);
  // arr = arr.split(",")
  
  if(!arr.includes(fuvrit)){
    arr.push(fuvrit)
    localStorage.setItem('favouriteCard', arr);
  }else if(arr.includes(fuvrit)){
     arr.splice(arr.indexOf(fuvrit), 1)
  }
  console.log(fuvrit)
  }
  

function cardsGroup() {
  let fav = document.querySelectorAll(".fa-heart");
  fav.forEach((e) =>
    e.addEventListener("click", (e) => {
      e.currentTarget.classList.toggle("crimson");
    })
  );
}

function isLiked(like, icon) {
  console.log(like);
  if (arr != null) {
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] == like){
        icon.classList.toggle("crimson");
      }
    }
  }
  
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
