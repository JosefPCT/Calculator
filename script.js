console.log('Debug testing...');

let a = "",b = "",operator = "";

let digit = document.querySelector(".digits");
let operation = document.querySelector(".operation");
let display = document.querySelector(".display");
let testArr = [];

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

function back(){
    testArr.pop();
}

function addToDisplay(){

}

function showDisplay(){
    //let text = testArr.join("");
    display.textContent = `${testArr.join("")}`;
}

function calculate(){
    //test
    let arrDigits = [];
    let arrOperators = [];
    let x = testArr.join("");

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
    //figure out logic 
    
}



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
        if(e.target.dataset.operation === "clear"){
            console.log("clicked clear");
            testArr = [];
            display.textContent = "";
            return;
        }
        if(e.target.dataset.operation === "calculate"){
            console.log('clicked calculate');
            calculate();
            return;
        }
        testArr.push(e.target.dataset.operation);
    } 
    showDisplay();
}