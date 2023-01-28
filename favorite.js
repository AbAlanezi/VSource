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

let favArr = localStorage.getItem('favouriteCard')
// favArr = favArr.split(",")
let sec = document.querySelector("section")

console.log(favArr)

  getApi("./vitamins.json")
    .then((data) => {
    //   console.log(Object.keys(data[0]))
      // console.log(data[0][val].food)
      // console.log(data[0][val].pic)
    //   let foodArr = data[0][val].food;
    //   let picArr = data[0][val].pic;
    //   let txtArr = data[0][val].txt;

    let vitaminsArr = Object.keys(data[0])

    //   fruit_cards.innerText = "";
      for (i = 0; i < vitaminsArr.length; i++) {
        for (j = 0; j < data[0][vitaminsArr[i]].food.length; j++) {
            console.log(data[0][vitaminsArr[j]].food);
            for (let k = 0; k < favArr.length; k++) {
                if (data[0][vitaminsArr[j]].food[j]== favArr[k]) {
        console.log(data[0][vitaminsArr[j]].food[j], favArr[k]);

                    favArr.shift()
                    console.log(true);
                }
                
            }
            
        }
      }
    //   cardsGroup();

      // console.log(data)
    })
    .catch((rej) => {
      console.error(rej);
    });

    // let card = document.createElement("div");
    // card.className = "card";
    // fruit_cards.append(card);

    // let icon = document.createElement("i")
    // icon.className = "fa-solid fa-heart"
    // icon.setAttribute("onclick", "favorite(this.parentElement.lastChild.firstChild.textContent)")
    // card.append(icon);

    // let img = document.createElement("img");
    // img.className = "card-img-top";
    // card.append(img);
    // img.setAttribute("src", picArr[i]);

    // let cardBody = document.createElement("div");
    // cardBody.className = "card-body";
    // card.append(cardBody);

    // let h5 = document.createElement("h5");
    // h5.className = "card-title";
    // cardBody.append(h5);
    // h5.textContent = foodArr[i];

    // let txt = document.createElement("p");
    // txt.className = "card-text";
    // cardBody.append(txt);
    // txt.textContent = txtArr[i];