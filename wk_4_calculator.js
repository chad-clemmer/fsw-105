var readlinesync = require('readline-sync');
var firstNum = readlinesync.questionInt("Please enter your first number: ");
var secondNum = readlinesync.questionInt("Please enter your second number: ");
var enteredOperation = readlinesync.question("Please enter the operation to perform: add, sub, mul, div ");

function addTwoNumbers(num1, num2){
    return (num1 + num2);
}

function subtractTwoNumbers(num1, num2){
    return (num1 - num2);
}

function multiplyTwoNumbers(num1, num2){
    return (num1 * num2);
}

function divideTwoNumbers(num1, num2){
    return (num1 / num2);
}

function calculator(number1, number2, operation){
    if (operation == "add"){
        console.log("Addition of two numbers: " + addTwoNumbers(number1, number2));

    } else if (operation == "sub"){
        console.log("Subtraction of two numbers: " + subtractTwoNumbers(number1, number2));

    } else if (operation == "mul"){
        console.log("Multiplication of two numbers: " + multiplyTwoNumbers(number1, number2));

    } else if (operation == "div"){
        console.log("Division of two numbers: " + divideTwoNumbers(number1, number2));

    } else{
        console.log("Cannot identify the entered operation. Please try again!");
    }
}
 calculator(firstNum, secondNum, enteredOperation);