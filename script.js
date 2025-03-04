console.log('Debug testing...');

let a = "",b = "",operator = "";

let digit = document.querySelector(".digits");
let operation = document.querySelector(".operation");
let display = document.querySelector(".display");
let mainArr = [];

digit.addEventListener('click', clickedButton);
operation.addEventListener('click', clickedButton);


function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
};

function divide(a,b){
    return a / b;
}

function back(){
    mainArr.pop();
    showDisplay();
}

function showDisplay(){
    display.textContent = `${mainArr.join("")}`;
}

function calculate(){
    let arrDigits = [];
    let arrOperators = [];
    let x = mainArr.join("");

    //removes operators on the start of the string by getting the first index of a matched digit then slicing from that index
     let index = x.search(/\d/);
     x = x.slice(index);

    // gets all the digits, separated by the operators
    arrDigits = x.split(/(?:\+|\-|\*|\/)+/); // (/\+|\-|\*|\//);

    //removes the last element of arrDigits if it's empty
    if(arrDigits[arrDigits.length -1 ] === "") { arrDigits.pop()};

    // gets all the operators (with an empty space at the first and last index)
    arrOperators = x.split(/(?:\d)+/);

    //removes duplicate operations
    arrOperators = arrOperators.map((item) => item[0]);

    // remove first and last
    arrOperators.pop();
    arrOperators.shift();

    console.log(arrOperators);
    console.log(arrDigits)
    
    //logic for operation
    arrOperators.forEach((item) =>{
        let firstNumber = parseInt(arrDigits.shift())
        let secondNumber = parseInt(arrDigits.shift());
        let result;

        console.log(arrDigits);
        switch(item) {
            case "+":
                console.log("adding");
                result = add(firstNumber,secondNumber);
            break;

            case "-":
                console.log("subtracting...");
                result = subtract(firstNumber,secondNumber)
            break;

            case "*":
                console.log("multiplying...");
                result = multiply(firstNumber,secondNumber)
            break;

            case "/":
                console.log("dividing...")
                result = divide(firstNumber,secondNumber)
            break;

            default:
                console.log("switching error");
        }
        // to check if array digits is empty, and display result if it is, otherwise unshift the result into the array digits to continue operation
        if (arrDigits.length === 0){
            mainArr = [];
            mainArr.push(result);
            showDisplay();
            return;
        } else {
            arrDigits.unshift(result);
            console.log(arrDigits);
        }
    });

    
}



function clickedButton(e){

    //console.log(e.target.dataset.digit || e.target.dataset.operation);
    if (e.target.dataset.digit){
        console.log("clicked a digit");
        if(operator){
            console.log('has an operator, adding to b');
            mainArr.push(e.target.dataset.digit);
            
        } else if(!operator){
            console.log("no operator");
            mainArr.push(e.target.dataset.digit);
        }  
    }

    if (e.target.dataset.operation){
        console.log('clicked an operation');
        if(e.target.dataset.operation === "clear"){
            console.log("clicked clear");
            mainArr = [];
            display.textContent = "";
            return;
        }
        if(e.target.dataset.operation === "calculate"){
            console.log('clicked calculate');
            calculate();
            return;
        }
        if(e.target.dataset.operation === "back"){
            console.log("backspace");
            back();
            return;
        }
        mainArr.push(e.target.dataset.operation);
    } 
    showDisplay();
}