// GETTING THE NUMBER

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
const piBtn = document.getElementById("pi");

const numBtn = document.querySelectorAll(".btn--number");
const getDigit = (e)=>{
    return new Promise((resolve) => {
        resolve(()=>{
            const value = e.target.value;
            return value && true;
        })
    })
}

numBtn.forEach(btn =>{
        btn.addEventListener("click", getDigit())
    })

const getNum = async ()=> {
    let numString;
    while(numPressed){
        await getDigit(digit);
        numString += digit;
    }
    let finalNum = parseInt(numString);
    return finalNum;
}

const addBtn = document.getElementById("add");
const substractBtn = document.getElementById("substract");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
const equalsBtn = document.getElementById("equals");

const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");

const operationContainer = document.querySelector(".operation-container");
const resultContainer = document.querySelector(".result-container");



const operate = (num1,num2)=>{
    
}