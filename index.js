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



  function getFruit(val) {

    getApi("./vitamins.json").then((data)=>{
      console.log(data.length);
      console.log(data[0])
      console.log(data[0][val].food)
      console.log(data[0][val].pic)
      let foodArr = data[0][val].food
      let picArr = data[0][val].pic
      for(i = 0; i < foodArr.length; i++){

         let txt = document.createElement("p");
         document.body.append(txt);
         txt.textContent = foodArr[i]
         
         let img = document.createElement("img");
         document.body.append(img);
         img.setAttribute("src", picArr[i])
        }
  
      console.log(data)
    }).catch((rej) => {
      console.error(rej);
    });

  }

console.log(["papaya", "Mango", "Cantaloupe", "Grapefruit", "Watermelon", "Fresh apricots", "Tangerine", "Nectarine", "Guava"].sort())