// ADD A FUNCTION CALLED CALCULATE
function calculate (x, y, operation) {
    if (operation === "add") {
        return x + y;
    } else if (operation === "subtract") {
        return x - y;
    } else if (operation === "multiply") {
        return x * y;
    } else if (operation === "divide") {
        return x / y;
    } else {
        return "Invalid variable";
    }
}
let again;

do {
// COLLECT FIRST NUMBER FROM USER
const num1 = parseFloat(prompt("Enter first number:"));
// COLLECT SECOND NUMBER FROM USER
const num2 = parseFloat(prompt("Enter seciond number:"));
// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
const ops = prompt("Enter operation (add, subtract, multiply, divide").toLowerCase();
// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
const result = calculate (num1, num2, ops);
alert(`Result: ${result}`);
// RERUN APPLICATION
again = prompt("Do you want to perform another operation? (y/n)").toLowerCase();
} while(again === "y");