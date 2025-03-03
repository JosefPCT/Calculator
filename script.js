console.log('Debug testing...');

let a = "",b = "",operator = "";

let digit = document.querySelector(".digits");
let operation = document.querySelector(".operation");

digit.addEventListener('click', test);
operation.addEventListener('click', test);


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

function addToDisplay(){

}

function showDisplay(){
    let display = document.querySelector(".display");
    //let text = testArr.join("");
    display.textContent = `${testArr.join("")}`;
}

function calculate(){
    //test
    let arrDigits = [];
    let arrOperators = [];
    x = testArr.join("");

    // gets all the digits, separated by the operators
    arrDigits = x.split(/(?:\+|\-|\*|\/)+/); // (/\+|\-|\*|\//);

    // gets all the operators (with an empty space at the first and last index)
    arrOperators = x.split(/(?:\d)+/);
    // remove first and last
    arrOperators.pop();
    arrOperators.shift();

    //removes duplicate operations
    arrOperators = arrOperators.map((item) => item[0]);
}

let testArr = [];
function test(e){

    //console.log(e.target.dataset.digit || e.target.dataset.operation);
    if (e.target.dataset.digit){
        console.log("clicked a digit");
        if(operator){
            console.log('has an operator, adding to b');
            // b += e.target.dataset.digit;
            testArr.push(e.target.dataset.digit);
            
        } else if(!operator){
            console.log("no operator");
            // a += parseInt(e.target.dataset.digit);
            testArr.push(e.target.dataset.digit);
        }
        
        
    }
    if (e.target.dataset.operation){
        console.log('clicked an operation');
        // operator = e.target.dataset.operation;
        testArr.push(e.target.dataset.operation);
    } 
    showDisplay();
}