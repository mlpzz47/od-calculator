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


// GETTING THE NUMBER

const numBtn = document.querySelectorAll(".btn--number");
let numString = "";
let numPressed = false;

const getDigit = (e)=>{
    return new Promise((resolve) => {
        const digit = e.target.value;
        resolve(digit);
    })
}

numBtn.forEach(btn =>{
    btn.addEventListener("click", (e)=>{
        getDigit(e).then((digit) => {
            if (digit) {
                numString += digit;
                numPressed = true;
                if (digit === "." && numString.includes(".")) {
                    decimalBtn.setAttribute("disabled", "true")
                }
                operationContainer.textContent = numString;
            }
        })
    })
})

const getNum = async ()=> {
    while(numPressed){
        await getDigit();
        
    }
    let finalNum = parseInt(numString);
    numString = "";
    return finalNum;
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
// clearBtn.addEventListener("click", ()=>{

// })


const operate = (num1,num2)=>{
    
}