document.getElementById("button_calculateSquareOfNumber").addEventListener('click', calculateSquare, true);
document.getElementById("button_calculateWage").addEventListener('click', calculateSum, true);
document.getElementById("button_calculateHoursIntoMinutesAndSeconds").addEventListener('click', calculateMinutesAndSecondsOnGivenHours, true);

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