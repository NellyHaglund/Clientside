//happy hour logic:
var prices = document.getElementsByClassName("price");

var date = new Date().getHours();

function happyHourPrice() {
    if (date >= 17 && date <= 19) {
        for (var i = 0; i < prices.length; i++) {
            var price = Number(prices[i].innerHTML);
            var newPrice = adjustPrice(price * 0.7);
            prices[i].innerHTML = newPrice;
        }
    }
}

//Method calls:

happyHourPrice();
addBurgerImages();
todaysOffer();

//Adjust price function: (add .toFixed(2) for 2 decimals)

function adjustPrice(price) {
    return price.toFixed(2);
}


/*Add pictures function to span:*/

function addBurgerImages() {
    var spanElements = document.getElementsByTagName('span');
    console.log(spanElements);
    for (var i = 0; i < spanElements.length; i++) {
        var element = document.createElement('img');
        element.setAttribute('src', 'Images/Hamburger.png');
        spanElements[i].innerHTML = "";
        spanElements[i].appendChild(element);
    }
}

/*Add todays offer function. 
Make price background red. 
Reduce price by another 20%:*/

function todaysOffer() {
    var daysOfTheWeek = [
        "sunday",
        "monday",
        "tuseday",
        "wednesday",
        "thursday",
        "friday",
        "saturday"
    ];

    var currentDay = new Date().getDay();

    for (var i = 0; i < daysOfTheWeek.length; i++) {
        if (i == currentDay) {
            var element = document.getElementById(daysOfTheWeek[i]);
            element.setAttribute('class', 'todaysOfferPrice');
            var price = element.innerHTML;
            var newPrice = price * 0.80;
            element.innerHTML = newPrice;
        }
    }
}


/*Stretch exercises: (increasing tuffness for each number!)

 1. Automate todays offer to be dependent of the day of the week
        Already done?
 2. Create an HTML page with an empty body and then fill it with help from JS.
    -use array with names and price of the burgers seperated by a simple "space"
    -use a loop to add all the html with different burgers
    -Add more pictures on a creative way...
 3. Add arrays for all in point 3 and show the products.
    Add a simulair menu under the burgers with a new <h2> for:
    -subs
    -sausages
    -pizza
    -drinks
    
 5. Add a Birthday function for the restaurant so that the entire week 
    the restaurant has its birthday the price is set to 14.99 per default.
    
*/