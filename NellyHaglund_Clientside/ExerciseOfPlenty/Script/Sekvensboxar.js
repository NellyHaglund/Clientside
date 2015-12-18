document.getElementById("CalculateSquareOfTwo").addEventListener('click', calculateSqareOfTwo, true);
document.getElementById("calculateSum").addEventListener('click', calculateSum, true);



function calculateSqareOfTwo() {
    var numberToCalc = Number(document.getElementById("squareOfTwo").value);
    var result = numberToCalc * numberToCalc;
    document.getElementById("squareOfTwoResult").innerHTML = result;
}

function calculateSum() {
    var baseSalary = 15000;
    var salesSum = document.getElementById("salesSum").value;
    var salesPercent = 0.09;
    var extraToSalary = salesSum * salesPercent;
    var salary = baseSalary + extraToSalary;
    document.getElementById("sales_sum").innerHTML = salary;

    

}