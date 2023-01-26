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

  getApi("./vitamins.json").then((data)=>{
    // data.length = 5;
    for(i in data){
       console.log(data[i])
       console.log(data[i]["A"].food)
       console.log(data[i]["A"].pic)
       console.log(data[i]["A"].dailyValue)

       let foodArr = data[i]["A"].food
       let picArr = data[i]["A"].pic
       let img = document.createElement("img");
       img.setAttribute("src", picArr[0])
       document.body.append(img);
      }

    console.log(data)
  }).catch((rej) => {
    console.error(rej);
  });


  // function fetch data

  function getFruit(){
   
  }
