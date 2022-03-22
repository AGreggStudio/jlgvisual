let myImg = document.getElementById("img1");
myImg.addEventListener("click", () => myImg.classList.toggle("enlarge"));

/*
The code above is using ES6 (the newest version of JavaScript) and and a thing called an arrow function. If you don't get it, here is the "normal way" to do it. It will do exactly the same as the above code.

var myImg = document.getElementById("img1");
myImg.addEventListener("click", function(){
  myImg.classList.toggle("enlarge")
});

*/