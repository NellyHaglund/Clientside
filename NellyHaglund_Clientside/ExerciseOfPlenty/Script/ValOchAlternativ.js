document.getElementById("button_IfFirstNumberGreatest_ThenShow").addEventListener('click', checkIfFirstNumberIsTheGreatest, true);
document.getElementById("button_IfFirstNumberIsTwiceAsSecond_ThenToBigNumber").addEventListener('click', checkIfFirstNumberIsTwiceTheSecond, true);
document.getElementById("button_CheckIfNumberIsDivisibleBy3").addEventListener('click',checkIfNumberDivisibleBy3 , true);
document.getElementById("button_CheckIfNumberIsOddOrEven").addEventListener('click', oddOrEven, true);
document.getElementById("button_canDivideFirstNumberWithSecond").addEventListener('click', oneNumberDivisibleByAnother, true);
document.getElementById("button_ToPay").addEventListener('click', calculatePaymentSum, true);

function checkIfFirstNumberIsTheGreatest() {
    var numbers = document.getElementById("input_numbers_Greatest").value.split(',');
    if (numbers[0] > numbers[1]) {
        document.getElementById("IfFirstNumberGreatest_ThenShow").innerHTML = "The first number is the greatest:" + numbers[0];
    } else {
        document.getElementById("IfFirstNumberGreatest_ThenShow").innerHTML = "The last number is the greatest...";
    }
}
function checkIfFirstNumberIsTwiceTheSecond() {
    var numbers = document.getElementById("input_numbers_DoubleUp").value.split(',');
    if ((numbers[1] * 2) < numbers[0]) {
        document.getElementById("IfFirstNumberIsTwiceAsSecond_ThenToBigNumber").innerHTML = "TO BIG NUMBER!";
    } else {
        document.getElementById("IfFirstNumberIsTwiceAsSecond_ThenToBigNumber").innerHTML = "";

    }
}
function checkIfNumberDivisibleBy3() {
    var number = document.getElementById("input_number_Modulo").value;
    if (number%3 === 0) {
        document.getElementById("showNumberIfDivisibleBy3WithNoRest").innerHTML = "Number can be divided by three (number%3): " + number;
    } else {
        document.getElementById("showNumberIfDivisibleBy3WithNoRest").innerHTML = "Number cannot be divided by three (number%3): ";

    }
}
function oddOrEven() {
    var number = document.getElementById("input_number_OddOrEven").value;
    if ((number % 2) === 0) {
        document.getElementById("tellIfNumberIsOddOrEven").innerHTML = "Your number is even";
    } else {
        document.getElementById("tellIfNumberIsOddOrEven").innerHTML = "Your number is odd";

    }
}
function oneNumberDivisibleByAnother() {
    var numbers = document.getElementById("input_numberXY").value.split(',');
    if ((Number(numbers[0]) % Number(numbers[1])) === 0) {
        document.getElementById("firstNumberDivisibleWithSecond").innerHTML = "First number is divisible by the second";
    } else {
        document.getElementById("firstNumberDivisibleWithSecond").innerHTML = "First number is NOT divisible by the second";

    }
}
function calculatePaymentSum() {
    var amount = Number(document.getElementById("input_items").value);
    var pricePerUnit = Number(document.getElementById("input_pricePerUnit").value);
    var percentToPay = 0.9;
    var paymentSum = (amount * pricePerUnit) * percentToPay;
    document.getElementById("paymentSum").innerHTML = "You must pay: " + paymentSum + "SEK";

}
