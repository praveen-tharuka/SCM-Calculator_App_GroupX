// Calculator functions will be added by team members

// Helper function to get input values
function getInputs() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    return { num1, num2 };
}

// Helper function to display result
function displayResult(value) {
    document.getElementById('result').textContent = value;
}

// Addition function - TO BE IMPLEMENTED BY STUDENT 2
function add() {
    alert('Addition not implemented yet!');
}

// Subtraction function - TO BE IMPLEMENTED BY STUDENT 3
function subtract() {
    alert('Subtraction not implemented yet!');
}

// Multiplication function - TO BE IMPLEMENTED BY STUDENT 4
function multiply() {
    alert('Multiplication not implemented yet!');
}

// Division function - TO BE IMPLEMENTED BY STUDENT 5
function divide() {
    function divide() {
    const { num1, num2 } = getInputs();
    if (isNaN(num1) || isNaN(num2)) {
        displayResult('Please enter valid numbers');
        return;
    }
    if (num2 === 0) {
        displayResult('Cannot divide by zero!');
        return;
    }
    const result = num1 / num2;
    displayResult(result);
}