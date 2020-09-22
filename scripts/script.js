const powerOf = (num, exp) => Math.pow(num, exp);

let base;
let exponent;

let operation = document.querySelector(".operation");
let result = document.querySelector(".result");
let equalsSign = document.querySelector(".equals");

equalsSign.hidden = true;

const calculateBttn = document.querySelector("#calculateBttn");
const clearBttn = document.querySelector("#clearBttn");

calculateBttn.addEventListener("click", () => {
    base = Number(document.getElementById("base").value);
    exponent = Number(document.getElementById("exponent").value);
    let answer = powerOf(base, exponent);
    showOperation(answer);
});

clearBttn.addEventListener("click", () => {
    base = document.getElementById("base").value = "";
    exponent = document.getElementById("exponent").value = "";
    operation.innerHTML = "";
    equalsSign.hidden = true;
    result.innerHTML = "";
}); 

function showOperation (answer) {
    operation.innerHTML = `${base}<sup>${exponent}</sup>`;
    equalsSign.hidden = false;
    result.innerHTML = answer;
}