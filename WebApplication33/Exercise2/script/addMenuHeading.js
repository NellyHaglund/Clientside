addMenuHeading();

function addMenuHeading() {
    var body = document.getElementsByTagName("body");
    var heading = document.createElement("h1");
    heading.innerHTML = "MENU!";
    body[0].insertBefore(heading, body[0].firstChild);
}
