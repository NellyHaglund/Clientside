var burgersWithPrice = [
    "pepper 19.90",
    "jum 19.90",
    "cheese 19.90",
    "simple 19.90",
    "maximum 19.90",
    "sallad 19.90",
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

fillHtmlPageWithBurgers();

function fillHtmlPageWithBurgers() {

    var body = document.getElementsByTagName('body');
    var newHeading = document.createElement('h1');
    newHeading.setAttribute('id', 'ad');
    newHeading.innerHTML = "Menu!";
    body[0].appendChild(newHeading);
    var menuTab = document.createElement('h2');
    menuTab.innerHTML = "Delicious burgers";
    body[0].appendChild(menuTab);

    for (var i = 0; i < burgersWithPrice.length; i++) {

        var burgerSplit = burgersWithPrice[i].split(' ');

        var article = document.createElement('article');
        body[0].appendChild(article);

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