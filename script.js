const oneBtn = document.getElementById("n1");
const twoBtn = document.getElementById("n2");
const threeBtn = document.getElementById("n3");
const fourBtn = document.getElementById("n4");
const fiveBtn = document.getElementById("n5");
const sixBtn = document.getElementById("n6");
const sevenBtn = document.getElementById("n7");
const eightBtn = document.getElementById("n8");
const nineBtn = document.getElementById("n9");
const zeroBtn = document.getElementById("n0");
const decimalBtn = document.getElementById("decimal");
// const piBtn = document.getElementById("pi");

const operationContainer = document.querySelector(".operation-container");
const resultContainer = document.querySelector(".result-container");

const addBtn = document.getElementById("add");
const substractBtn = document.getElementById("substract");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
const equalsBtn = document.getElementById("equals");

const operatorBtn = document.querySelectorAll(".btn--operator")

const numBtn = document.querySelectorAll(".btn--number");

const btn = document.querySelectorAll(".btn--towrite");

// GETTING THE NUMBER

let operation = []
let num = '';

const getOperation = ()=>{
    numBtn.forEach((btn)=>{
        btn.addEventListener("click",(e)=>{
            let digit = e.target.value;
            num += digit;
            operationContainer.textContent += digit;
        })
    })
    
    operatorBtn.forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
            if (num !== '') {
                operation.push(num);
                num = '';
            }
            let operator = e.target.textContent;
            operation.push(operator);
            operationContainer.textContent += operator;
        })
    })
}

//  DELETE AND CLEAR

const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");

deleteBtn.addEventListener("click", ()=>{
    let lastElement = operation[operation.length - 1]
    if (lastElement.length === 1) {
        operation.pop();
        operationContainer.textContent = operationContainer.textContent.slice(0,-1);
    } else {
        let lastElementArr = lastElement.split('');
        lastElementArr.pop();
        lastElement = lastElementArr.join('');
        operation[operation.length - 1] = lastElement;
        operationContainer.textContent = operationContainer.textContent.slice(0,-1);
    }
})

clearBtn.addEventListener("click", ()=>{
    operation = [];
    num = '';
    operationContainer.textContent = '';
    resultContainer.textContent = '';
})


const operate = ()=>{
    let num1 = parseFloat(operation[0]);
    let num2 = parseFloat(operation[2]);
    let operator = operation[1];
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "×") {
        return num1 * num2;
    } else if (operator === "÷") {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return "MATH ERROR";
        }
    } else {
        return 0;
    }
}

equalsBtn.addEventListener("click",()=>{
    operation.push(num);
    const result = operate();
    resultContainer.textContent = result;
})

getOperation();