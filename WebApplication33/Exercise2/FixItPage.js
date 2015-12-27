/*

For each of the following aplicable exercise below you should present a box on the page 
with an alert that shows the result when the box is clicked!

###Window object at page 124:###
1. Link the script with FixIt.hmtl
.........................................2. Add som tags that doesn't change the visual part of the paragraph.
3.Play with the properties at page 124 in the book. 
  Use properties creatively to display things at the html page
  */

function addDiv(innerHtmlMessage, functionToAdd) {
    var box = document.createElement("div");
    box.setAttribute("class", "box");
    box.innerHTML = innerHtmlMessage;
    var body = document.getElementsByTagName("body");
    body[0].appendChild(box);
    box.addEventListener("click", functionToAdd, true);
}

addDiv("Click me to se some results from window-properties", properties);

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
*/
addDiv("Click me to see some result from methods", methods);

function methods() {
    alert("I'm a dialog box with message, you have to press OK to continue\r\n" +
        "Next: You will come to print mode (print()) and when you close that a new browser window will open ( window.open(url) )...");
    print();
    window.open("http://www.google.se", "_self");
};

/*
### DOM page 126:###
6. Play with the DOM-properties
*/
addDiv("Click me to see some result from DOM-properties", domProperties);

function domProperties() {
    var alertContent = new Array;
    alertContent.push("Title of current document: " + document.title);
    alertContent.push("\r\nDate on which this document was last modified: " + document.lastModified);
    alertContent.push("\r\nURL of current document: " + document.URL);
    alertContent.push("\r\nDomain of current document: " + document.domain);
    alert(alertContent);
}

/*
### String objects page 128, 129: ###

7. Save the the text from the makeMeAnArray-paragraph into an array.
*/

var makeMeAnArray_paragraph = document.getElementById("makeMeAnArray").innerHTML;
var array = makeMeAnArray_paragraph.split(" ");

/*
8. Use all the string methods and propertys allong with the array
*/
addDiv("Click me to see some result, depending on what index word has something will happen (switch/case)", playWithStringMethodsAndProperties);
var stringToAlert;
function playWithStringMethodsAndProperties() {
    for (var i = 0; i < array.length; i++) {
        switch (true) {
            case i % 2 === 0:
                stringToAlert += array[i].toUpperCase() + " ";
                break;
            case i % 8 === 0:
                stringToAlert += array[i].toLowerCase() + " ";
                break;
            case i % 2 === 3:
                stringToAlert += array.charAt(i) + " ";
                break;
            case i % 10 === 0:
                stringToAlert += array.indexOf(i) + " ";
                break;
            case array[i] === "fleck":
                stringToAlert += "fleck: " + array.lastIndexOf("fleck") + " ";
                break;
            case array[i] === "greplin":
                stringToAlert += array[i].replace("JAG HAR BLIVIT ERSATT") + " ";
                break;
            case array[i].length > 7:
                stringToAlert += "Jag var längre än 7 tecken: " + array[i].substring(2, 5) + " ";
                break;
            default:
                stringToAlert += array[i] + " ";
                break;
        }
    }
    alert(stringToAlert);
}
/*

### String objects page 132: ###
9. check if the 4th element in the array is a number
*/
addDiv("Check if 4th element in array is a number", checkIsNumber);
function checkIsNumber() {
    if (isNaN(array[4])) {
        alert(array[4] + "Inget nummer");
    } else {
        alert(Number(array[4]) + " Jag är ett nummer");
    };
}
/*

### Math page 134: ###
10. Round one of the numbers in the paragraph up/down
*/
addDiv("Round number in paragraph", roundNumber);
function roundNumber() {
    alert(array[4] + "--> " + Math.round(array[4]));
}
/*
11. replace the 3rd word with PI then roud it to the nearest integer
*/
addDiv("Replace 3rd word with PI and round it to integer", replace3rd);
function replace3rd() {
    alert(array[2] + "--> " + Math.PI + "-->" + Math.round(Math.PI));
}

/*

### Date object###
12. Calculate how many days it's until your birthday and present it.
*/
addDiv("Days until my birthday", daysUntilBirthday);
function daysUntilBirthday() {
    
    var birthday = document.getElementById("birthdayPresentation");
    var oneDay = 24 * 60 * 60 * 1000;
    var today = new Date();
    var year = today.getFullYear();
    var date = new Date(year, 11, 04);
    if (today > date) {
        date = new Date((Number(year + 1)), 11, 4);
    }
    var untilMyBirthday = Math.round(Math.abs((today.getTime() - date.getTime()) / (oneDay)));
    birthday.innerHTML = "Days until my birthday: " + untilMyBirthday;
}
/*
13. Calculate how many minutes old you are and present it.
*/
addDiv("How many minutes old?", minutesOld);
function minutesOld() {
    var ageInMinutes = document.getElementById("birthdayPresentation");
    var minutesPerYear = (24 * 60) * 365;
    var date = new Date(1994, 12, 04).getFullYear();
    var today = new Date().getFullYear();
    var myAgeInMinutes = (today - date) * minutesPerYear;
    ageInMinutes.innerHTML = "Min ålder i minuter (ungefär): " + myAgeInMinutes;
}
/*
Bonus exercises:
### Demo page 141:###
-Download the code to the book. Wipe the code from the js-file and rewrite it with the help from the book.
-For additional reading and training go to: http://www.w3schools.com/jsref/jsref_obj_string.asp
 and look at JS String, JS Number, JS Math and JS Date

*/