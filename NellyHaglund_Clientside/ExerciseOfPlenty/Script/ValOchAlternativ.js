document.getElementById("button_IfFirstNumberGreatest_ThenShow").addEventListener('click', checkIfFirstNumberIsTheGreatest, true);

function checkIfFirstNumberIsTheGreatest() {
    var numbers = document.getElementById("input_numbers").value.split(',');
    if (numbers[0] > numbers[1]) {
        document.getElementById("IfFirstNumberGreatest_ThenShow").innerHTML =  "The first number is the greatest:" + numbers[0];
    } else {
        document.getElementById("IfFirstNumberGreatest_ThenShow").innerHTML = "The last number is the greatest...";
    }
}
