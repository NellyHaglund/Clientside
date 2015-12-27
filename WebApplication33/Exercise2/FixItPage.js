/*

For each of the following aplicable exercise below you should present a box on the page 
with an alert that shows the result when the box is clicked!

###Window object at page 124:###
1. Link the script with FixIt.hmtl
.........................................2. Add som tags that doesn't change the visual part of the paragraph.
3.Play with the properties at page 124 in the book. 
  Use properties creatively to display things at the html page
  */
var box = document.createElement("div");
box.style.border = "2px solid black";
box.style.height = "100px";
box.style.width = "300px";
box.innerHTML = "Click me to see some result from properties";
var body = document.getElementsByTagName("body");
body[0].appendChild(box);
box.addEventListener("click", properties, true);

function properties() {
    var arrayToAlert = new Array();
    arrayToAlert.push("Inner height of window (excluding browser UI): " + window.innerHeight);
    arrayToAlert.push("\r\nInner width of window (excluding browser UI): " + window.innerWidth);
    arrayToAlert.push("\r\nHorizontally scroll distance in pixles: " + window.pageXOffset);
    arrayToAlert.push("\r\nVertically scroll distance in pixles: " + window.pageYOffset);
    arrayToAlert.push("\r\nX-coordinates of pointer in pixles: " + window.screenX);
    arrayToAlert.push("\r\nY-coordinates of pointer in pixles: " + window.screenY);
    arrayToAlert.push("\r\nLocal file path/current URL: " + window.location);
    arrayToAlert.push("\r\nDocument object - that represents current page in window: " + window.document);
    arrayToAlert.push("\r\nHistory object - back() / forward() - number of URLs in history list : " + window.history.length);
    arrayToAlert.push("\r\nScreen object : " + window.screen);
    arrayToAlert.push("\r\nScreen object - width (including UI, all) : " + window.screen.width);
    arrayToAlert.push("\r\nScreen object - height (including UI, all) : " + window.screen.height);
    alert(arrayToAlert);

};
/*
4.Add a stylesheet that displays the changed words in fat font and in red.
*/
var paragraphOne = document.getElementById("one");
var spansInParagraphOne = paragraphOne.getElementsByTagName("span");
paragraphOne.addEventListener("click", setClassToSpan, true);
function setClassToSpan() {
    for (var i = 0; i < spansInParagraphOne.length; i++) {
        spansInParagraphOne[i].setAttribute("class", "makeWordFatAndRed");
    }
}
/*
5. PLay with the Methods 
### DOM page 126:###
6. Play with the DOM-properties

### String objects page 128, 129: ###

7. Save the the text from the makeMeAnArray-paragraph into an array.
8. Use all the string methods and propertys allong with the array

### String objects page 132: ###
9. check if the 4th element in the array is a number

### Math page 134: ###
10. Round one of the numbers in the paragraph up/down
11. replace the 3rd word with PI then roud it to the nearest integer

### Date object###
12. Calculate how many days it's until your birthday and present it.
13. Calculate how many minutes old you are and present it.

Bonus exercises:
### Demo page 141:###
-Download the code to the book. Wipe the code from the js-file and rewrite it with the help from the book.
-For additional reading and training go to: http://www.w3schools.com/jsref/jsref_obj_string.asp
 and look at JS String, JS Number, JS Math and JS Date

*/