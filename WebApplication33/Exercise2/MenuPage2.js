/*
1. create 7 hamburger objects using literal notation 
   use attributes name, size, dayOfTheWeek and price(page. 104 in book)
   Please use the same html syntax of an article as in exercise1.
2. create Product objects with constructor notation, 
   use the parameters name, size, price, dayOfTheWeek  (page. 108 in book)
 
3. add 7 drinks to the page using Product.
4. add 7 pizzas to the page using Product.
5. add 7 subs to the page using Product.
6. GO to file FixIt.html
*/
//DRINKS
//Subs

//Constructor function
function Product(dayOfTheWeek, name, price, size, img) {
    this.dayOfTheWeek = dayOfTheWeek;
    this.name = name;
    this.price = calculatePrice(price, dayOfTheWeek);
    this.size = size;
    this.img = img;
}

//Read json file - hamburgers
var request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open("GET", "JsonFiles/hamburger.json");

request.onreadystatechange = function () {

    if (request.readyState === 4 && request.status === 200) {
        var jsonHamburgers = JSON.parse(request.responseText);

    }
}
request.send();

function calculatePrice(price, dayOfTheWeek) {
    var newPrice = price;

    //Reduce 30% while happy hours
    var hour = new Date().getHours();
    if (hour >= 17 && hour <= 19) {
        newPrice = (price * 0.7);
    }

    var daysOfTheWeek = [
     "sunday",
     "monday",
     "tuseday",
     "wednesday",
     "thursday",
     "friday",
     "saturday"
    ];

    //Reduce exta 20% if burger is burger of the day
    var currentDay = new Date().getDay();

    for (var i = 0; i < daysOfTheWeek.length; i++) {
        if (i === dayOfTheWeek && daysOfTheWeek[i] === dayOfTheWeek) {
            newPrice *= 0.8;
        }
    }
    return newPrice;
}