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
// const num1Container = document.querySelector(".num1");
// const operatorContainer = document.querySelector(".num1");
// const num2Container = document.querySelector(".num2");
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

const getOperation = (e)=>{
    let num;
    btn.forEach((btn)=>{
        if (btn == numBtn) {
            btn.addEventListener("click",()=>{
                let digit = e.target.value;
                num += digit;
                operationContainer.textContent += num;
            })
        } else if (btn == operatorBtn) {
            btn.addEventListener("click",()=>{
                operation.push(num);
                num = '';
                let operator = e.target.textContent;
                operation.push(operator);
                operationContainer.textContent += operator;
            })
        }
    })
}

//  DELETE AND CLEAR

const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");

deleteBtn.addEventListener("click", ()=>{
    let numArray = numString.split('');
    numArray.splice(-1,1);
    numString = numArray.join('');
    operationContainer.textContent = numString;
})

clearBtn.addEventListener("click", ()=>{
    operation = [];
})




equalsBtn.addEventListener("click",()=>{
    const operate = (num1,num2)=>{
        let num1 = operation[0];
        let num2 = operation[2];
        if (operation[1] === "+") {
            return num1 + num2;
        } else if (operation[1] === "-") {
            return num1 + num2;
        } else if (operation[1] === "×") {
            return num1 * num2;
        } else if (operation[1] === "÷") {
            return num1 / num2;
        }
    }
    resultContainer.textContent = operate();
})