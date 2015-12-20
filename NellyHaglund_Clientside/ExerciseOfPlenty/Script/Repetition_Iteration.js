document.getElementById("readSerieOfNumber").addEventListener('click', returnSerieOfNumberUntilZero, true);
document.getElementById("button_EvenNumbersBetween0And100").addEventListener('click', returnEvenNumbersBetween0And100, true);

function returnSerieOfNumberUntilZero() {
    var numbers = document.getElementById("serieOfNumbers").value;
    for (var prop in numbers) {
        if (numbers.hasOwnProperty(prop)) {
            if (numbers[prop] != 0) {
                document.getElementById("resultUntilZero").innerHTML += numbers[prop];
            } else {
                document.getElementById("resultUntilZero").innerHTML += "Ohh, zero...";
                break;
            }
        }
    }
}
function returnEvenNumbersBetween0And100() {
    for (var i = 2; i <= 100 ; i++) {
        if (i % 2 == 0) {
            document.getElementById("EvenNumbersBetween0And100").innerHTML += i + " ";

        }
    }
}
