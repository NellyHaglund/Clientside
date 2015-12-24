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
handleHamburgerRequest();
handleSubRequest();
handlePizzaRequest();
handleDrinkRequest();

//Constructor function


//Read json file - hamburgers
function handleHamburgerRequest() {
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
            addProductFromJson(jsonHamburgers.hamburgers);
            addProductsToPage(jsonHamburgers.heading);
        }
    };
    request.send();
}

//Read json file - subs
function handleSubRequest() {
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    request.open("GET", "JsonFiles/subs.json");

    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            var jsonSubs = JSON.parse(request.responseText);
            addProductFromJson(jsonSubs.subs);
            addProductsToPage(jsonSubs.heading);
        }
    };
    request.send();
}
//Read json file - Pizza
function handlePizzaRequest() {
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    request.open("GET", "JsonFiles/pizza.json");

    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            var jsonPizza = JSON.parse(request.responseText);
            addProductFromJson(jsonPizza.pizza);
            addProductsToPage(jsonPizza.heading);
        }
    };
    request.send();
}

//Read json file - Drinks
function handleDrinkRequest() {
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    request.open("GET", "JsonFiles/drinks.json");

    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            var jsonDrinks = JSON.parse(request.responseText);
            addProductFromJson(jsonDrinks.drinks);
            addProductsToPage(jsonDrinks.heading);
        }
    };
    request.send();
}

