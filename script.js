


let url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes/'
let url1 = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes/search/work'
let url2 = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes/search/wife'
let url3 = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes/search/food'
let workIndex = 0;
let wifeIndex = 0;
let foodIndex = 0;


let button1 = document.querySelector(".button1") 
let text = document.querySelector(".text")

button1.addEventListener('click', activity1)

function activity1(){
    fetch(url)
      .then(function(res){
        console.log("first", res);
        return res.json();
})
      .then(data=>{
        console.log("first ok", data);
        text.innerText = data;

})

}

let button2 = document.querySelector(".button2") 
let text1 = document.querySelector(".text")

button2.addEventListener('click', activity)

function activity(){
    fetch(url1)
      .then(function(res){
        console.log("it works", res);
        return res.json();
})
.then(data=>{
  
  console.log("it works", data);
  text1.innerText = data[workIndex];
  if(workIndex <= 4){
    workIndex++
  }
  else{
    workIndex = 0;
  }

})


}

let button3 = document.querySelector(".button3") 
let text2 = document.querySelector(".text")

button3.addEventListener('click', activity2)

function activity2(){
    fetch(url2)
      .then(function(res){
        console.log("it works", res);
        return res.json();
})
.then(data=>{
  
  console.log("it works", data);
  text1.innerText = data[wifeIndex];
  if(wifeIndex <= 4){
    wifeIndex++
  }
  else{
    wifeIndex = 0;
  }

})


}

let button4 = document.querySelector(".button4") 
let text3 = document.querySelector(".text")

button4.addEventListener('click', activity3)

function activity3(){
    fetch(url3)
      .then(function(res){
        console.log("it works", res);
        return res.json();
})
.then(data=>{
  
  console.log("it works", data);
  text1.innerText = data[foodIndex];
  if(foodIndex <= 4){
    foodIndex++
  }
  else{
    foodIndex = 0;
  }

})


}







    
