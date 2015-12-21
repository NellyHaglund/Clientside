var burgersWithPrice = [
    "pepper 19.90",
    "jum 19.90",
    "cheese 19.90",
    "simple 19.90",
    "maximum 19.90",
    "sallad 19.90",
    "onion 19.90"
];

var subsWithPrice = [
    "bigbang 39.90",
    "jum 19.90",
    "cheese 29.90",
    "whoopy 19.90",
    "green 15.90",
    "filled 199.90",
    "onion 19.90"
];

var daysOfTheWeek = [
      "monday",
      "tuseday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
            "sunday"
];
var body = document.getElementsByTagName('body');

fillHtmlPageWithBurgers();
fillHtmlPageWithSubs();


function fillHtmlPageWithBurgers() {

    var newHeading = document.createElement('h1');
    newHeading.setAttribute('id', 'ad');
    newHeading.innerHTML = "Menu!";
    body[0].appendChild(newHeading);
    var container = document.createElement('div');
    container.setAttribute('id', 'burgers');
    body[0].appendChild(container);
 
    var menuBurgers = document.createElement('h2');
    menuBurgers.innerHTML = "Delicious burgers";
    container.appendChild(menuBurgers);

    for (var i = 0; i < burgersWithPrice.length; i++) {

        var burgerSplit = burgersWithPrice[i].split(' ');

        var article = document.createElement('article');
        container.appendChild(article);

        var fieldset = document.createElement('fieldset');
        article.appendChild(fieldset);

        var legend = document.createElement('legend');
        legend.innerHTML = daysOfTheWeek[i] + " Burger";

        var h3 = document.createElement('h3');
        h3.innerHTML = burgerSplit[0] + " Burger";

        var span = document.createElement('span');

        var priceDiv = document.createElement('div');
        priceDiv.setAttribute('class', 'price');
        priceDiv.innerHTML = burgerSplit[1];

        fieldset.appendChild(legend);
        fieldset.appendChild(h3);
        fieldset.appendChild(span);
        fieldset.appendChild(priceDiv);

        var element = document.createElement('img');
        element.setAttribute('src', 'Images/Hamburger.png');
        span.appendChild(element);
    }
}

function fillHtmlPageWithSubs() {
    var container = document.createElement('div');
    container.setAttribute('id', 'subs');
    body[0].appendChild(container);

    var menuSubs = document.createElement('h2');
    menuSubs.innerHTML = "Delicious subs";
    container.appendChild(menuSubs);

    for (var i = 0; i < subsWithPrice.length; i++) {

        var subSplit = subsWithPrice[i].split(' ');

        var article = document.createElement('article');
        container.appendChild(article);

        var fieldset = document.createElement('fieldset');
        article.appendChild(fieldset);

        var legend = document.createElement('legend');
        legend.innerHTML = daysOfTheWeek[i] + " Sub";

        var h3 = document.createElement('h3');
        h3.innerHTML = subSplit[0] + " Sub";

        var span = document.createElement('span');

        var priceDiv = document.createElement('div');
        priceDiv.setAttribute('class', 'price');
        priceDiv.innerHTML = subSplit[1];

        fieldset.appendChild(legend);
        fieldset.appendChild(h3);
        fieldset.appendChild(span);
        fieldset.appendChild(priceDiv);

        var element = document.createElement('img');
        element.setAttribute('src', 'Images/Subs.png');
        span.appendChild(element);
    }
}