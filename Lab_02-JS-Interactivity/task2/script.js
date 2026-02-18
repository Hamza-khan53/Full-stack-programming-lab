function calculate() {

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;

    let resultBox = document.getElementById("resultBox");
    let result;

    // Check if inputs are empty
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter both numbers!");
        return;
    }

    // Prevent division by zero
    if (operation === "/" && num2 === 0) {
        alert("Division by zero is not allowed!");
        return;
    }

    // Perform calculation
    if (operation === "+") {
        result = num1 + num2;
    }
    else if (operation === "-") {
        result = num1 - num2;
    }
    else if (operation === "*") {
        result = num1 * num2;
    }
    else if (operation === "/") {
        result = num1 / num2;
    }

    // Display result
    document.getElementById("result").innerText = result;

    // Change background color
    if (result > 0) {
        resultBox.style.backgroundColor = "lightgreen";
    }
    else if (result < 0) {
        resultBox.style.backgroundColor = "lightcoral";
    }
    else {
        resultBox.style.backgroundColor = "lightgray";
    }
}
