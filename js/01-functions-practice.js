//STEP 1
function halfNumber(number) {
    const result = number / 2;
    console.log(`Half of ${number} is ${result}.`);
    return result;
  }
//STEP 2
function squareNumber(number) {
    const result = number * number;
    console.log(`The result of squaring the number ${number} is ${result}.`);
    return result;
  }
//STEP 3
function percentOf(number1, number2) {
    const result = (number1 / number2) * 100;
    console.log(`${number1} is ${result}% of ${number2}.`);
    return result;
  }
//STEP 4
function findModulus(number1, number2) {
    const result = number1 % number2;
    console.log(`${number1} is the modulus of ${number2} and ${result}.`);
    return result;
  }
//STEP 5
halfNumber(5);
squareNumber(3);
percentOf(2, 4);
findModulus(2, 10);