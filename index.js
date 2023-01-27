
const getApi = (apiLink)=>{
    return new Promise((res, rej)=>{
      let XHR = new XMLHttpRequest();
      XHR.onload = function() {
        if(this.readyState == 4 && this.status == 200){
          res(JSON.parse(this.responseText))
        }else{
          rej(Error("Api Is Failed"))
        }
      }
  
      XHR.open("GET",apiLink);
      XHR.send();
    });
  }


let cards = document.getElementById("cards")
  function getFruit(val) {

    getApi("./vitamins.json").then((data)=>{
      // console.log(data[0])
      // console.log(data[0][val].food)
      // console.log(data[0][val].pic)
      let foodArr = data[0][val].food
      let picArr = data[0][val].pic
      let txtArr = data[0][val].txt

      cards.innerText = ""
      for(i = 0; i < foodArr.length; i++){
        let col = document.createElement("div");
        col.className = "col"
        cards.append(col)

        let card = document.createElement("div");
        card.className = "card"
        col.append(card);

        let icon = document.createElement("i")
        icon.className = "fa-solid fa-heart"
        card.append(icon);

        let img = document.createElement("img");
        img.className = "card-img-top"
        card.append(img);
        img.setAttribute("src", picArr[i])

        let cardBody = document.createElement("div");
        cardBody.className = "card-body"
        card.append(cardBody);

        let h5 = document.createElement("h5");
        h5.className = "card-title"
        cardBody.append(h5);
        h5.textContent = foodArr[i]

         let txt = document.createElement("p");
         txt.className = "card-text"
         cardBody.append(txt);
         txt.textContent = txtArr[i]
        }
        cardsGroup()
  
      // console.log(data)
    }).catch((rej) => {
      console.error(rej);
    });

  }


function cardsGroup() {
  let fav = document.querySelectorAll(".fa-heart")
  fav.forEach(e=> e.addEventListener("click",e => {

    e.currentTarget.classList.toggle("crimson")
    
  }))
}