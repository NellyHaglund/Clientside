document.getElementById("button_IfFirstNumberGreatest_ThenShow").addEventListener('click', checkIfFirstNumberIsTheGreatest, true);
document.getElementById("button_IfFirstNumberIsTwiceAsSecond_ThenToBigNumber").addEventListener('click', checkIfFirstNumberIsTwiceTheSecond, true);

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
