// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        return "Division by zero is not allowed";
    }
    return a / b;
}

// Example Usage:
console.log(add(10, 5));      // Output: 15
console.log(subtract(10, 5)); // Output: 5
console.log(multiply(10, 5)); // Output: 50
console.log(divide(10, 5));   // Output: 2

