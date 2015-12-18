document.getElementById("button_IfFirstNumberGreatest_ThenShow").addEventListener('click', checkIfFirstNumberIsTheGreatest, true);
document.getElementById("button_IfFirstNumberIsTwiceAsSecond_ThenToBigNumber").addEventListener('click', checkIfFirstNumberIsTwiceTheSecond, true);
document.getElementById("button_CheckIfNumberIsDivisibleBy3").addEventListener('click',checkIfNumberDivisibleBy3 , true);

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
