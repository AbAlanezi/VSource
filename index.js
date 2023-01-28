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
        icon.setAttribute("onclick", "favorite(this)")
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



function favorite(fuvrit){
  arr = localStorage.getItem('favouriteCard')
  if(arr != null) arr = arr.split(",");
  fuvrit.classList.toggle("crimson");
  fuvrit = fuvrit.parentElement.lastChild.firstChild.textContent
console.log(arr, fuvrit);

  if (arr == null) {
    let arrX = []
    console.log("(arr == null");
    arrX.push(fuvrit)
    localStorage.setItem('favouriteCard', arrX);
    

  }else{
    if(!arr.includes(fuvrit)){
      console.log("!arr.includes(fuvrit)");
      arr.push(fuvrit)
      localStorage.setItem('favouriteCard', arr);
    }else{
      console.log("else");
      arr.splice(arr.indexOf(fuvrit), 1)
      localStorage.setItem('favouriteCard', arr);
    }
}
  console.log(fuvrit)
}

function isLiked(like, icon) {
  // console.log(like, icon);
  arr = localStorage.getItem('favouriteCard')
  if(arr != null) arr = arr.split(",");
  console.log(arr);
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

btnToggleNav.addEventListener("click", () => {
  nav.classList.toggle("active");
  btnToggleNav.classList.toggle("active");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
// navbar responsive end
