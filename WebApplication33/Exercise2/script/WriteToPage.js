function Product(dayOfTheWeek, name, price, size, img) {
    this.dayOfTheWeek = dayOfTheWeek;
    this.name = name;
    this.price = calculatePrice(price, dayOfTheWeek);
    this.size = size;
    this.img = img;
}

var listOfProducts = new Array;

function addProductFromJson(json) {
    for (var i = 0; i < json.length; i++) {
        listOfProducts.push(new Product(json[i].dayOfTheWeek,
            json[i].name,
            json[i].price,
            json[i].size,
            json[i].img));
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

    if (currentDay == dayOfTheWeek) {
        newPrice *= 0.8;
    }

    return Number(newPrice).toFixed(2);
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
    var currentDay = new Date().getDay();
    var headingSplit = heading.split(" ");
    var container = document.getElementById(headingSplit[1].toLowerCase() + "Place");
    var h2 = document.createElement("h2");
    h2.innerHTML = heading;
    container.appendChild(h2);
    for (var i = 0; i < listOfProducts.length; i++) {
        var article = document.createElement("article");
        container.appendChild(article);
        var fieldset = document.createElement("fieldset");
        article.appendChild(fieldset);
        var legend = document.createElement("legend");
        legend.innerHTML = daysOfTheWeek[listOfProducts[i].dayOfTheWeek] + " " + headingSplit[1].toLowerCase();
        fieldset.appendChild(legend);
        var h3 = document.createElement("h3");
        h3.innerHTML = listOfProducts[i].name;
        fieldset.appendChild(h3);
        var span = document.createElement("span");
        fieldset.appendChild(span);
        var image = document.createElement("img");
        image.setAttribute("src", listOfProducts[i].img);
        span.appendChild(image);
        var price = document.createElement("div");
        if (listOfProducts[i].dayOfTheWeek == currentDay) {
            price.setAttribute("class", "price todaysOfferPrice");

        } else {
            price.setAttribute("class", "price");
        }
        price.setAttribute("id", daysOfTheWeek[listOfProducts[i].dayOfTheWeek]);
        price.innerHTML = listOfProducts[i].price;
        fieldset.appendChild(price);
    }
    listOfProducts = new Array;
}