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
handleRequest();

//Constructor function
function Product(dayOfTheWeek, name, price, size, img) {
    this.dayOfTheWeek = dayOfTheWeek;
    this.name = name;
    this.price = calculatePrice(price, dayOfTheWeek);
    this.size = size;
    this.img = img;
}

var listOfProducts = new Array;


//Read json file - hamburgers

function handleRequest() {
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    request.open("GET", "JsonFiles/hamburger.json");

    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            var jsonHamburgers = JSON.parse(request.responseText);
            addProductFromJson(jsonHamburgers);
            addProductsToPage(jsonHamburgers.heading);
        }
    };
    request.send();
}

function addProductFromJson(jsonHamburgers) {
    for (var i = 0; i < jsonHamburgers.hamburgers.length; i++) {
        listOfProducts.push(new Product(jsonHamburgers.hamburgers[i].dayOfTheWeek,
            jsonHamburgers.hamburgers[i].name,
            jsonHamburgers.hamburgers[i].price,
            jsonHamburgers.hamburgers[i].size,
            jsonHamburgers.hamburgers[i].img));
    }
}

function calculatePrice(price, dayOfTheWeek) {
    var newPrice = price;
    //Reduce 30% while happy hours
    var hour = new Date().getHours();
    if (hour >= 17 && hour <= 19) {
        newPrice = (price * 0.7);
    }

    //Reduce exta 20% if burger is burger of the day
    var currentDay = new Date().getDay();

    //for (var i = 0; i < daysOfTheWeek.length; i++) {
    if (currentDay == dayOfTheWeek) {
        newPrice *= 0.8;
    }
    //}
    return newPrice;
}

function addProductsToPage(heading) {

    var daysOfTheWeek = [
        "sunday",
        "monday",
        "tuseday",
        "wednesday",
        "thursday",
        "friday",
        "saturday"
    ];
    var container = document.getElementById("burgersPlace");
    var h2 = document.createElement("h2");
    h2.innerHTML = heading;
    container.appendChild(h2);
    for (var i = 0; i < listOfProducts.length; i++) {
        var article = document.createElement("article");
        container.appendChild(article);
        var fieldset = document.createElement("fieldset");
        article.appendChild(fieldset);
        var legend = document.createElement("legend");
        legend.innerHTML = (daysOfTheWeek[listOfProducts[i].dayOfTheWeek]) + " Burger";
        fieldset.appendChild(legend);
        var h3 = document.createElement("h3");
        h3.innerHTML = listOfProducts[i].name;
        fieldset.appendChild(h3);
        var span = document.createElement("span");
        fieldset.appendChild(span);
        var image = document.createElement("img");
        image.setAttribute("src", listOfProducts[i].img);
        span.appendChild(image);
        var price = document.createElement('div');
        price.setAttribute('class', 'price');
        price.setAttribute('id', daysOfTheWeek[listOfProducts[i].dayOfTheWeek]);
        price.innerHTML = listOfProducts[i].price;
        fieldset.appendChild(price);
    }
}