console.log('Debug testing...');

let a,b,operator;

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

let x = document.querySelector(".digits");
x.addEventListener('click', test);

function test(e){

    console.log(e.target.dataset.digit);
}