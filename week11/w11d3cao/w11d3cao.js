"use strict";
const carInfo = {
    doors: 2,
    color: "ref",
    brand: "bmw"
};
console.log(carInfo);
// as HTMLInputElement
const text = document.getElementById("textInput");
const number = document.getElementById("numberInput");
const button = document.querySelector("button");
const checkbox = document.getElementById("checkInput");
button.onclick = () => {
    console.log(text.value, number.value, checkbox.value);
    if (checkbox.checked) {
        console.log("checkbox checked");
    }
};
