document.getElementById("readSerieOfNumber").addEventListener('click', returnSerieOfNumberUntilZero, true);

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
