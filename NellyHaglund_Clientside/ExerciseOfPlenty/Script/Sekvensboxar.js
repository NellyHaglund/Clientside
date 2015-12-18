document.getElementById("button_calculateSquareOfNumber").addEventListener('click', calculateSquare, true);
document.getElementById("button_calculateWage").addEventListener('click', calculateSum, true);
document.getElementById("button_calculateHoursIntoMinutesAndSeconds").addEventListener('click', calculateMinutesAndSecondsOnGivenHours, true);
document.getElementById("button_calculateSumAndAverage").addEventListener('click', calculateSumAndAverage, true);
document.getElementById("button_convertSEKtoPoundsAndDollars").addEventListener('click', convertSEKtoPoundAndDollar, true);
document.getElementById("button_calculateFunction").addEventListener('click', calculateFunction, true);

function calculateSquare() {
    var numberToCalc = Number(document.getElementById("input_numberToSquare").value);
    var result = numberToCalc * numberToCalc;
    document.getElementById("squaredNumber").innerHTML = result;
}

function calculateSum() {
    var baseSalary = 15000;
    var salesAmount = document.getElementById("input_salesAmount").value;
    var precentOfSalesAmount = 0.09;
    var extraToSalary = salesAmount * precentOfSalesAmount;
    var totalWage = baseSalary + extraToSalary;
    document.getElementById("totalWage").innerHTML = totalWage;
}

function calculateMinutesAndSecondsOnGivenHours() {
    var hours = document.getElementById("input_Hours").value;
    var minutes = hours * 60;
    var seconds = minutes * 60;
    var resultString = hours + " hours in minutes: " + minutes + " / " + hours + " hours in seconds: " + seconds;
    document.getElementById("hoursToMinutesAndSecondsResult").innerHTML = resultString;
}

function calculateSumAndAverage() {
    var numbers = document.getElementById("input_numbers").value.split(',');
    var sum = 0;
    numbers.forEach(x => sum += Number(x));
    var average = sum / numbers.length;
    var resultString = "Sum of your numbers = " + sum + " / Average of your numbers: " + average;
    document.getElementById("sumAndAverage").innerHTML = resultString;
}

function convertSEKtoPoundAndDollar() {
    var integer = document.getElementById("input_integer").value;
    var oneDollarInSek = 6;
    var onePoundIsek = 12;
    var pounds = integer /onePoundIsek;
    var dollar = integer / oneDollarInSek;
    var resultString = "Your SEK in pounds = " + pounds + " / Your SEK in dollar = " + dollar;
    document.getElementById("SEKinPoundsAndDollars").innerHTML = resultString;
}

function calculateFunction() {
    //function ax3+7
    var a = document.getElementById("input_numberA").value;
    var x = document.getElementById("input_numberX").value;

}