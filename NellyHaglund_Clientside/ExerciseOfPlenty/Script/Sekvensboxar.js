document.getElementById("CalculateSquareOfTwo").addEventListener('click', calculateSqareOfTwo, true);

function calculateSqareOfTwo() {
    var numberToCalc = Number(document.getElementById("squareOfTwo").value);
    var result = numberToCalc * numberToCalc;
    document.getElementById("squareOfTwoResult").innerHTML = result;
}