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
favArr = favArr.split(",")
if(favArr.includes("")) favArr.shift();
let sec = document.getElementById("fruit-cards")

console.log(favArr)

  getApi("./vitamins.json")
    .then((data) => {
    //   console.log(Object.keys(data[0]))
      // console.log(data[0][val].food)
      // console.log(data[0][val].pic)
      

    let vitaminsArr = Object.keys(data[0])

      sec.innerText = "";
      for (i = 0; i < vitaminsArr.length; i++) {
        console.log(vitaminsArr[i]);
      let foodArr = data[0][vitaminsArr[i]].food;
      let picArr = data[0][vitaminsArr[i]].pic;
      let txtArr = data[0][vitaminsArr[i]].txt;
        
        for (j = 0; j < data[0][vitaminsArr[i]].food.length; j++) {
            console.log(data[0][vitaminsArr[i]].food[j]);
            for (let k = 0; k < favArr.length; k++) {
                if (data[0][vitaminsArr[i]].food[j] == favArr[k]) {

                    let card = document.createElement("div");
                    card.className = "card";
                    sec.append(card);

                    let icon = document.createElement("i")
                    icon.className = "fa-solid fa-heart crimson"
                    icon.setAttribute("onclick", "favorite(this)")
                    isLiked(icon)
                    card.append(icon);

                    let img = document.createElement("img");
                    img.className = "card-img-top";
                    card.append(img);
                    img.setAttribute("src", picArr[j]);

                    let cardBody = document.createElement("div");
                    cardBody.className = "card-body";
                    card.append(cardBody);

                    let h5 = document.createElement("h5");
                    h5.className = "card-title";
                    cardBody.append(h5);
                    h5.textContent = foodArr[j];

                    let txt = document.createElement("p");
                    txt.className = "card-text";
                    cardBody.append(txt);
                    txt.textContent = txtArr[j];

                    favArr.splice(favArr.indexOf(favArr[k]), 1)
                }
                
            }
            
        }
        
    }
    let h1 = document.getElementById("h1-favpage")
    if(!sec.innerText){
      
       h1.append('No Favorites Fruits')
    }else{
        h1.append('Favorites Fruits ')
    }

      // console.log(data)
    })
    .catch((rej) => {
      console.error(rej);
    });

    let arr = localStorage.getItem('favouriteCard')
if(arr != null) arr = arr.split(",");

function favorite(fuvrit){
    fuvrit.classList.toggle("crimson")
    unlike(fuvrit)
    fuvrit = fuvrit.parentElement.lastChild.firstChild.textContent
    console.log(arr, fuvrit);
    
        if (arr == null) {
        let arr = []
        arr.push(fuvrit)
        localStorage.setItem('favouriteCard', arr);
        }else{
        if(!arr.includes(fuvrit)){
            arr.push(fuvrit)
            localStorage.setItem('favouriteCard', arr);
        }else{
            arr.splice(arr.indexOf(fuvrit), 1)
            localStorage.setItem('favouriteCard', arr);
        }
    }
        console.log(fuvrit)
    }
    
    function isLiked(icon) {
        // console.log(icon);
        arr = localStorage.getItem('favouriteCard')
        if(arr != null) arr = arr.split(",");
        console.log(arr);
        if (arr != null) {
          for (let i = 0; i < arr.length; i++) {
            // console.log(arr[i] == like);

          }
        }
        
      }



// form.addEventListener("submit", (e) => {
//   e.preventDefault();
// });

function unlike(icon) {
    if(icon.classList.contains("fa-regular")){
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid");
    }else{
    icon.classList.add("fa-regular");
    icon.classList.remove("fa-solid");
    }
}
