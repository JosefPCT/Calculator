# Calculator
making a calculator using Hml,CSS and Javascript

EXPECTATIONS:
Basic functions (add, subtract, multiply, divide)
Three variables to store first number, second number, and the operator
A named function (operate), take an operator, and two numbers, then call above functions
Basic HTML structure of calculator (including display of numbers, clear button);
A named function display numbers and operators when clicked


PSEUDOCODE:

basic functions:
takes two parameters(a,b)
return result

operate function:
takes three parameters(a,b,operator)
SWITCH (operator)
  case + call add function
  case - call subtract function
  case * call multiply
  case * call divide
END SWITCH

Display function:
event listeners to buttons, use e.target to determine which button was clicked
INIT number variables to 0, operator variable to empty
IF operator is clicked, store in operator variable
IF num is clicked && operator variable is empty, store in first number variable(a)
IF num is clicked && operator variable is not empty, store in second number variable(b)
IF = button is clicked, call on operate function and pass the variables
IF clear button is clicked, reset and initialize the variable and display;

extra credit:
figure out a way to have multiple operations in a single go
store in an array,
if first character is an operation -> parseInt("") -> NaN



Calculate function
takes in an array,
convert into a string with join(),
get the first instance of a digit, get the index, 
  (let index = x.search(/\d/); x.slice(index));
get the index of the last digit instance, 
slice from the first instance of a digit, and  the last instance of a digit
make an an array  of digits (arrayDigits) with split and a regex filter
make an array of operations (arrayOperations) with split and a regex filter
iterate through operations array
  if(operator === +) call addition function, and pass firstNumber and secondNumber
  if(operator === -) call subtraction function, and pass firstNumber and secondNumber
  if(operator === *) call multiplication function, and pass firstNumber and secondNumber
  if(operator === /) call division function, and pass firstNumber and secondNumber
  store the result into firstNumber (firstNumber = result || arrayDigits[0])
  store the next digit into secondNumber (secondNumber = secondNumber[i + 1])
  using reduce method (acc,item,index,array)


features to add:(make a branch)
**account for negative numbers 
