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
